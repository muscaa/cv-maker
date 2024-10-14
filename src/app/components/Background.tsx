export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 blur-[256px]">
            <div className="absolute left-0 top-0 size-96">
                <div className="absolute left-[-110%] top-[-40%] size-full rounded-full bg-secondary"></div>
            </div>
            <div className="absolute right-0 top-0 size-48">
                <div className="absolute right-[-100%] top-[0%] size-full rounded-full bg-secondary"></div>
            </div>
            <div className="absolute right-0 bottom-0 size-48">
                <div className="absolute right-[200%] bottom-[-100%] size-full rounded-full bg-secondary"></div>
            </div>
        </div>
    );
}
