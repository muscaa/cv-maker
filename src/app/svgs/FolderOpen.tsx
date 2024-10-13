import * as SVG from "../SVG";

export default function FolderOpen(props: SVG.Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="24px"
            height="24px"
            fill="currentColor"
            className={props.className}
        >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h360q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H314q-62 0-108 39t-46 99v262l79-263q8-26 29.5-41.5T316-560h516q41 0 64.5 32.5T909-457l-72 240q-8 26-29.5 41.5T760-160H160Z" />
        </svg>
    );
}
