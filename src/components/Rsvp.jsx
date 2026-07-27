import Icon from './Icon';
import Reveal from './Reveal';
import { wedding } from '../data/wedding';

export default function Rsvp() {
  return (
    <section className="section rsvp" id="rsvp">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="mail" size={16} />
          Confirmación
        </Reveal>
        <Reveal as="h2" className="section-title">
          ¿Nos acompañás?
        </Reveal>
        <Reveal as="p" className="section-sub">
          Nos encantaría contar con vos. Confirmá tu asistencia para poder prepararte un lugar con
          todo el cariño.
        </Reveal>

        <Reveal>
          <div className="rsvp-deadline">
            <Icon name="clock" size={15} />
            {wedding.rsvpDeadline}
          </div>
          <div>
            <a href={wedding.rsvpFormUrl} target="_blank" rel="noopener" className="btn btn--glow">
              Confirmar asistencia
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
