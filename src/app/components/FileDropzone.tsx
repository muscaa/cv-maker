import { useDropzone } from "react-dropzone";

export interface FileDropzoneProps {
    className?: string;
}

export default function FileDropzone(props: FileDropzoneProps) {
    const { isDragActive, isFileDialogActive, acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            "application/*": [ ".PNG", ".hello" ],
        },
        maxFiles: 1,
    });

    return (
        <div
            {...getRootProps()}

            className={`
                w-full px-2 py-16 rounded-xl
                flex items-center justify-center
                bg-background-4 bg-opacity-25 text-text-3
                shadow-md shadow-shadow
                select-none cursor-pointer
                ${isDragActive || isFileDialogActive ? "border-2 border-primary" : "border-2 border-background-4"}
                ${props.className}
            `}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col">
                <p>Drag 'n' drop files here, or click to select</p>
                {acceptedFiles.map((file, index) => (
                    <p key={index}>{file.name}</p>
                ))}
            </div>
        </div>
    );
}
