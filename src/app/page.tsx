"use client";

import { useState, useEffect } from "react";
import { cvmaker, cvmakeroptions } from "@/api/CVMakerImpl";
import CVMakerSection from "./sections/CVMakerSection";

export default function Home() {
    const [pdfUrl, setPDFUrl] = useState<string | null>(null);
    
    useEffect(() => {
        window.cvmaker = cvmaker;
    }, []);

    cvmakeroptions.setPDFUrl = setPDFUrl;

    return (
        <div className="p-10 grid grid-cols-2 gap-10 w-screen h-screen">
            <div className="grid bg-black">
                <CVMakerSection />
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
