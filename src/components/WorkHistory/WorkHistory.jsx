import React from 'react';

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
        <section className="card mx-5">
            <h2 className="section-title text-2xl font-bold mb-6">
                Work History
            </h2>

            <div className="flex flex-col gap-6">
                {HISTORY.map((job) => (
                    <div
                        key={job.id}
                        className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg"
                    >
                        <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-slate-700 pb-2">
                            {job.company}
                        </h3>

                        <div className="flex flex-col gap-8">
                            {job.roles.map((role, index) => (
                                <div key={role.id} className="relative">
                                    {index > 0 && (
                                        <div className="absolute -top-4 left-0 right-0 border-t border-slate-700 border-dashed" />
                                    )}

                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 text-gray-300 gap-2">
                                        <span className="font-semibold text-lg text-white">
                                            {role.title}
                                        </span>
                                        <span className="text-xs bg-slate-700 px-3 py-1 rounded-full text-gray-400 whitespace-nowrap w-fit">
                                            {role.date}
                                        </span>
                                    </div>

                                    {role.accolades && role.accolades.length > 0 && (
                                        <div className="mb-4">
                                            <div className="flex flex-col gap-2">
                                                {role.accolades.map((accolade, i) => (
                                                    <div key={i} className="text-sm text-yellow-300 bg-yellow-900/20 py-1.5 px-3 rounded border-l-2 border-yellow-500 w-fit">
                                                         {accolade}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-2">
                                            Skills Used
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {role.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-slate-700/50 border border-slate-600 text-gray-300 text-xs rounded hover:bg-slate-600 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkHistory;