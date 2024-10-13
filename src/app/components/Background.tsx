export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 blur-[256px]">
            <div className="absolute left-0 top-0 size-96">
                <div className="absolute left-[-100%] top-[-50%] size-full rounded-full bg-secondary"></div>
            </div>
            <div className="absolute right-0 bottom-0 size-96">
                <div className="absolute right-[-100%] bottom-[-50%] size-full rounded-full bg-secondary"></div>
            </div>
        </div>
    );
}
