"use client";

import { useState } from "react";
import Button from "./components/Button";
import jsPDF from "jspdf";
import * as Utils from "./Utils";

async function installFont(pdf: jsPDF, fontName: string, fontUrl: string) {
    const response = await fetch("https://raw.githubusercontent.com/muscaa/cv-maker-resources/refs/heads/main/fonts/" + fontUrl);
    const buffer = await response.arrayBuffer();
    const base64font = Utils.base64ArrayBuffer(buffer);

    pdf.addFileToVFS(fontName + ".ttf", base64font);
    pdf.addFont(fontName + ".ttf", fontName, "normal");
}

export default function Home() {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const generatePDF = async () => {
        const pdf = new jsPDF();

        await installFont(pdf, "Lato-Regular", "lato/Lato-Regular.ttf");
        await installFont(pdf, "Satisfy-Regular", "satisfy/Satisfy-Regular.ttf");

        pdf.setFontSize(32);

        pdf.text("Curriculum Vitae", 10, 10);

        pdf.setFont("Satisfy-Regular");
        pdf.text("Curriculum Vitae", 10, 20);

        console.log(pdf.getFontList());

        setPdfUrl(pdf.output("dataurlstring"));
    };

    return (
        <div className="p-5 flex w-screen h-screen">
            <div className="w-full h-full">
                <Button text="Generate Preview" onClick={generatePDF} />
            </div>

            <div className="w-full h-full">
                {pdfUrl && (
                    <iframe src={pdfUrl} className="w-full h-full" />
                )}
            </div>
        </div>
    );
}
