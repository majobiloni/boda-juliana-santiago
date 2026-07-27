import Icon from './Icon';
import Reveal from './Reveal';
import { venue, wedding } from '../data/wedding';

export default function Venue() {
  return (
    <section className="section" id="ceremonia">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="pin" size={16} />
          Dónde
        </Reveal>
        <Reveal as="h2" className="section-title">
          Ceremonia &amp; Fiesta
        </Reveal>
        <Reveal as="p" className="section-sub">
          {venue.intro}
        </Reveal>

        <Reveal className="venue-card section-card">
          <h3 className="venue-name">{venue.name}</h3>
          <p className="venue-address">{venue.address}</p>
          <div className="venue-times">
            <span className="venue-time">
              <Icon name="clock" size={15} />
              Ceremonia 16:45 hs
            </span>
            <span className="venue-time">
              <Icon name="glass" size={15} />
              Fiesta al término
            </span>
          </div>
          <a href={wedding.mapsUrl} target="_blank" rel="noopener" className="btn btn--solid">
            <Icon name="pin" size={16} />
            Cómo llegar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
