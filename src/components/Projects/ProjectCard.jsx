import "./projectCard.css"

function ProjectCard({project}) {

    return (
        <section className="project-card">
            <h3 className="project-card-title">{project.name}</h3>
            <div className="project-description">
                {project.description}
            </div>
        </section>
    )
}

export default ProjectCard