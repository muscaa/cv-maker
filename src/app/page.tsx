"use client";

import * as CVMaker from "@/impl/CVMaker";

import { useState, useEffect } from "react";

import CVMakerSection from "./sections/CVMakerSection";
import Button from "./components/Button";
import * as Utils from "./Utils";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, Suspense } from "react";

function Fallback() {
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
}

export default function Home() {
    const [pdfUrl, setPDFUrl] = useState<string | null>(null);
    CVMaker.main.__setPDFUrl = setPDFUrl;
    
    useEffect(() => {
        window.cvmaker = CVMaker.main;
    }, []);

    return (
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
    );
}
