import * as api from "@/api/CVMaker";

import * as Utils from "@/app/Utils";

class CVMakerImpl implements api.CVMaker {

    public __setPDFUrl?: ((url: string | null) => void);

    public renderCallback?: (ui: api.UI) => void;

    setPDFUrl(url: string | null): void {
        this.__setPDFUrl?.(url);
    }

    addScript(options: { src?: string, text?: string }): Promise<HTMLScriptElement> {
        return Utils.addScript(options);
    }

    setRenderCallback(callback: (ui: api.UI) => void): void {
        this.renderCallback = callback;
    }
}

const impl = new CVMakerImpl();

export default impl;
