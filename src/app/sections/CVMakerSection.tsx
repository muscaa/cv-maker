import * as CVMaker from "@/impl/CVMaker";
import * as UI from "@/impl/UI";

import { useState } from "react";

export default function CVMakerSection() {
    const [components, setComponents] = useState<React.ReactNode>(UI.renderMain());
    
    CVMaker.main.__setComponents = setComponents;

    return (
        <section>
            {components}
        </section>
    );
}
