function SectionHeading({ label, title, subtitle }) {
    return (
        <div className="mb-12">
            <p className="section-label">{label}</p>
            <h2 className="section-heading">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
    );
}

export default SectionHeading;
