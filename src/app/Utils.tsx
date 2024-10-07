import JSZip from "jszip";

export function addScript(options: { src?: string, text?: string }) {
    return new Promise<HTMLScriptElement>((resolve, reject) => {
        const script = document.createElement("script");
        if (options.src) script.src = options.src;
        if (options.text) script.text = options.text;

        script.onload = () => {
            resolve(script);
        };
        script.onerror = (error) => {
            document.body.removeChild(script);

            reject(error);
        };

        document.body.appendChild(script);
    });
}

export function loadFile(accept: string = "") {
    return new Promise<File>((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = accept;
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement;
            if (!target.files) {
                reject("No file selected");
                return;
            }

            const file = target.files[0];
            if (!file) {
                reject("No file selected");
                return;
            }

            resolve(file);
        }
        input.click();
    });
}

export function readFile(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result;
            
            if (result) {
                resolve(result.toString());
            } else {
                reject("Error reading file");
            }
        }
        reader.readAsText(file, "UTF-8");
    });
}

export function readZip(file: File) {
    return new Promise<JSZip>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const result = e.target?.result;
        
            if (result) {
                const zip = new JSZip();
                const unzipped = await zip.loadAsync(result);

                resolve(unzipped);
            } else {
                reject("Error unzipping file");
            }
        };
        reader.readAsArrayBuffer(file);
    });
}
