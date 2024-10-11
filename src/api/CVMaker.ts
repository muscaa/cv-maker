// main
export interface CVMaker {

    setPDFUrl(url: string | null): void;

    addScript(options: { src?: string, text?: string }): Promise<HTMLScriptElement>;

    setRenderCallback(callback: (ui: UI) => void): void;
}

// ui
export interface UI {

    // layout
    block(callback: (ui: UI) => void, props?: UILayout): void;

    rows(callback: (ui: UI) => void, props?: UILayout): void;

    cols(callback: (ui: UI) => void, props?: UILayout): void;

    // components
    empty(): void;

    text(text: string): void;

    title(text: string): void;

    button(text: string, onAction?: () => void, disabled?: boolean): void;

    checkbox(checked?: boolean, onAction?: (checked: boolean) => void): void;

    radio(group: string, checked?: boolean, onAction?: (checked: boolean) => void): void;

    slider(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void): void;

    dropdown(options: string[], selected?: number, onAction?: (option: string, index: number) => void): void;

    inputField(placeholder?: string, onAction?: (text: string) => void): void;

    inputArea(placeholder?: string, onAction?: (text: string) => void): void;
}

export interface UILayout {
    alignX?: "left" | "center" | "right";
    alignY?: "top" | "center" | "bottom";
}

// window
export interface WindowCVMaker {
    cvmaker: CVMaker;
}

//export const cvmaker = window.cvmaker;
