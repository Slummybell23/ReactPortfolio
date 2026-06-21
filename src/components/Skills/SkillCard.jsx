function SkillCard({ skill }) {
    return (
        <article className="card flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">{skill.name}</h3>
                <span className="tag whitespace-nowrap">{skill.length}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{skill.context}</p>
        </article>
    );
}

export default SkillCard;
