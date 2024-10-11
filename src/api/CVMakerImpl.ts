import { Impl } from "./impl/cvmaker/Impl";
import { NativeUIImpl } from "./impl/cvmaker/UIImpl";

const main = new Impl();
const ui = new NativeUIImpl();

export default {
    main,
    ui,
};
