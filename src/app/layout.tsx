import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./styles/main.css";

const font = Montserrat({ subsets: [ "latin" ] });

export const metadata: Metadata = {
    title: "CV Maker",
    description: "Built by muscaa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${font.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
