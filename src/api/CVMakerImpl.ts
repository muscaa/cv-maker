import { CVMaker } from "./CVMaker";
import * as Utils from "@/app/Utils";

class CVMakerImpl implements CVMaker {
    setPDFUrl(url: string | null): void {
        cvmakeroptions.setPDFUrl?.(url);
    }

    addScript(options: { src?: string, text?: string }): Promise<HTMLScriptElement> {
        return Utils.addScript(options);
    }
}

export const cvmaker = new CVMakerImpl();

export const cvmakeroptions = {
    setPDFUrl: null as ((url: string | null) => void) | null,
};
