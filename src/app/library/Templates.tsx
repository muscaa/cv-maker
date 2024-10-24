import * as Config from "@/Config";

import Divider from "@/components/Divider";
import PanelDropdown from "@/components/PanelDropdown";
import Button from "@/components/Button";
import TemplateCard from "@/components/TemplateCard";
import LoadingFallback from "@/components/LoadingFallback";

import { useRouter } from "next/navigation";
import { useStorage } from "@/Hooks";

export default function Templates() {
    const router = useRouter();

    const [templates] = useStorage(Config.getTemplates);

    return (
        <>
            <div className="flex justify-between items-center">
                <h3>Templates</h3>
                <Button text="Import" onAction={() => router.push("/import-templates")} />
            </div>
            <Divider />
            <PanelDropdown title="Browser Storage">
                <div className="flex flex-col size-full gap-2 p-2">
                    <LoadingFallback
                        values={templates}
                        onSuccess={(template, index) => (
                            <TemplateCard
                                key={index}
                                info={template.info}
                            />
                        )}
                    />
                </div>
            </PanelDropdown>
        </>
    );
}
