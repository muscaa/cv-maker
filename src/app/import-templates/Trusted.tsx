import InputField from "../components/InputField";
import TemplateCard from "../components/TemplateCard";

import { useState, useEffect } from "react";

export default function Featured() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<number>(0);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setResults(search.length);
        }, 1000)

        return () => clearTimeout(debounce)
    }, [search])

    return (
        <div className="flex flex-col gap-2 overflow-hidden">
            <InputField placeholder="Search..." onAction={(text) => setSearch(text)} />
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
                    />
                ))}
            </div>
        </div>
    );
}
