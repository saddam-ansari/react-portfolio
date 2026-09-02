import WhatIBring from "../components/WhatIBring";
import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/db";

function WhatIBringSection() {
    const { whatIBring } = portfolioData;

    return (
        <section
            id="what-i-bring"
            className="border-t border-white/5 px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="02 — What I Bring"
                    title="How I approach development."
                    description="A few things I bring to a development team beyond the technologies listed on my resume."
                />

                <WhatIBring items={whatIBring} />
            </div>
        </section>
    );
}

export default WhatIBringSection;