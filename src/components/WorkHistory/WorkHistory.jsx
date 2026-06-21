import SectionHeading from "../SectionHeading/SectionHeading.jsx";

const HISTORY = [
    {
        id: 1,
        company: "Harry Robinson Buick GMC",
        roles: [
            {
                id: "r1",
                title: "Janitor",
                date: "June 2022 - May 2023",
                accolades: ["Employee of the Month (August)"],
                skills: ["Communication", "Industrial Safety", "Hard Work"]
            }
        ]
    },
    {
        id: 2,
        company: "ArcBest Technologies",
        roles: [
            {
                id: "r1",
                title: "Student Worker - IS",
                date: "Oct 2022 - June 2025",
                accolades: ["Debugging API's", "Building API's", "Creating Selenium Automations", "Managing Agile Sprints", "Participating in PI planning"],
                skills: ["Communication", "Agile Development", ".NET programming", "Azure Devops", "Azure Virtual Machines"]
            },
            {
                id: "r2",
                title: "Information Services - Intern",
                date: "June 2025 - Current",
                accolades: ["Built Signal R application to manage Virtual Machines",
                    "Built RESTFUL API's to interact with internal systems.",
                    "Worked on internal Vue.Js applications to act as a dashboard for our team",
                    "Used Azure Devops to act as our Git repository, deployment utility, and assigning tasks during sprints."],
                skills: ["All existing skills under Student Worker - IS", "Octopus Deploy", "Javascript", "Vue Js"]
            }
        ]
    }
];

function WorkHistory() {
    return (
        <section id="work" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
            <div className="section">
                <SectionHeading label="Experience" title="Work history" />

                <div className="flex flex-col gap-6">
                    {HISTORY.map((job) => (
                        <div key={job.id} className="card">
                            <h3 className="border-b border-neutral-200 pb-3 text-xl font-semibold text-neutral-900">
                                {job.company}
                            </h3>

                            <div className="mt-5 flex flex-col gap-8">
                                {job.roles.map((role) => (
                                    <div key={role.id}>
                                        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                            <span className="font-medium text-neutral-900">
                                                {role.title}
                                            </span>
                                            <span className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs whitespace-nowrap text-neutral-500">
                                                {role.date}
                                            </span>
                                        </div>

                                        {role.accolades?.length > 0 && (
                                            <ul className="mb-4 flex flex-col gap-1.5">
                                                {role.accolades.map((accolade, i) => (
                                                    <li key={i} className="flex gap-2 text-sm text-neutral-600">
                                                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                                                        {accolade}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex flex-wrap gap-2">
                                            {role.skills.map((skill, i) => (
                                                <span key={i} className="tag">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkHistory;
