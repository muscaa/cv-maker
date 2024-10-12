import * as api from "@/api/CVMaker";

import React from "react";

import * as UIReact from "./UIReact";

export class NativeUIImpl implements api.NativeUI {
    // layout
    block(...children: api.UIComponent[]): api.UILayoutBlock {
        return new UILayoutBlockImpl(children);
    }

    rows(...children: api.UIComponent[]): api.UILayoutRows {
        return new UILayoutRowsImpl(children);
    }

    cols(...children: api.UIComponent[]): api.UILayoutCols {
        return new UILayoutColsImpl(children);
    }

    // components
    empty(): api.UIEmpty {
        return new UIEmptyImpl();
    }

    text(text: string): api.UIText {
        return new UITextImpl(text);
    }

    title(text: string): api.UITitle {
        return new UITitleImpl(text);
    }

    button(text: string, disabled?: boolean, onAction?: () => void): api.UIButton {
        return new UIButtonImpl(text, disabled, onAction);
    }

    checkbox(checked?: boolean, onAction?: (checked: boolean) => void): api.UICheckbox {
        return new UICheckboxImpl(checked, onAction);
    }

    radio(group: string, checked?: boolean, onAction?: (checked: boolean) => void): api.UIRadio {
        return new UIRadioImpl(group, checked, onAction);
    }

    slider(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void): api.UISlider {
        return new UISliderImpl(min, max, value, step, onAction);
    }

    dropdown(options: string[], selected?: number, onAction?: (option: string, index: number) => void): api.UIDropdown {
        return new UIDropdownImpl(options, selected, onAction);
    }

    inputField(placeholder?: string, onAction?: (text: string) => void): api.UIInputField {
        return new UIInputFieldImpl(placeholder, onAction);
    }

    inputArea(placeholder?: string, onAction?: (text: string) => void): api.UIInputArea {
        return new UIInputAreaImpl(placeholder, onAction);
    }
}

export class NativeComponentImpl implements api.NativeComponent {
    component: React.ReactNode;

    constructor(component: React.ReactNode) {
        this.component = component;
    }
}

export abstract class UIComponentImpl implements api.UIComponent {
    __setState?: (state: UIReact.Props<this>) => void;

    fill: boolean = false;

    abstract render(): api.NativeComponent;

    update(): this {
        this.__setState?.({
            component: this,
        });
        return this;
    }

    setFill(fill: boolean): this {
        this.fill = fill;
        return this;
    }
}

export abstract class UILayoutImpl extends UIComponentImpl implements api.UILayout {
    children: api.UIComponent[];

    constructor(children: api.UIComponent[]) {
        super();
        this.children = children;
    }

    abstract render(): api.NativeComponent;

    setChildren(children: api.UIComponent[]): this {
        this.children = children;
        return this;
    }
}

export class UILayoutBlockImpl extends UILayoutImpl implements api.UILayoutBlock {
    constructor(children: api.UIComponent[]) {
        super(children);
    }
    
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.LayoutBlock, {
            component: this,
        }));
    }
}

export abstract class UILayoutFlexImpl extends UILayoutImpl implements api.UILayoutFlex {
    alignX: "left" | "center" | "right" | "between" | "around" | "evenly" | null = null;
    alignY: "top" | "center" | "bottom" | null = null;

    abstract render(): api.NativeComponent;

    setAlignX(alignX: "left" | "center" | "right" | "between" | "around" | "evenly" | null): this {
        this.alignX = alignX;
        return this;
    }

    setAlignY(alignY: "top" | "center" | "bottom" | null): this {
        this.alignY = alignY;
        return this;
    }
}

export class UILayoutRowsImpl extends UILayoutFlexImpl implements api.UILayoutRows {
    constructor(children: api.UIComponent[]) {
        super(children);
    }
    
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.LayoutRows, {
            component: this,
        }));
    }
}

export class UILayoutColsImpl extends UILayoutFlexImpl implements api.UILayoutCols {
    constructor(children: api.UIComponent[]) {
        super(children);
    }
    
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.LayoutCols, {
            component: this,
        }));
    }
}

export class UIEmptyImpl extends UIComponentImpl implements api.UIEmpty {
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentEmpty, {
            component: this,
        }));
    }
}

export class UITextImpl extends UIComponentImpl implements api.UIText {
    text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentText, {
            component: this,
        }));
    }

    setText(text: string): this {
        this.text = text;
        return this;
    }
}

