import Icon from './Icon';
import Reveal from './Reveal';
import { gifts } from '../data/wedding';

export default function Gifts() {
  return (
    <section className="section" id="regalos">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="gift" size={16} />
          Regalos
        </Reveal>
        <Reveal as="h2" className="section-title">
          {gifts.title}
        </Reveal>
        <Reveal className="gift-note section-card" style={{ padding: 'clamp(2rem, 5vw, 2.6rem)' }}>
          <Icon name="heart" size={32} />
          <p>{gifts.copy}</p>
        </Reveal>
      </div>
    </section>
  );
}
