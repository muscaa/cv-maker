import * as CVMaker from "@/impl/CVMaker";

import { useState } from "react";

export default function CVMakerSection() {
    const [components, setComponents] = useState<React.ReactNode>([]);
    CVMaker.main.__setComponents = setComponents;

    return (
        <section>
            {components}
        </section>
    );
}
