import * as api from "@/api/CVMaker";

import { useState } from "react";

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

import * as UI from "./UI";

export interface Props<T extends api.UIComponent> {
    component: T;
}

export function renderChildren(children: api.UIComponent[]): React.ReactNode[] {
    return children.map(child => (child.render() as UI.NativeComponentImpl).component);
}

export function LayoutBlock(props: Props<UI.UILayoutBlockImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Layout.Block
        >
            {renderChildren(state.component.children)}
        </Layout.Block>
    );
}

export function LayoutRows(props: Props<UI.UILayoutRowsImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Layout.Rows
            alignX={state.component.alignX || undefined}
            alignY={state.component.alignY || undefined}
        >
            {renderChildren(state.component.children)}
        </Layout.Rows>
    );
}

export function LayoutCols(props: Props<UI.UILayoutColsImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Layout.Cols
            alignX={state.component.alignX || undefined}
            alignY={state.component.alignY || undefined}
        >
            {renderChildren(state.component.children)}
        </Layout.Cols>
    );
}

export function ComponentEmpty(props: Props<UI.UIEmptyImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Empty
        />
    );
}

export function ComponentText(props: Props<UI.UITextImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Text
            text={state.component.text}
        />
    );
}

export function ComponentTitle(props: Props<UI.UITitleImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Title
            text={state.component.text}
        />
    );
}

export function ComponentButton(props: Props<UI.UIButtonImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Button
            text={state.component.text}
            disabled={state.component.disabled}
            onAction={() => state.component.onAction()}
        />
    );
}

export function ComponentCheckbox(props: Props<UI.UICheckboxImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <CheckBoxButton
            checked={state.component.checked}
            onAction={(checked) => state.component.onAction(checked)}
        />
    );
}

export function ComponentRadio(props: Props<UI.UIRadioImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <RadioButton
            group={state.component.group}
            checked={state.component.checked}
            onAction={(checked) => state.component.onAction(checked)}
        />
    );
}

export function ComponentSlider(props: Props<UI.UISliderImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Slider
            min={state.component.min}
            max={state.component.max}
            value={state.component.value}
            step={state.component.step}
            onAction={(value) => state.component.onAction(value)}
        />
    );
}

export function ComponentDropdown(props: Props<UI.UIDropdownImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <Dropdown
            options={state.component.options}
            selected={state.component.selected}
            onAction={(option, index) => state.component.onAction(option, index)}
        />
    );
}

export function ComponentInputField(props: Props<UI.UIInputFieldImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <InputField
            placeholder={state.component.placeholder}
            onAction={(text: string) => state.component.onAction(text)}
        />
    );
}

export function ComponentInputArea(props: Props<UI.UIInputAreaImpl>): React.ReactNode {
    const [state, setState] = useState(props);
    state.component.__setState = setState;

    return (
        <InputArea
            placeholder={state.component.placeholder}
            onAction={(text: string) => state.component.onAction(text)}
        />
    );
}
