// main
export interface CVMaker {

    setPDFUrl(url: string | null): void;

    addScript(options: { src?: string, text?: string }): Promise<HTMLScriptElement>;

    setUI(ui: UI): void;

    updateUI(): void;
}

// ui
export interface NativeUI {
    // layout
    block(...children: UIComponent[]): UILayoutBlock;

    rows(...children: UIComponent[]): UILayoutRows;

    cols(...children: UIComponent[]): UILayoutCols;

    // components
    empty(): UIEmpty;

    text(text: string): UIText;

    title(text: string): UITitle;

    button(text: string, disabled?: boolean, onAction?: () => void): UIButton;

    checkbox(checked?: boolean, onAction?: (checked: boolean) => void): UICheckbox;

    radio(group: string, checked?: boolean, onAction?: (checked: boolean) => void): UIRadio;

    slider(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void): UISlider;

    dropdown(options: string[], selected?: number, onAction?: (option: string, index: number) => void): UIDropdown;

    inputField(placeholder?: string, onAction?: (text: string) => void): UIInputField;

    inputArea(placeholder?: string, onAction?: (text: string) => void): UIInputArea;
}

export abstract class UI implements NativeUI {
    ui?: NativeUI;

    abstract render(): UIComponent[];

    // layout
    block(...children: UIComponent[]): UILayoutBlock {
        return this.ui!.block(...children);
    }

    rows(...children: UIComponent[]): UILayoutRows {
        return this.ui!.rows(...children);
    }

    cols(...children: UIComponent[]): UILayoutCols {
        return this.ui!.cols(...children);
    }

    // components
    empty(): UIEmpty {
        return this.ui!.empty();
    }

    text(text: string): UIText {
        return this.ui!.text(text);
    }

    title(text: string): UITitle {
        return this.ui!.title(text);
    }

    button(text: string, disabled?: boolean, onAction?: () => void): UIButton {
        return this.ui!.button(text, disabled, onAction);
    }

    checkbox(checked?: boolean, onAction?: (checked: boolean) => void): UICheckbox {
        return this.ui!.checkbox(checked, onAction);
    }

    radio(group: string, checked?: boolean, onAction?: (checked: boolean) => void): UIRadio {
        return this.ui!.radio(group, checked, onAction);
    }

    slider(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void): UISlider {
        return this.ui!.slider(min, max, value, step, onAction);
    }

    dropdown(options: string[], selected?: number, onAction?: (option: string, index: number) => void): UIDropdown {
        return this.ui!.dropdown(options, selected, onAction);
    }

    inputField(placeholder?: string, onAction?: (text: string) => void): UIInputField {
        return this.ui!.inputField(placeholder, onAction);
    }

    inputArea(placeholder?: string, onAction?: (text: string) => void): UIInputArea {
        return this.ui!.inputArea(placeholder, onAction);
    }
}

export interface NativeComponent {
    
}

export interface UIComponent {
    fill?: boolean;

    render(): NativeComponent;
}

export interface UILayout extends UIComponent {
    children: UIComponent[];
}

export interface UILayoutBlock extends UILayout {

}

export interface UILayoutFlex extends UILayout {
    alignX?: "left" | "center" | "right";
    alignY?: "top" | "center" | "bottom";
}

export interface UILayoutRows extends UILayoutFlex {

}

export interface UILayoutCols extends UILayoutFlex {

}

export interface UIEmpty extends UIComponent {

}

export interface UIText extends UIComponent {
    text: string;
}

export interface UITitle extends UIComponent {
    text: string;
}

export interface UIButton extends UIComponent {
    text: string;
    disabled?: boolean;
    onAction?: () => void;
}

export interface UICheckbox extends UIComponent {
    checked?: boolean;
    onAction?: (checked: boolean) => void;
}

export interface UIRadio extends UIComponent {
    group: string;
    checked?: boolean;
    onAction?: (checked: boolean) => void;
}

export interface UISlider extends UIComponent {
    min: number;
    max: number;
    value?: number;
    step?: number;
    onAction?: (value: number) => void;
}

export interface UIDropdown extends UIComponent {
    options: string[];
    selected?: number;
    onAction?: (option: string, index: number) => void;
}

export interface UIInputField extends UIComponent {
    placeholder?: string;
    onAction?: (text: string) => void;
}

export interface UIInputArea extends UIComponent {
    placeholder?: string;
    onAction?: (text: string) => void;
}

// window
export interface WindowCVMaker {
    cvmaker: CVMaker;
}

//export const cvmaker = window.cvmaker;
