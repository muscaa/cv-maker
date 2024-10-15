import Arrow from "./svgs/Arrow";
import ArrowBack from "./svgs/ArrowBack";
import Search from "./svgs/Search";
import Star from "./svgs/Star";
import Folder from "./svgs/Folder";
import FolderOpen from "./svgs/FolderOpen";
import Add from "./svgs/Add";
import QuestionMark from "./svgs/QuestionMark";
import UploadFile from "./svgs/UploadFile";
import Settings from "./svgs/Settings";
import Download from "./svgs/Download";
import Home from "./svgs/Home";

export interface Props {
    className?: string;
}
export type Component = (props: Props) => React.ReactNode;

export {
    Arrow,
    ArrowBack,
    Search,
    Star,
    Folder,
    FolderOpen,
    Add,
    QuestionMark,
    UploadFile,
    Settings,
    Download,
    Home,
};
