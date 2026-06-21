import SectionHeading from "../SectionHeading/SectionHeading.jsx";

function Education() {
    return (
        <section id="education" className="scroll-mt-20">
            <div className="section">
                <SectionHeading label="Education" title="Where I'm studying" />

                <div className="card">
                    <div className="flex flex-col gap-2 border-b border-neutral-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl font-semibold text-neutral-900">
                            University of Arkansas at Fort Smith
                        </h3>
                        <span className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs whitespace-nowrap text-neutral-500">
                            August 2023 - May 2027
                        </span>
                    </div>

                    <p className="mt-4 text-neutral-600">
                        Bachelor of Science in Computer Science
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Education;
