import Icon from './Icon';
import Reveal from './Reveal';
import { dressCode } from '../data/wedding';

export default function DressCode() {
  return (
    <section className="section" id="dress-code">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="shirt" size={16} />
          Dress code
        </Reveal>
        <Reveal as="h2" className="section-title">
          {dressCode.title}
        </Reveal>

        <Reveal className="dress-wrap section-card" style={{ padding: 'clamp(2rem, 5vw, 2.6rem)' }}>
          <div className="dress-icon">
            <Icon name="shirt" size={38} />
          </div>
          <div className="dress-copy">
            <p>{dressCode.copy}</p>
            <div className="reserved-colors">
              {dressCode.reserved.colors.map((c) => (
                <span key={c} className="reserved-swatch" style={{ background: c }} />
              ))}
              <span className="reserved-note">{dressCode.reserved.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
