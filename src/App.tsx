import { useState, useEffect, lazy, Suspense } from 'react';
import { useTheme } from './hooks/useTheme';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const SoftSkills = lazy(() => import('./components/SoftSkills'));
const CurrentlyExploring = lazy(() => import('./components/CurrentlyExploring'));
const Services = lazy(() => import('./components/Services'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const GitHub = lazy(() => import('./components/GitHub'));
const CodingProfiles = lazy(() => import('./components/CodingProfiles'));
const Experience = lazy(() => import('./components/Experience'));
const Achievements = lazy(() => import('./components/Achievements'));
const Resume = lazy(() => import('./components/Resume'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${theme} min-h-screen bg-slate-950 text-slate-100`}>
      <LoadingScreen done={loaded} />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Education />
          <Skills />
          <SoftSkills />
          <CurrentlyExploring />
          <Services />
          <Certifications />
          <Projects />
          <GitHub />
          <CodingProfiles />
          <Experience />
          <Achievements />
          <Resume />
          <Blog />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <AIAssistant />
      </Suspense>
    </div>
  );
}
