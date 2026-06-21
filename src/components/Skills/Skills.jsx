import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import SkillCard from "./SkillCard.jsx";

function Skills() {

    const skills = [
        {name: "C#", context: "Fell in love with the .Net ecosystem early in my career and haven't stopped since.", length: "3 years"},

        {name: "Selenium", context: "Used professionally to develop production web interaction bots.", length: "3 years"},

        {name: "Java", context: "2nd language I've learned mostly from College.", length: "3 years"},
        {name: "Javascript", context: "Fairly new to Javascript but am eager to continue learning and use it to help me build my webapps", length: "1 year"},
        {name: "SQL", context: "New to SQL. Learning it to help me with database setup and querying.", length: "1 year"},

        {name: "React JS", context: "New to React, this portfolio was built using React!", length: "1 year"},
        {name: "Vue JS", context: "Use Vue JS professionally", length: "1 year"},
        {name: "SignalR", context: "Have used professionally to develop in production systems.", length: "1 year"},
        {name: "Swift UI", context: "Fairly new but used to create Cache's Workout App!", length: "1 year"},

        {name: "Docker", context: "My whole home server runs on Docker containers! A handful of them are even custom built by me.", length: "3 years"},
        {name: "Jenkins", context: "I use Jenkins on my home server to handle my automated CI/CD pipeline for various applications I built.", length: "1 year"},
        {name: "Unraid", context: "Unraid is the operating system my home server runs on!", length: "4 years"},
        {name: "Azure Devops", context: "I've used Azure Devops in a professional Agile team", length: "3 years"},
        {name: "Git", context: "I've used Git both professionally and independently for years as it is vital to change tracking.", length: "3 years"},


    ]


    return (
        <section id="skills" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
            <div className="section">
                <SectionHeading
                    label="Skills"
                    title="Tools I work with"
                    subtitle="Languages, frameworks, and platforms I've picked up in school, at work, and on my home server."
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
