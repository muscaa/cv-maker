import * as api from "@/api/CVMaker";

import Impl from "./impl/cvmaker/Impl";
import UIImpl from "./impl/cvmaker/UIImpl";

const impl = new Impl();

function createUI(callback?: (ui: api.UI) => void): UIImpl {
    const ui: UIImpl = new UIImpl();
    ui.__components = [];

    callback?.(ui);
    
    return ui;
}

export default {
    main: impl,
    createUI,
};
