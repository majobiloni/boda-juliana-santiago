import { useEffect } from 'react';
import './styles/components.css';
import { useScrollProgress } from './hooks/useScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import DayRail from './components/DayRail';
import Topbar from './components/Topbar';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import Timeline from './components/Timeline';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import Lodging from './components/Lodging';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import { dayStops } from './data/wedding';
import { luminanceAtProgress } from './utils/color';

export default function App() {
  const progress = useScrollProgress();

  // Headings that float directly on the ambient background (not on a paper
  // card) need to flip from dark to light text once the background gets
  // dark enough — otherwise they wash out against the dusk/night stops.
  useEffect(() => {
    const isDark = luminanceAtProgress(dayStops, progress) < 0.45;
    const root = document.documentElement.style;
    root.setProperty('--on-ambient', isDark ? 'var(--paper)' : 'var(--ink)');
    root.setProperty('--on-ambient-soft', isDark ? 'rgba(255, 246, 236, 0.75)' : 'var(--ink-soft)');
    root.setProperty('--on-ambient-accent', isDark ? 'var(--sun-gold)' : 'var(--sunset-coral)');
  }, [progress]);

  return (
    <>
      <AmbientBackground progress={progress} />
      <DayRail progress={progress} />
      <Topbar />
      <MusicToggle />

      <Hero />
      <Countdown />
      <Venue />
      <Timeline />
      <DressCode />
      <Gifts />
      <Lodging />
      <Gallery />
      <Rsvp />
      <Footer />
    </>
  );
}
