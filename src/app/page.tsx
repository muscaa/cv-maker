"use client";

import { useState } from "react";
import Button from "./components/Button";
import jsPDF from "jspdf";

export default function Home() {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const generatePDF = async () => {
        const pdf = new jsPDF();
        pdf.text("Curriculum Vitae", 10, 10);
        pdf.text("Name: John Doe", 10, 20);
        pdf.text("Position: Frontend Developer", 10, 30);

        pdf.setDrawColor(255, 0, 255);
        pdf.setLineWidth(0.5);
        pdf.line(10, 40, 200, 40);

        pdf.textWithLink("Click here", 10, 50, { url: "https://www.google.com" });

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
