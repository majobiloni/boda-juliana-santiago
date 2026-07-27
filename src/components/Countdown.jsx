import { useEffect, useRef } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { useCountdown } from '../hooks/useCountdown';
import { wedding } from '../data/wedding';

function pad(n) {
  return n.toString().padStart(2, '0');
}

function Unit({ value, label }) {
  const ref = useRef(null);
  const prev = useRef(value);

  useEffect(() => {
    if (prev.current !== value && ref.current) {
      ref.current.classList.remove('tick');
      void ref.current.offsetWidth;
      ref.current.classList.add('tick');
      prev.current = value;
    }
  }, [value]);

  return (
    <div className="countdown-box">
      <span className="countdown-num" ref={ref}>
        {pad(value)}
      </span>
      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(wedding.isoDate);

  return (
    <section className="section" id="cuenta-regresiva">
      <div className="container">
        <div className="section-card" style={{ padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem', maxWidth: 780, margin: '0 auto' }}>
          <Reveal as="p" className="eyebrow">
            <Icon name="sun" size={16} />
            Ya falta poco
          </Reveal>
          <Reveal as="h2" className="section-title">
            La cuenta regresiva ya empezó
          </Reveal>
          <Reveal className="divider-flourish" />

          <Reveal className="countdown-grid">
            <Unit value={days} label="Días" />
            <Unit value={hours} label="Horas" />
            <Unit value={minutes} label="Minutos" />
            <Unit value={seconds} label="Segundos" />
          </Reveal>

          <Reveal className="countdown-cta">
            <a className="btn btn--outline" target="_blank" rel="noopener" href={wedding.calendarUrl}>
              <Icon name="calendar" size={16} />
              Agregar a mi calendario
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
