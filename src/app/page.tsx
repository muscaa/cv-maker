"use client";

//import * as CVMaker from "@/impl/CVMaker";

//import { useState, useEffect } from "react";

//import CVMakerSection from "./sections/CVMakerSection";
//import Button from "./components/Button";
import Main from "./components/Main";
//import * as Utils from "./Utils";

import { useRouter/*, useSearchParams*/ } from "next/navigation";
//import { useCallback, Suspense } from "react";

import IconSquareButton from "./components/IconSquareButton";
import * as SVG from "./SVG";

/*function Fallback() {
    return <p>Loading...</p>;
}

function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    );

    return (
        <Button text="Search" onAction={() => {
            router.push("/search?" + createQueryString("test", "1234"));
        }} />
    );
}*/

export default function Home() {
    /*const [pdfUrl, setPDFUrl] = useState<string | null>(null);
    CVMaker.main.__setPDFUrl = setPDFUrl;

    useEffect(() => {
        window.cvmaker = CVMaker.main;
    }, []);*/

    const router = useRouter();

    return (
        <Main>
            <h1><span className="text-secondary font-bold">CV</span> Maker</h1>
            <div className="flex-grow"></div>
            <div className="flex flex-col gap-4 lg:gap-8">
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                    <IconSquareButton text="New Project" icon={SVG.Add} onAction={() => router.push("/new-project")} />
                    <IconSquareButton text="Library" icon={SVG.Folder} onAction={() => router.push("/library")} />
                    <IconSquareButton text="Load" icon={SVG.UploadFile} onAction={() => {
                    }} />
                </div>
                <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                    <IconSquareButton text="Settings" icon={SVG.Settings} onAction={() => router.push("/settings")} />
                    <IconSquareButton text="Help" icon={SVG.QuestionMark} onAction={() => router.push("/help")} />
                </div>
            </div>
            <div className="flex-grow"></div>
        </Main>
    );

    /*return (
        <div className="p-10 grid grid-cols-2 gap-10 w-screen h-screen">
            <div>
                <Button text="Load Template Zip" onAction={async () => {
                    const file = await Utils.loadFile(".zip");
                    const unzipped = await Utils.readZip(file);
                    const template = await unzipped.file("template.js")?.async("string");
                    const script = await Utils.addScript({ text: template });

                    console.log(script);
                }} />
                <Suspense fallback={
                    <Fallback />
                }>
                    <Search />
                </Suspense>
                <div className="flex flex-col gap-2">
                    <IconSquareButton text="Search Templates" icon={SVG.Search} onAction={() => {
                        console.log("Search");
                    }} />
                </div>
                <div className="grid max-h-full overflow-auto">
                    <CVMakerSection />
                </div>
            </div>

            <div className="grid">
                {pdfUrl && (
                    <iframe src={pdfUrl} className="w-full h-full" />
                ) || (
                    <div className="bg-black"></div>
                )}
            </div>
        </div>
    );*/
}
