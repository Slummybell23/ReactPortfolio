import React from 'react';
// import "./workHistory.css" // You can likely remove this now if you use the classes below

const HISTORY = [
    {
        id: 1,
        company: "Harry Robinson Buick GMC",
        role: "Janitor",
        date: "June 2022 - May 2023",
        accolade: "Employee of the Month (August)",
        skills: ["Communication"]
    }
];

function WorkHistory() {
    return (
        <section className="card mx-5">
            <h2 className="section-title">
                Work History
            </h2>

            <div className="flex flex-col gap-6">
                {HISTORY.map((job) => (
                    <div
                        key={job.id}
                        className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg"
                    >
                        {/* Header: Company Name */}
                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                            {job.company}
                        </h3>

                        {/* Role & Date Row */}
                        <div className="flex justify-between items-start mb-4 text-gray-300">
                            <span className="font-semibold text-lg">{job.role}</span>
                            <span className="text-sm bg-slate-700 px-3 py-1 rounded-full text-gray-400 whitespace-nowrap">
                {job.date}
              </span>
                        </div>

                        {/* Accolades (Only renders if one exists) */}
                        {job.accolade && (
                            <div className="mb-5 text-sm text-yellow-300 bg-yellow-900/20 py-2 px-3 rounded border-l-2 border-yellow-500">
                                🏆 {job.accolade}
                            </div>
                        )}

                        {/* Skills Section */}
                        <div>
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                                Skills Learned
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded hover:bg-slate-600 transition-colors"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkHistory;