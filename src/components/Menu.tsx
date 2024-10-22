import * as SVG from "@/SVG";

import { useRouter } from "next/navigation";

import IconButton from "./IconButton";
import Divider from "./Divider";

export interface MenuProps {
    title?: string;
    titleBar?: React.ReactNode;
    children?: React.ReactNode;
}

export default function Menu(props: MenuProps) {
    const router = useRouter();

    return (
        <div
            className="
                flex flex-col size-full
                bg-background-2 bg-opacity-25
                shadow-md shadow-shadow
                p-5 rounded-xl gap-2
            "
        >
            <div className="flex">
                <div className="flex w-full items-center gap-2">
                    <IconButton icon={SVG.ArrowBack} className="w-10 h-10 text-text-2" onAction={() => router.back()} />
                    <IconButton icon={SVG.Home} className="w-10 h-10 text-text-2" onAction={() => router.push("/")} />
                    <Divider className="h-full" />
                    <h3><span className="text-secondary font-bold">CV</span> Maker / {props.title}</h3>
                    {props.titleBar}
                </div>
            </div>
            <Divider />
            <div className="flex flex-col max-h-full h-full overflow-auto gap-2 p-2">
                {props.children}
            </div>
        </div>
    );
}
