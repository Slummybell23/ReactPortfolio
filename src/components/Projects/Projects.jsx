import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import rewardingFitness from "../../assets/rewardingFitness.svg";
import MediaLibraryOptimizer from "../../assets/MediaLibraryOptimizer.png";
import portfolioIcon from "../../assets/portfolioIcon.svg";
import calorieTracker from "../../assets/calorieTracker.jpg";
import calorieShot1 from "../../assets/calorieShot1.jpg";
import calorieShot2 from "../../assets/calorieShot2.jpg";
import calorieShot3 from "../../assets/calorieShot3.jpg";
import rewarding1 from "../../assets/rewarding1.jpg";
import rewarding2 from "../../assets/rewarding2.jpg";
import rewarding3 from "../../assets/rewarding3.jpg";
import rewarding4 from "../../assets/rewarding4.jpg";
import jobTrackr from "../../assets/jobTrackr.png";
import fileShare from "../../assets/fileShare.svg";
import homelab from "../../assets/homelab.svg";

function Projects() {

    const projects = [
        {name: "Cache's Calorie Tracker", image: calorieTracker, screenshots: [calorieShot1, calorieShot2, calorieShot3], gitHub: "https://apps.apple.com/us/app/caches-calorie-tracker/id6760546080", description: "A beautiful and simple calorie tracker available on the App Store, backed by a C# API that pulls nutritional information from FatSecret.", skills: [
            {name: "Swift UI"},
            {name: "iCloud"},
            {name: "CloudKit"},
            {name: "HealthKit"},
            {name: "C#"},
            {name: ".Net"},
            {name: "Docker"}
            ]
        },
        {name: "Rewarding Fitness", image: rewardingFitness, screenshots: [rewarding1, rewarding2, rewarding3, rewarding4], gitHub: "https://www.linkedin.com/in/cache-salyers/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADPHYFkB2aCRoBeA6OppslYIssr_98i4NSM", description: "A gamified iOS workout tracker that turns training into a reward system — smart workout recommendations, achievements and personal records, body-metric tracking, Apple Health sync, and iCloud backup across devices. Built in SwiftUI with on-device Apple Intelligence touches and a StoreKit-powered Pro subscription.", skills: [
            {name: "Swift UI"},
            {name: "SwiftData"},
            {name: "CloudKit"},
            {name: "HealthKit"},
            {name: "StoreKit"},
            {name: "Apple Intelligence"}
            ]
        },
        {name: "JobTrackr", image: jobTrackr, gitHub: "https://git.slummybell.com/slummybell/caches-job-trackr", description: "A self-hosted job-application tracker with a drag-and-drop Kanban board, resume storage, contacts, follow-up reminders, and pipeline analytics. Ships as a single Docker image backed by PostgreSQL, with ASP.NET Core Identity auth, a first-run setup wizard, dark mode, and an installable PWA.", skills: [
            {name: "C#"},
            {name: ".Net 10"},
            {name: "PostgreSQL"},
            {name: "Entity Framework"},
            {name: "React"},
            {name: "Tailwind CSS"},
            {name: "Docker"}
            ]
        },
        {name: "Single-Use File Share", image: fileShare, gitHub: "https://git.slummybell.com/slummybell/single-use-file-share", description: "Upload a file, get a link, and share it — the file auto-deletes when it expires, so nothing lingers. A Rust (axum + tokio) backend streams uploads and downloads in chunks up to 100 GiB, guards free disk space, and runs a background janitor to purge expired files — all shipped as a single Docker image alongside the React frontend.", skills: [
            {name: "Rust"},
            {name: "Axum"},
            {name: "Tokio"},
            {name: "React"},
            {name: "Tailwind CSS"},
            {name: "Docker"}
            ]
        },
        {name: "Self-Hosted Homelab", image: homelab, gitHub: "https://git.slummybell.com/slummybell", description: "My self-hosted infrastructure — an Unraid server running everything in Docker (including a few containers I built myself), with Jenkins driving automated CI/CD and a Forgejo instance hosting my git repositories. It's where I deploy my projects, experiment, and learn how production systems fit together.", skills: [
            {name: "Unraid"},
            {name: "Docker"},
            {name: "Jenkins"},
            {name: "Forgejo"},
            {name: "Nginx"},
            {name: "Linux"}
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
        {name: "Portfolio", image: portfolioIcon, gitHub: "https://github.com/Slummybell23/ReactPortfolio", description: "A React JS built webpage to act as a home for my projects, skills, and mindset.", skills: [
                {name: "React"},
                {name: "Javascript"},
                {name: "CSS"},
                {name: "Github"}
            ]
        }
    ]

    return (
        <section id="projects" className="scroll-mt-20">
            <div className="section">
                <SectionHeading
                    label="Projects"
                    title="Things I've built"
                    subtitle="A few projects I've shipped — from native iOS apps to self-hosted tooling."
                />

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects