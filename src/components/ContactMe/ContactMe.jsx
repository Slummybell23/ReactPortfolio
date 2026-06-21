import SectionHeading from "../SectionHeading/SectionHeading.jsx";

function ContactMe() {
    return (
        <section id="contact" className="scroll-mt-20 border-t border-neutral-200 bg-neutral-50">
            <div className="section">
                <SectionHeading
                    label="Contact"
                    title="Let's get in touch"
                    subtitle="Have a question or an opportunity? I'd love to hear from you."
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-neutral-900">Find me online</h3>

                        <div className="space-y-4">
                            <a
                                href="https://www.linkedin.com/in/cache-salyers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/Slummybell23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://git.slummybell.com/slummybell"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>
                                <span>Forgejo</span>
                            </a>

                            <a
                                href="mailto:cachesalyers@gmail.com"
                                className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <span>cachesalyers@gmail.com</span>
                            </a>

                            <a
                                href="tel:+14795615870"
                                className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-neutral-900"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                                <span>(479)-561-5870</span>
                            </a>
                        </div>
                    </div>

                    <div className="card flex flex-col items-start justify-center">
                        <h3 className="text-lg font-semibold text-neutral-900">Send me a message</h3>
                        <p className="mt-2 text-neutral-600">
                            The quickest way to reach me is by email — I'll get back to you soon.
                        </p>
                        <a
                            className="btn-primary mt-6"
                            href="mailto:cachesalyers@gmail.com?subject=Inquiry from Website&body=Hi, I would like to discuss..."
                        >
                            Send me an email <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;
