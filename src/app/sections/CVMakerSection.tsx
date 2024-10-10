import * as Utils from "../Utils";
import * as Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
/*import Text from "../components/Text";
import InputField from "../components/InputField";
import InputArea from "../components/InputArea";
import Empty from "../components/Empty";
import CheckBoxButton from "../components/CheckBoxButton";
import RadioButton from "../components/RadioButton";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";*/

export default function CVMakerSection() {
    return (
        <section className="flex flex-col gap-2">
            <Layout.Min>
                <Layout.Cols>
                    <Layout.Max alignX="center" alignY="center">
                        <Layout.Min>
                            <Title text="Hello World" />
                        </Layout.Min>
                    </Layout.Max>
                    <Button text="Load Template Zip" onAction={async () => {
                        const file = await Utils.loadFile(".zip");
                        const unzipped = await Utils.readZip(file);
                        const template = await unzipped.file("template.js")?.async("string");
                        const script = await Utils.addScript({ text: template });

                        console.log(script);
                    }} />
                </Layout.Cols>
            </Layout.Min>
        </section>
    );
}
