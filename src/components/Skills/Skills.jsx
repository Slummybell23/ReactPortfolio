import SkillCard from "./SkillCard.jsx";

function Skills() {

    const skills = [
        {name: "C#", context: "Learning C#", length: "3 years"},
        {name: "Java", context: "Learning C#", length: "3 years"},
        {name: "SQL", context: "Learning C#", length: "3 years"},
        
    ]


    return (
        <section className="card mx-5">
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <SkillCard skill={skill}></SkillCard>
                ))}
            </div>
        </section>

    )
}

export default Skills