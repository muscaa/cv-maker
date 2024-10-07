import { CVMaker } from "./CVMaker";
import * as Utils from "@/app/Utils";

export class CVMakerImpl implements CVMaker {
    private _setPDFUrl: (url: string) => void;

    constructor(_setPDFUrl: (url: string) => void) {
        this._setPDFUrl = _setPDFUrl;
    }

    setPDFUrl(url: string): void {
        this._setPDFUrl(url);
    }

    addScript(options: { src?: string, text?: string }): Promise<HTMLScriptElement> {
        return Utils.addScript(options);
    }
}
