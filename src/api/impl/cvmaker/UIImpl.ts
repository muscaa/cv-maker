import * as api from "@/api/CVMaker";
import impl from "@/api/CVMakerImpl";

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

export default class UIImpl implements api.UI {

    public __components?: React.ReactNode[];

    // layout
    block(callback: (ui: api.UI) => void, props?: api.UILayout): void {
        const ui = impl.createUI(callback);

        this.__components?.push(React.createElement(Layout.Block, {
            alignX: props?.alignX,
            alignY: props?.alignY,
        }, ui.__components));
    }

    rows(callback: (ui: api.UI) => void, props?: api.UILayout): void {
        const ui = impl.createUI(callback);

        this.__components?.push(React.createElement(Layout.Rows, {
            alignX: props?.alignX,
            alignY: props?.alignY,
        }, ui.__components));
    }

    cols(callback: (ui: api.UI) => void, props?: api.UILayout): void {
        const ui = impl.createUI(callback);

        this.__components?.push(React.createElement(Layout.Cols, {
            alignX: props?.alignX,
            alignY: props?.alignY,
        }, ui.__components));
    }

    // components
    empty(): void {
        this.__components?.push(React.createElement(Empty, {}));
    }

    text(text: string): void {
        this.__components?.push(React.createElement(Text, {
            text: text,
        }));
    }

    title(text: string): void {
        this.__components?.push(React.createElement(Title, {
            text: text,
        }));
    }

    button(text: string, onAction?: () => void, disabled?: boolean): void {
        this.__components?.push(React.createElement(Button, {
            text: text,
            onAction: onAction,
            disabled: disabled,
        }));
    }

    checkbox(checked?: boolean, onAction?: (checked: boolean) => void): void {
        this.__components?.push(React.createElement(CheckBoxButton, {
            checked: checked,
            onAction: onAction,
        }));
    }

    radio(group: string, checked?: boolean, onAction?: (checked: boolean) => void): void {
        this.__components?.push(React.createElement(RadioButton, {
            group: group,
            checked: checked,
            onAction: onAction,
        }));
    }

    slider(min: number, max: number, value?: number, step?: number, onAction?: (value: number) => void): void {
        this.__components?.push(React.createElement(Slider, {
            min: min,
            max: max,
            value: value ?? min,
            step: step,
            onAction: onAction,
        }));
    }

    dropdown(options: string[], selected?: number, onAction?: (option: string, index: number) => void): void {
        this.__components?.push(React.createElement(Dropdown, {
            options: options,
            selected: selected ?? -1,
            onAction: onAction,
        }));
    }

    inputField(placeholder?: string, onAction?: (text: string) => void): void {
        this.__components?.push(React.createElement(InputField, {
            placeholder: placeholder,
            onAction: onAction,
        }));
    }

    inputArea(placeholder?: string, onAction?: (text: string) => void): void {
        this.__components?.push(React.createElement(InputArea, {
            placeholder: placeholder,
            onAction: onAction,
        }));
    }
}
