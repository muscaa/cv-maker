import * as Utils from "../Utils";
import Button from "../components/Button";

function button(name: string): React.ReactElement {
    return (
        <Button text={name} />
    );
}

export default function CVMakerSection() {
    const components = [
        button("hello"),
        button("world"),
    ];

    return (
        <section className="flex flex-col gap-2">
            <Button text="Load Template Zip" onClick={async () => {
                const file = await Utils.loadFile(".zip");
                const unzipped = await Utils.readZip(file);
                const template = await unzipped.file("template.js")?.async("string");
                const script = await Utils.addScript({ text: template });

                console.log(script);
            }} />
            {components.map((component, index) => (
                <div key={index}>{component}</div>
            ))}
        </section>
    );
}
