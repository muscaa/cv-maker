import * as Utils from "../Utils";
import Button from "../components/Button";

export default function CVMakerSection() {
    const buttons = [ "Test 1", "Test 2", "Test 3" ];
    return (
        <section className="flex flex-col gap-2">
            <Button text="Load Template Zip" onClick={async () => {
                const file = await Utils.loadFile(".zip");
                const unzipped = await Utils.readZip(file);
                const template = await unzipped.file("template.js")?.async("string");
                const script = await Utils.addScript({ text: template });

                console.log(script);
            }} />
            {buttons.map((text, index) => (
                <Button key={index} text={text} />
            ))}
        </section>
    );
}
