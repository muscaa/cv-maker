import { WindowCVMaker } from "./api/CVMaker";

declare global {
    interface Window extends
        WindowCVMaker
    {}
}
