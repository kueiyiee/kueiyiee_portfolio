import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import AmbientMotionLayer from './components/AmbientMotionLayer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import VerticalPortfolioLabel from './components/VerticalPortfolioLabel';
import useTheme from './hooks/useTheme';
import {
  aboutText,
  certifications,
  education,
  experience,
  navItems,
  profile,
  projects,
  seo,
  skills,
} from './data/portfolioData';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: seo.siteUrl,
      image: seo.image,
      jobTitle: 'Senior Computer Science Student and Full-Stack Developer',
      description: seo.description,
      email: profile.emailSecondary,
      telephone: profile.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dilla',
        addressCountry: 'Ethiopia',
      },
      sameAs: [profile.github, profile.linkedin, profile.website],
    }),
    []
  );

  const jumpTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="Kuei Poch Kuei, Full-Stack Developer, Cybersecurity Engineer, Dilla University" />
        <meta name="author" content={profile.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.siteUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="canonical" href={seo.siteUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <ScrollProgress />
      <ParticlesBackground theme={theme} />
      <AmbientMotionLayer theme={theme} />
      <VerticalPortfolioLabel />

      <motion.main
        className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 py-5 md:py-8 pb-10 md:pb-14"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Sidebar profile={profile} onJump={jumpTo} />
        <Navbar theme={theme} onToggleTheme={toggleTheme} profile={profile} onJump={jumpTo} />

        <Suspense fallback={<LoadingScreen />}>
          <About content={aboutText} />
          <Experience items={experience} />
          <Education items={education} />
          <Skills data={skills} />
          <Projects items={projects} />
          <Certifications items={certifications} />
          <Contact profile={profile} />
        </Suspense>

        <Footer profile={profile} />
      </motion.main>
    </>
  );
}
