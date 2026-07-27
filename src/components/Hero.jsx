import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { couple, wedding, assetPaths } from '../data/wedding';

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <Reveal as="div" className="hero-text">
          <p className="hero-eyebrow">Nos casamos</p>
          <h1 className="hero-title">
            {couple.names[0]} <span className="amp">&amp;</span>
            <br />
            {couple.names[1]}
          </h1>
          <div className="hero-date-pill">
            <Icon name="calendar" size={15} />
            {wedding.dateLabel} · {wedding.locationShort}
          </div>
          <p className="hero-sub">
            Hay momentos que son inolvidables, pero compartirlos con quienes más queremos los
            hace eternos. Queremos que estés con nosotros en el día más especial de nuestras vidas.
          </p>
          <div className="hero-cta">
            <a href="#rsvp" className="btn btn--solid">
              <Icon name="check" size={16} />
              Confirmar asistencia
            </a>
            <a href={wedding.mapsUrl} target="_blank" rel="noopener" className="btn btn--outline">
              <Icon name="pin" size={16} />
              Ver ubicación
            </a>
          </div>
          <div className="scroll-cue">
            Descubrí más
            <Icon name="chevron" size={14} />
          </div>
        </Reveal>

        <Reveal as="div" className="hero-photo-wrap" delay={120}>
          <div className="hero-photo-ring" aria-hidden="true" />
          <div className="hero-photo">
            {photoFailed ? (
              <svg viewBox="0 0 200 250" role="img" aria-label={`${couple.names[0]} y ${couple.names[1]}`}>
                <rect width="200" height="250" fill="var(--paper-deep)" />
                <text
                  x="100"
                  y="135"
                  textAnchor="middle"
                  fontFamily="Bricolage Grotesque, serif"
                  fontStyle="italic"
                  fontSize="42"
                  fill="var(--ink)"
                >
                  J &amp; S
                </text>
              </svg>
            ) : (
              <img
                src={assetPaths.heroPhoto}
                alt={`${couple.names[0]} y ${couple.names[1]}`}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
