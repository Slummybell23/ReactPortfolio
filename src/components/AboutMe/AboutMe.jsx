import SectionHeading from "../SectionHeading/SectionHeading.jsx";

function AboutMe() {
    return (
        <section id="about" className="scroll-mt-20">
            <div className="section">
                <SectionHeading label="About" title="A bit about me" />

                <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-neutral-600">
                    <p>
                        Hi! I'm Cache Salyers. I've always had a love for building things and
                        creating, and that love is exactly what drew me into Computer Science.
                    </p>
                    <p>
                        Since then I've been able to fine-tune my engineering skills to build a
                        wide range of things — and to keep learning along the way. Below you'll
                        find the skills I work with and the projects I've built, both in my free
                        time and at work.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
