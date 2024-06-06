import BattleScene from "../battle-scene";
import { addTextObject, TextStyle } from "./text";
import { Mode } from "./ui";
import UiHandler from "./ui-handler";
import { Button } from "../enums/buttons";
import { addWindow, WindowVariant } from "./ui-theme";
import i18next from "i18next";
import { MysteryEncounterPhase } from "../phases/mystery-encounter-phase";
import { PartyUiMode } from "./party-ui-handler";
import MysteryEncounterOption from "../data/mystery-encounter-option";
import * as Utils from "../utils";
import { getPokeballAtlasKey } from "../data/pokeball";

export default class MysteryEncounterUiHandler extends UiHandler {
  private cursorContainer: Phaser.GameObjects.Container;
  private cursorObj: Phaser.GameObjects.Image;

  private optionsContainer: Phaser.GameObjects.Container;

  private descriptionWindow: Phaser.GameObjects.NineSlice;
  private descriptionContainer: Phaser.GameObjects.Container;
  private descriptionScrollTween: Phaser.Tweens.Tween;
  private rarityBall: Phaser.GameObjects.Sprite;

  private filteredEncounterOptions: MysteryEncounterOption[] = [];

  protected viewPartyIndex: integer = 0;

  protected blockInput: boolean = true;

  constructor(scene: BattleScene) {
    super(scene, Mode.MYSTERY_ENCOUNTER);
  }

  setup() {
    const ui = this.getUi();

    this.cursorContainer = this.scene.add.container(18, -38.7);
    this.cursorContainer.setVisible(false);
    ui.add(this.cursorContainer);
    this.optionsContainer = this.scene.add.container(18, -38.7);
    this.optionsContainer.setVisible(false);
    ui.add(this.optionsContainer);
    this.descriptionContainer = this.scene.add.container(0, -152);
    this.descriptionContainer.setVisible(false);
    ui.add(this.descriptionContainer);

    this.setCursor(this.getCursor());

    this.descriptionWindow = addWindow(this.scene, 0, 0, 150, 105, false, false, 0, 0, WindowVariant.THIN);
    this.descriptionContainer.add(this.descriptionWindow);

    this.rarityBall = this.scene.add.sprite(140, 10, "pb");
    this.descriptionContainer.add(this.rarityBall);
  }

  show(args: any[]): boolean {
    super.show(args);

    this.cursorContainer.setVisible(true);
    this.descriptionContainer.setVisible(true);
    this.optionsContainer.setVisible(true);
    this.displayEncounterOptions(!(args[0] as boolean || false));
    this.setCursor(this.getCursor());
    if (this.blockInput) {
      setTimeout(() => {
        this.unblockInput();
      }, 1500);
    }

    return true;
  }

  processInput(button: Button): boolean {
    const ui = this.getUi();

    let success = false;

    const cursor = this.getCursor();

    if (button === Button.CANCEL || button === Button.ACTION) {
      if (button === Button.ACTION) {
        if (cursor === this.viewPartyIndex) {
          // Handle view party
          this.clear();
          this.scene.ui.setMode(Mode.PARTY, PartyUiMode.VIEW_PARTY, -1, () => {
            this.scene.ui.setMode(Mode.MYSTERY_ENCOUNTER, true);
            setTimeout(() => {
              this.setCursor(this.viewPartyIndex);
              this.unblockInput();
            }, 300);
          });
        } else if (this.blockInput) {
          success = false;
        } else {
          const selected = this.filteredEncounterOptions[cursor];
          if ((this.scene.getCurrentPhase() as MysteryEncounterPhase).handleOptionSelect(selected, cursor)) {
            this.clear();
            success = true;
          } else {
            ui.playError();
          }
        }
      } else {
        // TODO: If we need to handle cancel option? Maybe default logic to leave/run from encounter idk
      }
    } else {
      switch (this.optionsContainer.length) {
      case 3:
        success = this.handleTwoOptionMoveInput(button);
        break;
      case 4:
        success = this.handleThreeOptionMoveInput(button);
        break;
      case 5:
        success = this.handleFourOptionMoveInput(button);
        break;
      }
    }

    if (success) {
      ui.playSelect();
    }

    return success;
  }

