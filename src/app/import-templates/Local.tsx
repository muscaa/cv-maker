import * as Config from "@/Config";

import FileDropzone from "@/components/FileDropzone";

export default function Local() {
    return (
        <>
            <FileDropzone
                className="h-full"
                options={{
                    multiple: false,
                    accept: {
                        "": [".zip"]
                    },
                    onDropAccepted(files) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const arrayBuffer = reader.result as ArrayBuffer;
                            
                            Config.importTemplateFromArrayBuffer(arrayBuffer);
                        };
                        reader.onerror = (error) => {
                            console.error(error);
                        };
                        
                        reader.readAsArrayBuffer(files[0]);
                    },
                }}
            />
        </>
    );
}
