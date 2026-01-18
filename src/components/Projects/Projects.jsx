import SkillCard from "../Skills/SkillCard.jsx";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {

    const projects = [
        {name: "Cache's Workout App", description: "A Full Stack Workout tracker for IOS", },
        {name: "Cache's Workout App", description: "A Full Stack Workout tracker for IOS", }
    ]

    return (
        <section className="card mx-5">
            <div className="grid grid-cols-1 gap-4">
                {projects.map((project) => (
                    <ProjectCard project={project}></ProjectCard>
                ))}
            </div>
        </section>

    )
}

export default Projects