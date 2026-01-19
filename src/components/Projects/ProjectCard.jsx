import "./projectCard.css"

function ProjectCard({ project }) {
    return (
        <section className="w-full bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800">

            <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="bg-blue-950 flex items-center justify-center p-8 h-80 md:h-auto">
                    <img
                        className="object-contain h-full w-auto max-h-96 rounded-lg shadow-md"
                        src={project.image}
                        alt={project.name}
                    />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center bg-slate-900">

                    <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-6 leading-tight">
                        {project.name}
                    </h3>

                    <div className="text-slate-300 text-lg leading-relaxed">
                        {project.description}
                    </div>

                    <div className="mt-8 grid grid-cols-8 gap-2">
                        {project.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="project-glowing-text"
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a
                            href={project.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white font-semibold border-b-2 border-indigo-500 pb-1 hover:text-indigo-400 transition-colors cursor-pointer"
                        >
                            View Project <span className="ml-2">&rarr;</span>
                        </a>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ProjectCard