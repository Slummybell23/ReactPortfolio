import { useState } from "react";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Work", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <a href="#home" className="text-sm font-semibold tracking-tight text-neutral-900">
                    Cache Salyers
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <ul className="flex flex-col gap-1 border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-2 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}

export default Header;
