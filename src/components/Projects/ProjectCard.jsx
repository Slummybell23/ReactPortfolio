function ProjectCard({ project }) {
    return (
        <article className="card overflow-hidden p-0">
            <div className="grid md:grid-cols-2">
                <div className="flex min-h-56 items-center justify-center bg-neutral-50 p-8">
                    <img
                        className="max-h-56 w-auto rounded-2xl object-contain shadow-sm"
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                    />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                        {project.name}
                    </h3>

                    <p className="mt-3 leading-relaxed text-neutral-600">
                        {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                            <span key={skill.name} className="tag">
                                {skill.name}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a
                            href={project.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-arrow"
                        >
                            View project <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
