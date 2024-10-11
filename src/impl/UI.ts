import * as api from "@/api/CVMaker";

import React from "react";

import * as Layout from "@/app/components/Layout";
import Empty from "@/app/components/Empty";
import Text from "@/app/components/Text";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import CheckBoxButton from "@/app/components/CheckBoxButton";
import RadioButton from "@/app/components/RadioButton";
import Slider from "@/app/components/Slider";
import Dropdown from "@/app/components/Dropdown";
import InputField from "@/app/components/InputField";
import InputArea from "@/app/components/InputArea";

import * as CVMaker from "./CVMaker";

export function renderMain(): React.ReactNode[] {
    return CVMaker.main.ui ? renderChildren(CVMaker.main.ui.render()) : [];
}

export function renderChildren(children: api.UIComponent[]): React.ReactNode[] {
    return children.map(child => (child.render() as NativeComponentImpl).component);
}

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

export class UILayoutBlockImpl implements api.UILayoutBlock {
    children: api.UIComponent[];

    fill?: boolean;

    constructor(children: api.UIComponent[]) {
        this.children = children;
    }
    
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Layout.Block, {}, renderChildren(this.children)));
    }
}

export class UILayoutRowsImpl implements api.UILayoutBlock {
    children: api.UIComponent[];

    fill?: boolean;
    alignX?: "left" | "center" | "right";
    alignY?: "center" | "top" | "bottom";

    constructor(children: api.UIComponent[]) {
        this.children = children;
    }
    
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Layout.Rows, {
            alignX: this.alignX,
            alignY: this.alignY,
        }, renderChildren(this.children)));
    }
}

export class UILayoutColsImpl implements api.UILayoutBlock {
    children: api.UIComponent[];

    fill?: boolean;
    alignX?: "left" | "center" | "right";
    alignY?: "center" | "top" | "bottom";

    constructor(children: api.UIComponent[]) {
        this.children = children;
    }
    
    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Layout.Cols, {
            alignX: this.alignX,
            alignY: this.alignY,
        }, renderChildren(this.children)));
    }
}

export class UIEmptyImpl implements api.UIEmpty {
    fill?: boolean;

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Empty, {}));
    }
}

export class UITextImpl implements api.UIText {
    text: string;

    fill?: boolean;

    constructor(text: string) {
        this.text = text;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Text, {
            text: this.text,
        }));
    }
}

export class UITitleImpl implements api.UITitle {
    text: string;

    fill?: boolean;

    constructor(text: string) {
        this.text = text;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Title, {
            text: this.text,
        }));
    }
}

export class UIButtonImpl implements api.UIButton {
    text: string;
    
    fill?: boolean;
    disabled?: boolean;
    onAction?: () => void;

    constructor(text: string, disabled?: boolean, onAction?: () => void) {
        this.text = text;
        this.disabled = disabled;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Button, {
            text: this.text,
            disabled: this.disabled,
            onAction: this.onAction,
        }));
    }
}

export class UICheckboxImpl implements api.UICheckbox {
    fill?: boolean;
    checked?: boolean;
    onAction?: (checked: boolean) => void;

    constructor(checked?: boolean, onAction?: (checked: boolean) => void) {
        this.checked = checked;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(CheckBoxButton, {
            checked: this.checked,
            onAction: this.onAction,
        }));
    }
}

export class UIRadioImpl implements api.UIRadio {
    group: string;

    fill?: boolean;
    checked?: boolean;
    onAction?: (checked: boolean) => void;

    constructor(group: string, checked?: boolean, onAction?: (checked: boolean) => void) {
        this.group = group;
        this.checked = checked;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(RadioButton, {
            group: this.group,
            checked: this.checked,
            onAction: this.onAction,
        }));
    }
}

export class UISliderImpl implements api.UISlider {
    min: number;
    max: number;

    fill?: boolean;
    value?: number;
    step?: number;
    onAction?: (value: number) => void;

    constructor(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void) {
        this.min = min;
        this.max = max;
        this.value = value;
        this.step = step;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Slider, {
            min: this.min,
            max: this.max,
            value: this.value ?? this.min,
            step: this.step,
            onAction: this.onAction,
        }));
    }
}

export class UIDropdownImpl implements api.UIDropdown {
    options: string[];

    fill?: boolean;
    selected?: number;
    onAction?: (option: string, index: number) => void;

    constructor(options: string[], selected?: number, onAction?: (option: string, index: number) => void) {
        this.options = options;
        this.selected = selected;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(Dropdown, {
            options: this.options,
            selected: this.selected ?? -1,
            onAction: this.onAction,
        }));
    }
}

export class UIInputFieldImpl implements api.UIInputField {
    fill?: boolean;
    placeholder?: string;
    onAction?: (text: string) => void;

    constructor(placeholder?: string, onAction?: (text: string) => void) {
        this.placeholder = placeholder;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(InputField, {
            placeholder: this.placeholder,
            onAction: this.onAction,
        }));
    }
}

export class UIInputAreaImpl implements api.UIInputArea {
    fill?: boolean;
    placeholder?: string;
    onAction?: (text: string) => void;

    constructor(placeholder?: string, onAction?: (text: string) => void) {
        this.placeholder = placeholder;
        this.onAction = onAction;
    }

    render(): api.NativeComponent {
        return new NativeComponentImpl(React.createElement(InputArea, {
            placeholder: this.placeholder,
            onAction: this.onAction,
        }));
    }
}
