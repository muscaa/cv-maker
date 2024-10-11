import * as api from "@/api/CVMaker";
import impl from "@/api/CVMakerImpl";

import * as Utils from "@/app/Utils";
import * as UIImpl from "./UIImpl";

export class Impl implements api.CVMaker {

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
        ui.ui = impl.ui;

        this.ui = ui;
    }

    updateUI(): void {
        this.__setComponents?.(UIImpl.renderChildren(this.ui!.render()));
    }
}
