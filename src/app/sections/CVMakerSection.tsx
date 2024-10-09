import * as Utils from "../Utils";
import * as Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
import Text from "../components/Text";
import InputField from "../components/InputField";
import InputArea from "../components/InputArea";
import Empty from "../components/Empty";
import CheckBoxButton from "../components/CheckBoxButton";
import RadioButton from "../components/RadioButton";
import Slider from "../components/Slider";

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
            <Title text="Hello World" />
            <Layout.Rows>
                <Text text="hello world" />
                <Empty />
                <InputField placeholder="hello world" />
                <Button text="yes"/>
            </Layout.Rows>
            <InputArea placeholder="text area" />
            <Layout.Rows>
                <Text text="check box & slider" />
                <CheckBoxButton />
                <Slider min={0} max={10} value={9} step={1} />
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
            <Slider min={5} max={999999} value={5} />
        </section>
    );
}
