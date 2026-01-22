import "./education.css"
import React from "react";

function Education() {

    return (
        <section className="card mx-5">
            <h2 className="section-title text-2xl font-bold mb-6">
                Education
            </h2>

            <div className="school-card">
                <div className="flex flex-col sm:flex-row sm:justify-between mb-4 border-b border-slate-700 pb-2">
                    <h2 className="school-name">University of Arkansas at Fort Smith</h2>
                    <span className="school-period">August 2023 - May 2027</span>
                </div>

                <div className="text-sm text-yellow-300 bg-yellow-900/20 py-1.5 px-3 rounded border-l-2 border-yellow-500 w-fit">
                    🏆 Bachelors of Science in Computer Science
                </div>
            </div>


        </section>


    )
}

export default Education;