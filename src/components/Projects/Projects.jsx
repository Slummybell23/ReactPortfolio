import ProjectCard from "./ProjectCard.jsx";
import workoutScreen from "../../assets/workoutScreen.jpeg"
import MediaLibraryOptimizer from "../../assets/MediaLibraryOptimizer.png";
import portfolio from "../../assets/portfolio.jpeg";

function Projects() {

    const projects = [
        {name: "Cache's Workout App", description: "A Full Stack Workout tracker for IOS", image: workoutScreen, gitHub: "https://www.linkedin.com/in/cache-salyers/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADPHYFkB2aCRoBeA6OppslYIssr_98i4NSM", skills: [
            {name: "Postgres"},
            {name: "C#"},
            {name: ".Net 8"},
            {name: "Swift UI"},
            {name: "Docker"},
            {name: "Jenkins"},
            {name: "Github"}
            ]
        },
        {name: "Media Library Optimizer", image: MediaLibraryOptimizer, gitHub: "https://github.com/Slummybell23/MediaLibraryOptimizer", description: "A C# developed application to help optimize self hosted media libraries for storage and quality.", skills: [
            {name: "C#"},
            {name: ".Net 8"},
            {name: "Ffmpeg"},
            {name: "Docker"},
            {name: "Github"}
            ]
        },
        {name: "Portfolio", image: portfolio, gitHub: "https://github.com/Slummybell23/ReactPortfolio", description: "A React JS built webpage to act as a home for my projects, skills, and mindset.", skills: [
                {name: "React"},
                {name: "Javascript"},
                {name: "CSS"},
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