  handleTwoOptionMoveInput(button: Button): boolean {
    let success = false;
    const cursor = this.getCursor();
    switch (button) {
    case Button.UP:
      if (cursor < this.viewPartyIndex) {
        success = this.setCursor(this.viewPartyIndex);
      }
      break;
    case Button.DOWN:
      if (cursor === this.viewPartyIndex) {
        success = this.setCursor(1);
      }
      break;
    case Button.LEFT:
      if (cursor > 0) {
        success = this.setCursor(cursor - 1);
      }
      break;
    case Button.RIGHT:
      if (cursor < this.viewPartyIndex) {
        success = this.setCursor(cursor + 1);
      }
      break;
    }

    return success;
  }

  handleThreeOptionMoveInput(button: Button): boolean {
    let success = false;
    const cursor = this.getCursor();
    switch (button) {
    case Button.UP:
      if (cursor === 2) {
        success = this.setCursor(cursor - 2);
      } else {
        success = this.setCursor(this.viewPartyIndex);
      }
      break;
    case Button.DOWN:
      if (cursor === this.viewPartyIndex) {
        success = this.setCursor(1);
      } else {
        success = this.setCursor(2);
      }
      break;
    case Button.LEFT:
      if (cursor === this.viewPartyIndex) {
        success = this.setCursor(1);
      } else if (cursor !== 2) {
        success = this.setCursor(cursor - 1);
      }
      break;
    case Button.RIGHT:
      if (cursor === 1) {
        success = this.setCursor(this.viewPartyIndex);
      } else if (cursor < 1) {
        success = this.setCursor(cursor + 1);
      }
      break;
    }

    return success;
  }

  handleFourOptionMoveInput(button: Button): boolean {
    let success = false;
    const cursor = this.getCursor();
    switch (button) {
    case Button.UP:
      if (cursor >= 2 && cursor !== this.viewPartyIndex) {
        success = this.setCursor(cursor - 2);
      } else {
        success = this.setCursor(this.viewPartyIndex);
      }
      break;
    case Button.DOWN:
      if (cursor <= 1) {
        success = this.setCursor(cursor + 2);
      } else if (cursor === this.viewPartyIndex) {
        success = this.setCursor(1);
      }
      break;
    case Button.LEFT:
      if (cursor === this.viewPartyIndex) {
        success = this.setCursor(1);
      } else if (cursor % 2 === 1) {
        success = this.setCursor(cursor - 1);
      }
      break;
    case Button.RIGHT:
      if (cursor === 1) {
        success = this.setCursor(this.viewPartyIndex);
      } else if (cursor % 2 === 0 && cursor !== this.viewPartyIndex) {
        success = this.setCursor(cursor + 1);
      }
      break;
    }

    return success;
  }

  unblockInput() {
    if (this.blockInput) {
      this.blockInput = false;
      for (let i = 0; i < this.optionsContainer.length - 1; i++) {
        (this.optionsContainer.getAt(i) as Phaser.GameObjects.Text).setAlpha(1);
      }
    }
  }

  getCursor(): integer {
    return this.cursor ? this.cursor : 0;
  }

  setCursor(cursor: integer): boolean {
    const prevCursor = this.getCursor();
    const changed = prevCursor !== cursor;
    if (changed) {
      this.cursor = cursor;
    }

    this.viewPartyIndex = this.optionsContainer.length - 1;

    if (!this.cursorObj) {
      this.cursorObj = this.scene.add.image(0, 0, "cursor");
      this.cursorContainer.add(this.cursorObj);
    }

    if (cursor === this.viewPartyIndex) {
      this.cursorObj.setPosition(249, -17);
    } else if (this.optionsContainer.length === 3) { // 2 Options
      this.cursorObj.setPosition(-5 + (cursor % 2 === 1 ? 150 : 0), 16);
    } else if (this.optionsContainer.length === 4) { // 3 Options
      this.cursorObj.setPosition(-5 + (cursor % 2 === 1 ? 150 : 0), 8 + (cursor > 1 ? 16 : 0));
    } else if (this.optionsContainer.length === 5) { // 4 Options
      this.cursorObj.setPosition(-5 + (cursor % 2 === 1 ? 150 : 0), 8 + (cursor > 1 ? 16 : 0));
    }

    return changed;
  }

