import impl from "@/api/CVMakerImpl";
import * as UIImpl from "@/api/impl/cvmaker/UIImpl";

import { useState } from "react";

export default function CVMakerSection() {
    if (!impl.main.ui) return <></>;

    const [components, setComponents] = useState<React.ReactNode>(UIImpl.renderChildren(impl.main.ui.render()));
    
    impl.main.__setComponents = setComponents;

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
