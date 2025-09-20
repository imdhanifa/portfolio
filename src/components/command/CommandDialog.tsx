export function CommandDialog({
    open,
    onOpenChange,
    children,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
}) {
    if (!open) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => onOpenChange(false)} // click outside closes
        >
            <div
                className="relative w-full max-w-lg rounded-2xl 
        bg-white/70 dark:bg-black/70 
        backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700 
        p-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()} // prevent closing inside
            >
                {/* Wrap content in a scrollable container */}
                <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
}