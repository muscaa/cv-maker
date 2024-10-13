import * as SVG from "../SVG";

export default function Folder(props: SVG.Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="24px"
            height="24px"
            fill="currentColor"
            className={props.className}
        >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Z" />
        </svg>
    );
}
