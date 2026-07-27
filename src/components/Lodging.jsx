import Icon from './Icon';
import Reveal from './Reveal';
import { lodging } from '../data/wedding';

export default function Lodging() {
  return (
    <section className="section" id="hospedaje">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="bed" size={16} />
          Hospedaje
        </Reveal>
        <Reveal as="h2" className="section-title">
          Dónde alojarse
        </Reveal>
        <Reveal as="p" className="section-sub">
          Un par de opciones sugeridas en Paso de la Patria.
        </Reveal>

        <div className="info-cards">
          {lodging.map((place, i) => (
            <Reveal as="div" className="info-card section-card" key={place.name} delay={i * 100}>
              <Icon name="bed" size={30} />
              <h3>{place.name}</h3>
              <p>{place.copy}</p>
              <a href={place.searchUrl} target="_blank" rel="noopener" className="btn btn--outline">
                Buscar
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