  displayEncounterOptions(slideInDescription: boolean = true): void {
    const mysteryEncounter = this.scene.currentBattle.mysteryEncounter;
    this.filteredEncounterOptions = mysteryEncounter.options;

    const titleText: string = i18next.t(mysteryEncounter.dialogue.encounterOptionsDialogue.title);
    const descriptionText: string = i18next.t(mysteryEncounter.dialogue.encounterOptionsDialogue.description);
    const queryText: string = i18next.t(mysteryEncounter.dialogue.encounterOptionsDialogue.query);

    // Clear options container (except cursor)
    this.optionsContainer.removeAll();

    // Options Window
    for (let i = 0; i < this.filteredEncounterOptions.length; i++) {
      let optionText;
      switch (this.filteredEncounterOptions.length) {
      case 2:
        optionText = addTextObject(this.scene, i % 2 === 0 ? 0 : 150, 8, "-", TextStyle.WINDOW);
        break;
      case 3:
        optionText = addTextObject(this.scene, i % 2 === 0 ? 0 : 150, i < 2 ? 0 : 16, "-", TextStyle.WINDOW);
        break;
      case 4:
        optionText = addTextObject(this.scene, i % 2 === 0 ? 0 : 150, i < 2 ? 0 : 16, "-", TextStyle.WINDOW);
        break;
      }
      const text = i18next.t(mysteryEncounter.dialogue.encounterOptionsDialogue.options[i].buttonLabel);
      if (text) {
        optionText.setText(text);
      }

      if (!this.filteredEncounterOptions[i].meetsRequirements(this.scene)) {
        // TODO: This option should be disabled/greyed out or removed if requirements are not met
      }
      if (this.blockInput) {
        optionText.setAlpha(0.5);
      }
      this.optionsContainer.add(optionText);
    }

    // View Party Button
    const viewPartyText = addTextObject(this.scene, 254, -24, "View Party", TextStyle.PARTY);
    this.optionsContainer.add(viewPartyText);

    // Description Window
    const titleTextObject = addTextObject(this.scene, 65 - (titleText.length), 6, titleText, TextStyle.TOOLTIP_TITLE, { wordWrap: { width: 830 } });
    this.descriptionContainer.add(titleTextObject);

    // Rarity of encounter
    const ballType = getPokeballAtlasKey(mysteryEncounter.encounterTier as number);
    this.rarityBall.setTexture(ballType, ballType);

    const longText = "\nThis is a super super super\nsuper long super super\nsuper super long super super super super long\ndescription.";
    const descriptionTextObject = addTextObject(this.scene, 6, 25, descriptionText + longText, TextStyle.TOOLTIP_CONTENT, { wordWrap: { width: 830 } });

    // Sets up the mask that hides the description text to give an illusion of scrollingzz
    const descriptionTextMaskRect = this.scene.make.graphics({});
    descriptionTextMaskRect.setScale(6);
    descriptionTextMaskRect.fillStyle(0xFFFFFF);
    descriptionTextMaskRect.beginPath();
    descriptionTextMaskRect.fillRect(6, 54, 206, 60);

    const abilityDescriptionTextMask = descriptionTextMaskRect.createGeometryMask();

    descriptionTextObject.setMask(abilityDescriptionTextMask);

    const descriptionLineCount = Math.floor(descriptionTextObject.displayHeight / 14.83);

    if (this.descriptionScrollTween) {
      this.descriptionScrollTween.remove();
      this.descriptionScrollTween = null;
    }

    // Animates the description text moving upwards
    if (descriptionLineCount > 2) {
      //descriptionTextObject.setY(69);
      this.descriptionScrollTween = this.scene.tweens.add({
        targets: descriptionTextObject,
        delay: Utils.fixedInt(2000),
        loop: -1,
        hold: Utils.fixedInt(2000),
        duration: Utils.fixedInt((descriptionLineCount - 2) * 2000),
        y: `-=${14.83 * (descriptionLineCount - 3)}`
      });
    }

    this.descriptionContainer.add(descriptionTextObject);

    const queryTextObject = addTextObject(this.scene, 65 - (queryText.length), 90, queryText, TextStyle.TOOLTIP_CONTENT, { wordWrap: { width: 830 } });
    this.descriptionContainer.add(queryTextObject);

    // Slide in description container
    if (slideInDescription) {
      this.descriptionContainer.x -= 150;
      this.scene.tweens.add({
        targets: this.descriptionContainer,
        x: "+=150",
        ease: "Sine.easeInOut",
        duration: 1000
      });
    }
  }

  clear(): void {
    super.clear();
    this.optionsContainer.setVisible(false);
    this.optionsContainer.removeAll(true);
    this.descriptionContainer.setVisible(false);
    // Keeps container background and pokeball
    this.descriptionContainer.removeBetween(2, this.descriptionContainer.length, true);
    this.getUi().getMessageHandler().clearText();
    this.eraseCursor();
  }

  eraseCursor(): void {
    if (this.cursorObj) {
      this.cursorObj.destroy();
    }
    this.cursorObj = null;
  }
}
