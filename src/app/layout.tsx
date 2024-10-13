import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Background from "./components/Background";

import "./styles/main.css";

const font = Montserrat({ subsets: [ "latin" ] });

export const metadata: Metadata = {
    title: "Free CV Maker",
    description: "Built by muscaa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${font.className} antialiased`}>
                <Background />
                {children}
            </body>
        </html>
    );
}
