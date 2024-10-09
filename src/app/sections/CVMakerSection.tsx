import * as Utils from "../Utils";
import * as Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
import Text from "../components/Text";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import Empty from "../components/Empty";
import CheckBoxButton from "../components/CheckBoxButton";
import RadioButton from "../components/RadioButton";

export default function CVMakerSection() {
    return (
        <section className="flex flex-col gap-2">
            <Button text="Load Template Zip" onClick={async () => {
                const file = await Utils.loadFile(".zip");
                const unzipped = await Utils.readZip(file);
                const template = await unzipped.file("template.js")?.async("string");
                const script = await Utils.addScript({ text: template });

                console.log(script);
            }} />
            <Title text="CV Maker" />
            <Layout.Rows>
                <Text text="hello world" />
                <Empty />
                <TextField placeholder="hello world" />
                <Button text="yes"/>
            </Layout.Rows>
            <TextArea placeholder="text area" />
            <Layout.Rows>
                <Text text="check box" />
                <Empty />
                <CheckBoxButton />
                <Empty />
            </Layout.Rows>
            <Layout.Cols>
                <Layout.Rows>
                    <RadioButton name="hello" />
                    <Text text="radio button 1" />
                </Layout.Rows>
                <Layout.Rows>
                    <RadioButton name="hello" />
                    <Text text="radio button 2" />
                </Layout.Rows>
            </Layout.Cols>
        </section>
    );
}