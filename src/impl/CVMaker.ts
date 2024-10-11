import * as api from "@/api/CVMaker";

import * as Utils from "@/app/Utils";
import * as UI from "./UI";

export class CVMakerImpl implements api.CVMaker {
    __setPDFUrl?: (url: string | null) => void;
    __setComponents?: (components: React.ReactNode) => void;

    ui?: api.UI;

    setPDFUrl(url: string | null): void {
        this.__setPDFUrl?.(url);
    }

    addScript(options: { src?: string, text?: string }): Promise<HTMLScriptElement> {
        return Utils.addScript(options);
    }

    setUI(ui: api.UI): void {
        ui.ui = nativeui;

        this.ui = ui;
        this.updateUI();
    }

    updateUI(): void {
        this.__setComponents?.(UI.renderMain());
    }
}

export const main = new CVMakerImpl();
export const nativeui = new UI.NativeUIImpl();
