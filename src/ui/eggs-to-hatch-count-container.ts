import BattleScene from "#app/battle-scene.js";
import { addWindow } from "./ui-theme";
import { addTextObject, TextStyle } from "./text";

/**
 * A container that displays the count of hatching eggs.
 * Extends Phaser.GameObjects.Container.
 */
export default class EggsToHatchCountContainer extends Phaser.GameObjects.Container {
  private readonly WINDOW_DEFAULT_WIDTH = 37;
  private readonly WINDOW_MEDIUM_WIDTH = 42;
  private readonly WINDOW_HEIGHT = 26;

  private eggsHatchCount: integer;
  private eggsHatchCountWindow: Phaser.GameObjects.NineSlice;

  public eggCountText: Phaser.GameObjects.Text;

  /**
   * @param {BattleScene} scene - The scene to which this container belongs.
   * @param {number} eggsHatchCount - The number of eggs to hatch.
   */
  constructor(scene: BattleScene, eggsHatchCount: integer) {
    super(scene, 0, 0);
    this.eggsHatchCount = eggsHatchCount;
  }

  /**
   * Sets up the container, creating the window, egg sprite, and egg count text.
   */
  setup(): void {
    const windowWidth = this.eggsHatchCount > 9 ? this.WINDOW_MEDIUM_WIDTH : this.WINDOW_DEFAULT_WIDTH;

    this.eggsHatchCountWindow = addWindow(this.scene as BattleScene, 5, 5, windowWidth, this.WINDOW_HEIGHT);
    this.setVisible(this.eggsHatchCount > 1);

    this.add(this.eggsHatchCountWindow);

    const eggSprite = this.scene.add.sprite(19, 18, "egg", "egg_0");
    eggSprite.setScale(0.32);

    this.eggCountText = addTextObject(this.scene, 28, 13, `${this.eggsHatchCount}`, TextStyle.MESSAGE, { fontSize: "66px" });

    this.add(eggSprite);
    this.add(this.eggCountText);
  }

  /**
   * Resets the window size to the default width and height.
   */
  setWindowToDefaultSize(): void {
    this.eggsHatchCountWindow.setSize(this.WINDOW_DEFAULT_WIDTH, this.WINDOW_HEIGHT);
  }
}
