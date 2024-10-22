import InputField from "@/components/InputField";
import TemplateCard from "@/components/TemplateCard";

import { useState } from "react";
import { useDebounce } from "@/Hooks";

export default function GitHub() {
    const [results, setResults] = useState(0);
    const [setSearch] = useDebounce("", (value) => {
        setResults(value.length);
    });

    return (
        <div className="flex flex-col gap-2 overflow-hidden">
            <InputField placeholder="user@repository..." onAction={(text) => setSearch(text)} />
            <div className="flex flex-col gap-2 p-2 max-h-full overflow-auto">
                {Array.from({ length: results }).map((_, index) => (
                    <TemplateCard
                        key={index}
                        name="Template Name"
                        author="Author Name"
                        version="1.0.0"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus. Nullam nec purus. Nullam nec purus. Nullam nec purus. 
                        Nullam nec purus. Curabitur nec sem vel sapien venenatis maximus. Nullam nec purus. Nullam nec purus. Nullam nec purus. Nullam nec purus."
                        tags={["ATS Friendly", "Colorful", "Something", "Test"]}
                        url="https://www.google.com"
                    />
                ))}
            </div>
        </div>
    );
}
