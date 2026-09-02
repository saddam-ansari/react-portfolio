import { useEffect, useState } from "react";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (documentHeight <= 0) {
                setProgress(0);
                return;
            }

            const scrollProgress = (scrollTop / documentHeight) * 100;

            setProgress(scrollProgress);
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[100] h-0.5 w-full bg-transparent"
        >
            <div
                className="h-full origin-left bg-indigo-400 transition-[width] duration-75"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
}

export default ScrollProgress;