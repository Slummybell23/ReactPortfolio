function ProjectCard({ project }) {
    const shots = project.screenshots;

    return (
        <article className="card overflow-hidden p-0">
            <div className="grid md:grid-cols-2">
                <div className="min-w-0 bg-neutral-50">
                    {shots?.length ? (
                        <div
                            className="flex snap-x snap-mandatory gap-4 overflow-x-auto p-6 sm:p-8"
                            aria-label={`${project.name} screenshots`}
                        >
                            {/* w-max + mx-auto centers the row when it fits and scrolls fully when it doesn't */}
                            <div className="mx-auto flex w-max items-center gap-4">
                                {shots.map((src, i) => (
                                    <img
                                        key={i}
                                        className="h-72 w-auto shrink-0 snap-center rounded-2xl border border-neutral-200 shadow-sm sm:h-80"
                                        src={src}
                                        alt={`${project.name} screenshot ${i + 1}`}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex min-h-56 items-center justify-center p-8">
                            <img
                                className="max-h-56 w-auto rounded-2xl object-contain shadow-sm"
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>

                <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 md:p-10">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
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
