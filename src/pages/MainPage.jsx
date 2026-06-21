import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Skills from "../components/Skills/Skills.jsx";
import Projects from "../components/Projects/Projects.jsx";
import WorkHistory from "../components/WorkHistory/WorkHistory.jsx";
import Education from "../components/Education/Education.jsx";
import ContactMe from "../components/ContactMe/ContactMe.jsx";

function MainPage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <WorkHistory />
                <Education />
                <ContactMe />
            </main>
        </>
    );
}

export default MainPage;
