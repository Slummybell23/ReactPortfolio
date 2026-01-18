//name, length, context
function SkillCard({skill}) {

    return(
        <section className="skill-card">
            <h3 className="skill-title">{skill.name}</h3>
            <div className="skill-content">
                {skill.context}
            </div>

            <hr />

            <div className="skill-footer">
                Time on Skill: <p className="font-light">{skill.length}</p>
            </div>
        </section>

    )

}

export default SkillCard