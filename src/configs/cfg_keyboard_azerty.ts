import {Button} from "#app/enums/buttons";
import {SettingKeyboard} from "#app/system/settings-keyboard";

const cfg_keyboard_azerty = {
    padID: 'default',
    padType: 'keyboard',
    deviceMapping: {
        KEY_A: Phaser.Input.Keyboard.KeyCodes.A,
        KEY_B: Phaser.Input.Keyboard.KeyCodes.B,
        KEY_C: Phaser.Input.Keyboard.KeyCodes.C,
        KEY_D: Phaser.Input.Keyboard.KeyCodes.D,
        KEY_E: Phaser.Input.Keyboard.KeyCodes.E,
        KEY_F: Phaser.Input.Keyboard.KeyCodes.F,
        KEY_G: Phaser.Input.Keyboard.KeyCodes.G,
        KEY_H: Phaser.Input.Keyboard.KeyCodes.H,
        KEY_I: Phaser.Input.Keyboard.KeyCodes.I,
        KEY_J: Phaser.Input.Keyboard.KeyCodes.J,
        KEY_K: Phaser.Input.Keyboard.KeyCodes.K,
        KEY_L: Phaser.Input.Keyboard.KeyCodes.L,
        KEY_M: Phaser.Input.Keyboard.KeyCodes.M,
        KEY_N: Phaser.Input.Keyboard.KeyCodes.N,
        KEY_O: Phaser.Input.Keyboard.KeyCodes.O,
        KEY_P: Phaser.Input.Keyboard.KeyCodes.P,
        KEY_Q: Phaser.Input.Keyboard.KeyCodes.Q,
        KEY_R: Phaser.Input.Keyboard.KeyCodes.R,
        KEY_S: Phaser.Input.Keyboard.KeyCodes.S,
        KEY_T: Phaser.Input.Keyboard.KeyCodes.T,
        KEY_U: Phaser.Input.Keyboard.KeyCodes.U,
        KEY_V: Phaser.Input.Keyboard.KeyCodes.V,
        KEY_W: Phaser.Input.Keyboard.KeyCodes.W,
        KEY_X: Phaser.Input.Keyboard.KeyCodes.X,
        KEY_Y: Phaser.Input.Keyboard.KeyCodes.Y,
        KEY_Z: Phaser.Input.Keyboard.KeyCodes.Z,
        KEY_0: Phaser.Input.Keyboard.KeyCodes.ZERO,
        KEY_1: Phaser.Input.Keyboard.KeyCodes.ONE,
        KEY_2: Phaser.Input.Keyboard.KeyCodes.TWO,
        KEY_3: Phaser.Input.Keyboard.KeyCodes.THREE,
        KEY_4: Phaser.Input.Keyboard.KeyCodes.FOUR,
        KEY_5: Phaser.Input.Keyboard.KeyCodes.FIVE,
        KEY_6: Phaser.Input.Keyboard.KeyCodes.SIX,
        KEY_7: Phaser.Input.Keyboard.KeyCodes.SEVEN,
        KEY_8: Phaser.Input.Keyboard.KeyCodes.EIGHT,
        KEY_9: Phaser.Input.Keyboard.KeyCodes.NINE,
        KEY_CTRL: Phaser.Input.Keyboard.KeyCodes.CTRL,
        KEY_DEL: Phaser.Input.Keyboard.KeyCodes.DELETE,
        KEY_END: Phaser.Input.Keyboard.KeyCodes.END,
        KEY_ENTER: Phaser.Input.Keyboard.KeyCodes.ENTER,
        KEY_ESC: Phaser.Input.Keyboard.KeyCodes.ESC,
        KEY_F1: Phaser.Input.Keyboard.KeyCodes.F1,
        KEY_F2: Phaser.Input.Keyboard.KeyCodes.F2,
        KEY_F3: Phaser.Input.Keyboard.KeyCodes.F3,
        KEY_F4: Phaser.Input.Keyboard.KeyCodes.F4,
        KEY_F5: Phaser.Input.Keyboard.KeyCodes.F5,
        KEY_F6: Phaser.Input.Keyboard.KeyCodes.F6,
        KEY_F7: Phaser.Input.Keyboard.KeyCodes.F7,
        KEY_F8: Phaser.Input.Keyboard.KeyCodes.F8,
        KEY_F9: Phaser.Input.Keyboard.KeyCodes.F9,
        KEY_F10: Phaser.Input.Keyboard.KeyCodes.F10,
        KEY_F11: Phaser.Input.Keyboard.KeyCodes.F11,
        KEY_F12: Phaser.Input.Keyboard.KeyCodes.F12,
        KEY_HOME: Phaser.Input.Keyboard.KeyCodes.HOME,
        KEY_INSERT: Phaser.Input.Keyboard.KeyCodes.INSERT,
        KEY_PAGE_DOWN: Phaser.Input.Keyboard.KeyCodes.PAGE_DOWN,
        KEY_PAGE_UP: Phaser.Input.Keyboard.KeyCodes.PAGE_UP,
        KEY_PLUS: Phaser.Input.Keyboard.KeyCodes.NUMPAD_ADD, // Assuming numpad plus
        KEY_MINUS: Phaser.Input.Keyboard.KeyCodes.NUMPAD_SUBTRACT, // Assuming numpad minus
        KEY_QUOTATION: Phaser.Input.Keyboard.KeyCodes.QUOTES,
        KEY_SHIFT: Phaser.Input.Keyboard.KeyCodes.SHIFT,
        KEY_SPACE: Phaser.Input.Keyboard.KeyCodes.SPACE,
        KEY_TAB: Phaser.Input.Keyboard.KeyCodes.TAB,
        KEY_TILDE: Phaser.Input.Keyboard.KeyCodes.BACKTICK,
        KEY_ARROW_UP: Phaser.Input.Keyboard.KeyCodes.UP,
        KEY_ARROW_DOWN: Phaser.Input.Keyboard.KeyCodes.DOWN,
        KEY_ARROW_LEFT: Phaser.Input.Keyboard.KeyCodes.LEFT,
        KEY_ARROW_RIGHT: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        KEY_LEFT_BRACKET: Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET,
        KEY_RIGHT_BRACKET: Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET,
        KEY_SEMICOLON: Phaser.Input.Keyboard.KeyCodes.SEMICOLON,
        KEY_BACKSPACE: Phaser.Input.Keyboard.KeyCodes.BACKSPACE,
        KEY_ALT: Phaser.Input.Keyboard.KeyCodes.ALT
    },
    icons: {
        KEY_A: "T_A_Key_Dark.png",
        KEY_B: "T_B_Key_Dark.png",
        KEY_C: "T_C_Key_Dark.png",
        KEY_D: "T_D_Key_Dark.png",
        KEY_E: "T_E_Key_Dark.png",
        KEY_F: "T_F_Key_Dark.png",
        KEY_G: "T_G_Key_Dark.png",
        KEY_H: "T_H_Key_Dark.png",
        KEY_I: "T_I_Key_Dark.png",
        KEY_J: "T_J_Key_Dark.png",
        KEY_K: "T_K_Key_Dark.png",
        KEY_L: "T_L_Key_Dark.png",
        KEY_M: "T_M_Key_Dark.png",
        KEY_N: "T_N_Key_Dark.png",
        KEY_O: "T_O_Key_Dark.png",
        KEY_P: "T_P_Key_Dark.png",
        KEY_Q: "T_Q_Key_Dark.png",
        KEY_R: "T_R_Key_Dark.png",
        KEY_S: "T_S_Key_Dark.png",
        KEY_T: "T_T_Key_Dark.png",
        KEY_U: "T_U_Key_Dark.png",
        KEY_V: "T_V_Key_Dark.png",
        KEY_W: "T_W_Key_Dark.png",
        KEY_X: "T_X_Key_Dark.png",
        KEY_Y: "T_Y_Key_Dark.png",
        KEY_Z: "T_Z_Key_Dark.png",

        KEY_0: "T_0_Key_Dark.png",
        KEY_1: "T_1_Key_Dark.png",
        KEY_2: "T_2_Key_Dark.png",
        KEY_3: "T_3_Key_Dark.png",
        KEY_4: "T_4_Key_Dark.png",
        KEY_5: "T_5_Key_Dark.png",
        KEY_6: "T_6_Key_Dark.png",
        KEY_7: "T_7_Key_Dark.png",
        KEY_8: "T_8_Key_Dark.png",
        KEY_9: "T_9_Key_Dark.png",

        KEY_F1: "T_F1_Key_Dark.png",
        KEY_F2: "T_F2_Key_Dark.png",
        KEY_F3: "T_F3_Key_Dark.png",
        KEY_F4: "T_F4_Key_Dark.png",
        KEY_F5: "T_F5_Key_Dark.png",
        KEY_F6: "T_F6_Key_Dark.png",
        KEY_F7: "T_F7_Key_Dark.png",
        KEY_F8: "T_F8_Key_Dark.png",
        KEY_F9: "T_F9_Key_Dark.png",
        KEY_F10: "T_F10_Key_Dark.png",
        KEY_F11: "T_F11_Key_Dark.png",
        KEY_F12: "T_F12_Key_Dark.png",


        KEY_PAGE_DOWN: "T_PageDown_Key_Dark.png",
        KEY_PAGE_UP: "T_PageUp_Key_Dark.png",

        KEY_CTRL: "T_Crtl_Key_Dark.png",
        KEY_DEL: "T_Del_Key_Dark.png",
        KEY_END: "T_End_Key_Dark.png",
        KEY_ENTER: "T_Enter_Alt_Key_Dark.png",
        KEY_ESC: "T_Esc_Key_Dark.png",
        KEY_HOME: "T_Home_Key_Dark.png",
        KEY_INSERT: "T_Ins_Key_Dark.png",

        KEY_PLUS: "T_Plus_Tall_Key_Dark.png",
        KEY_MINUS: "T_Minus_Key_Dark.png",
        KEY_QUOTATION: "T_Quotation_Key_Dark.png",
        KEY_SHIFT: "T_Shift_Key_Dark.png",

        KEY_SPACE: "T_Space_Key_Dark.png",
        KEY_TAB: "T_Tab_Key_Dark.png",
        KEY_TILDE: "T_Tilde_Key_Dark.png",

        KEY_ARROW_UP: "T_Up_Key_Dark.png",
        KEY_ARROW_DOWN: "T_Down_Key_Dark.png",
        KEY_ARROW_LEFT: "T_Left_Key_Dark.png",
        KEY_ARROW_RIGHT: "T_Right_Key_Dark.png",

        KEY_LEFT_BRACKET: "T_Brackets_L_Key_Dark.png",
        KEY_RIGHT_BRACKET: "T_Brackets_R_Key_Dark.png",

        KEY_SEMICOLON: "T_Semicolon_Key_Dark.png",

        KEY_BACKSPACE: "T_Backspace_Alt_Key_Dark.png",
        KEY_ALT: "T_Alt_Key_Dark.png"
    },
    settings: {
        [SettingKeyboard.Button_Up]: Button.UP,
        [SettingKeyboard.Button_Down]: Button.DOWN,
        [SettingKeyboard.Button_Left]: Button.LEFT,
        [SettingKeyboard.Button_Right]: Button.RIGHT,
        [SettingKeyboard.Button_Submit]: Button.SUBMIT,
        [SettingKeyboard.Button_Action]: Button.ACTION,
        [SettingKeyboard.Button_Cancel]: Button.CANCEL,
        [SettingKeyboard.Button_Menu]: Button.MENU,
        [SettingKeyboard.Button_Stats]: Button.STATS,
        [SettingKeyboard.Button_Cycle_Shiny]: Button.CYCLE_SHINY,
        [SettingKeyboard.Button_Cycle_Form]: Button.CYCLE_FORM,
        [SettingKeyboard.Button_Cycle_Gender]: Button.CYCLE_GENDER,
        [SettingKeyboard.Button_Cycle_Ability]: Button.CYCLE_ABILITY,
        [SettingKeyboard.Button_Cycle_Nature]: Button.CYCLE_NATURE,
        [SettingKeyboard.Button_Cycle_Variant]: Button.CYCLE_VARIANT,
        [SettingKeyboard.Button_Speed_Up]: Button.SPEED_UP,
        [SettingKeyboard.Button_Slow_Down]: Button.SLOW_DOWN,
        [SettingKeyboard.Alt_Button_Up]: Button.UP,
        [SettingKeyboard.Alt_Button_Down]: Button.DOWN,
        [SettingKeyboard.Alt_Button_Left]: Button.LEFT,
        [SettingKeyboard.Alt_Button_Right]: Button.RIGHT,
        [SettingKeyboard.Alt_Button_Submit]: Button.SUBMIT,
        [SettingKeyboard.Alt_Button_Action]: Button.ACTION,
        [SettingKeyboard.Alt_Button_Cancel]: Button.CANCEL,
        [SettingKeyboard.Alt_Button_Menu]: Button.MENU,
        [SettingKeyboard.Alt_Button_Stats]: Button.STATS,
        [SettingKeyboard.Alt_Button_Cycle_Shiny]: Button.CYCLE_SHINY,
        [SettingKeyboard.Alt_Button_Cycle_Form]: Button.CYCLE_FORM,
        [SettingKeyboard.Alt_Button_Cycle_Gender]: Button.CYCLE_GENDER,
        [SettingKeyboard.Alt_Button_Cycle_Ability]: Button.CYCLE_ABILITY,
        [SettingKeyboard.Alt_Button_Cycle_Nature]: Button.CYCLE_NATURE,
        [SettingKeyboard.Alt_Button_Cycle_Variant]: Button.CYCLE_VARIANT,
        [SettingKeyboard.Alt_Button_Speed_Up]: Button.SPEED_UP,
        [SettingKeyboard.Alt_Button_Slow_Down]: Button.SLOW_DOWN,
    },
    default: {
        KEY_ARROW_UP: SettingKeyboard.Button_Up,
        KEY_ARROW_DOWN: SettingKeyboard.Button_Down,
        KEY_ARROW_LEFT: SettingKeyboard.Button_Left,
        KEY_ARROW_RIGHT: SettingKeyboard.Button_Right,
        KEY_ENTER: SettingKeyboard.Button_Submit,
        KEY_SPACE: SettingKeyboard.Button_Action,
        KEY_BACKSPACE: SettingKeyboard.Button_Cancel,
        KEY_ESC: SettingKeyboard.Button_Menu,
        KEY_C: SettingKeyboard.Button_Stats,
        KEY_R: SettingKeyboard.Button_Cycle_Shiny,
        KEY_F: SettingKeyboard.Button_Cycle_Form,
        KEY_G: SettingKeyboard.Button_Cycle_Gender,
        KEY_E: SettingKeyboard.Button_Cycle_Ability,
        KEY_N: SettingKeyboard.Button_Cycle_Nature,
        KEY_V: SettingKeyboard.Button_Cycle_Variant,
        KEY_PLUS: SettingKeyboard.Button_Speed_Up,
        KEY_MINUS: SettingKeyboard.Button_Slow_Down,
        KEY_A: -1,
        KEY_B: -1,
        KEY_D: SettingKeyboard.Alt_Button_Right,
        KEY_H: -1,
        KEY_I: SettingKeyboard.Alt_Button_Cycle_Nature,
        KEY_J: -1,
        KEY_K: SettingKeyboard.Alt_Button_Cycle_Variant,
        KEY_L: SettingKeyboard.Alt_Button_Cycle_Ability,
        KEY_M: SettingKeyboard.Alt_Button_Cycle_Form,
        KEY_O: SettingKeyboard.Alt_Button_Cycle_Gender,
        KEY_P: SettingKeyboard.Alt_Button_Cycle_Shiny,
        KEY_Q: SettingKeyboard.Alt_Button_Left,
        KEY_S: SettingKeyboard.Alt_Button_Down,
        KEY_T: -1,
        KEY_U: -1,
        KEY_W: SettingKeyboard.Alt_Button_Action,
        KEY_X: SettingKeyboard.Alt_Button_Cancel,
        KEY_Y: -1,
        KEY_Z: SettingKeyboard.Alt_Button_Up,
        KEY_0: -1,
        KEY_1: -1,
        KEY_2: -1,
        KEY_3: -1,
        KEY_4: -1,
        KEY_5: -1,
        KEY_6: -1,
        KEY_7: -1,
        KEY_8: -1,
        KEY_9: -1,
        KEY_CTRL: SettingKeyboard.Alt_Button_Submit,
        KEY_DEL: -1,
        KEY_END: -1,
        KEY_F1: -1,
        KEY_F2: -1,
        KEY_F3: -1,
        KEY_F4: -1,
        KEY_F5: -1,
        KEY_F6: -1,
        KEY_F7: -1,
        KEY_F8: -1,
        KEY_F9: -1,
        KEY_F10: -1,
        KEY_F11: -1,
        KEY_F12: -1,
        KEY_HOME: -1,
        KEY_INSERT: -1,
        KEY_PAGE_DOWN: SettingKeyboard.Alt_Button_Slow_Down,
        KEY_PAGE_UP: SettingKeyboard.Alt_Button_Speed_Up,
        KEY_QUOTATION: -1,
        KEY_SHIFT: SettingKeyboard.Alt_Button_Stats,
        KEY_TAB: SettingKeyboard.Alt_Button_Menu,
        KEY_TILDE: -1,
        KEY_LEFT_BRACKET: -1,
        KEY_RIGHT_BRACKET: -1,
        KEY_SEMICOLON: -1,
        KEY_ALT: -1
    },
    main: [],
    alt: [],
};

export default cfg_keyboard_azerty;