export class UITitleImpl extends UIComponentImpl implements api.UITitle {
    text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentTitle, {
            component: this,
        }));
    }

    setText(text: string): this {
        this.text = text;
        return this;
    }
}

export class UIButtonImpl extends UIComponentImpl implements api.UIButton {
    text: string;
    disabled: boolean;
    onAction: () => void;

    constructor(text: string, disabled?: boolean, onAction?: () => void) {
        super();
        this.text = text;
        this.disabled = disabled ?? false;
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentButton, {
            component: this,
        }));
    }

    setText(text: string): this {
        this.text = text;
        return this;
    }

    setDisabled(disabled: boolean): this {
        this.disabled = disabled;
        return this;
    }

    setOnAction(onAction: () => void): this {
        this.onAction = onAction;
        return this;
    }
}

export class UICheckboxImpl extends UIComponentImpl implements api.UICheckbox {
    checked: boolean;
    onAction: (checked: boolean) => void;

    constructor(checked?: boolean, onAction?: (checked: boolean) => void) {
        super();
        this.checked = checked ?? false;
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentCheckbox, {
            component: this,
        }));
    }

    setChecked(checked: boolean): this {
        this.checked = checked;
        return this;
    }

    setOnAction(onAction: (checked: boolean) => void): this {
        this.onAction = onAction;
        return this;
    }
}

export class UIRadioImpl extends UIComponentImpl implements api.UIRadio {
    group: string;
    checked: boolean;
    onAction: (checked: boolean) => void;

    constructor(group: string, checked?: boolean, onAction?: (checked: boolean) => void) {
        super();
        this.group = group;
        this.checked = checked ?? false;
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentRadio, {
            component: this,
        }));
    }

    setGroup(group: string): this {
        this.group = group;
        return this;
    }

    setChecked(checked: boolean): this {
        this.checked = checked;
        return this;
    }

    setOnAction(onAction: (checked: boolean) => void): this {
        this.onAction = onAction;
        return this;
    }
}

export class UISliderImpl extends UIComponentImpl implements api.UISlider {
    min: number;
    max: number;
    value: number;
    step: number;
    onAction: (value: number) => void;

    constructor(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void) {
        super();
        this.min = min;
        this.max = max;
        this.value = value ?? min;
        this.step = step ?? 1;
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentSlider, {
            component: this,
        }));
    }

    setMin(min: number): this {
        this.min = min;
        return this;
    }

    setMax(max: number): this {
        this.max = max;
        return this;
    }

    setValue(value: number): this {
        this.value = value;
        return this;
    }

    setStep(step: number): this {
        this.step = step;
        return this;
    }

    setOnAction(onAction: (value: number) => void): this {
        this.onAction = onAction;
        return this;
    }
}

export class UIDropdownImpl extends UIComponentImpl implements api.UIDropdown {
    options: string[];
    selected: number;
    onAction: (option: string, index: number) => void;

    constructor(options: string[], selected?: number, onAction?: (option: string, index: number) => void) {
        super();
        this.options = options;
        this.selected = selected ?? -1;
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentDropdown, {
            component: this,
        }));
    }

    setOptions(options: string[]): this {
        this.options = options;
        return this;
    }

    setSelected(selected: number): this {
        this.selected = selected;
        return this;
    }

    setOnAction(onAction: (option: string, index: number) => void): this {
        this.onAction = onAction;
        return this;
    }
}

export class UIInputFieldImpl extends UIComponentImpl implements api.UIInputField {
    placeholder: string;
    onAction: (text: string) => void;

    constructor(placeholder?: string, onAction?: (text: string) => void) {
        super();
        this.placeholder = placeholder ?? "";
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentInputField, {
            component: this,
        }));
    }

    setPlaceholder(placeholder: string): this {
        this.placeholder = placeholder;
        return this;
    }

    setOnAction(onAction: (text: string) => void): this {
        this.onAction = onAction;
        return this;
    }
}

export class UIInputAreaImpl extends UIComponentImpl implements api.UIInputArea {
    placeholder: string;
    onAction: (text: string) => void;

    constructor(placeholder?: string, onAction?: (text: string) => void) {
        super();
        this.placeholder = placeholder ?? "";
        this.onAction = onAction ?? (() => {});
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(UIReact.ComponentInputArea, {
            component: this,
        }));
    }

    setPlaceholder(placeholder: string): this {
        this.placeholder = placeholder;
        return this;
    }

    setOnAction(onAction: (text: string) => void): this {
        this.onAction = onAction;
        return this;
    }
}
