export interface MainProps {
    children?: React.ReactNode;
}

export default function Main(props: MainProps) {
    return (
        <main className="flex justify-center items-center w-screen h-screen p-10">
            <div className="flex flex-col w-full max-w-5xl h-full justify-center items-center">
                <div className="flex-grow"></div>
                {props.children}
                <div className="flex-grow"></div>
            </div>
        </main>
    );
}
