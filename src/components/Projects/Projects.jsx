import ProjectCard from "./ProjectCard.jsx";
import workoutScreen from "../../assets/workoutScreen.jpeg"
import MediaLibraryOptimizer from "../../assets/mediaLibraryOptimizer.png";

function Projects() {

    const projects = [
        {name: "Cache's Workout App", description: "A Full Stack Workout tracker for IOS", image: workoutScreen, gitHub: "https://github.com/Slummybell23/MediaLibraryOptimizer", skills: [
            {name: "Postgres"},
            {name: "C#"},
            {name: ".Net 8"},
            {name: "Swift UI"},
            {name: "Docker"},
            {name: "Jenkins"},
            {name: "Github"}
            ]
        },
        {name: "Media Library Optimizer", image: MediaLibraryOptimizer, description: "A C# developed application to help optimize self hosted media libraries for storage and quality.", skills: [
            {name: "C#"},
            {name: ".Net 8"},
            {name: "Ffmpeg"},
            {name: "Docker"},
            {name: "Github"}
            ]
        }
    ]

    return (
        <section className="card mx-5">
            <h2 className="section-title">Projects</h2>
            <div className="grid grid-cols-1 gap-4">
                {projects.map((project) => (
                    <ProjectCard project={project}></ProjectCard>
                ))}
            </div>
        </section>

    )
}

export default Projects