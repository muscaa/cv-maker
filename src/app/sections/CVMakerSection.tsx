import impl from "@/api/CVMakerImpl";

export default function CVMakerSection() {
    const components: React.ReactNode[] = [];

    impl.ui.__components = components;
    impl.main.renderCallback?.(impl.ui);

    return (
        <section>
            {components}
        </section>
    );
}

/*
                    <Button text="Load Template Zip" onAction={async () => {
                        const file = await Utils.loadFile(".zip");
                        const unzipped = await Utils.readZip(file);
                        const template = await unzipped.file("template.js")?.async("string");
                        const script = await Utils.addScript({ text: template });

                        console.log(script);
                    }} />
*/
