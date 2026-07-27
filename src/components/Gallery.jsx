import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { gallery } from '../data/wedding';

function GalleryTile({ tile, index }) {
  const [failed, setFailed] = useState(false);

  if (tile.real && !failed) {
    return (
      <Reveal as="div" className={`gallery-tile${tile.wide ? ' wide' : ''}`} delay={index * 80}>
        <img src={tile.src} alt={tile.alt} onError={() => setFailed(true)} />
      </Reveal>
    );
  }

  const deco = tile.real ? 'sun' : tile.deco;
  const bg =
    deco === 'sun'
      ? 'linear-gradient(135deg, var(--sun-gold), var(--sunset-coral))'
      : 'linear-gradient(135deg, var(--dusk-magenta), var(--twilight-plum))';

  return (
    <Reveal as="div" className={`gallery-tile${tile.wide ? ' wide' : ''}`} delay={index * 80}>
      <div className="gallery-deco" style={{ background: bg, color: 'var(--paper)' }}>
        <Icon name={deco === 'sun' ? 'sun' : 'wave'} size={64} />
      </div>
    </Reveal>
  );
}

export default function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="heart" size={16} />
          Nosotros
        </Reveal>
        <Reveal as="h2" className="section-title">
          Un poquito de nosotros
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((tile, i) => (
            <GalleryTile tile={tile} index={i} key={i} />
          ))}
        </div>

        <Reveal
          as="p"
          className="section-sub"
          style={{ marginTop: '2rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.15rem, 2.4vw, 1.4rem)', color: 'var(--on-ambient)', maxWidth: '42rem', transition: 'color 0.4s ease' }}
        >
          Nos embarcamos en esta aventura con todo el amor del mundo y con las mejores compañeras de
          vida que podríamos pedir.
        </Reveal>
      </div>
    </section>
  );
}
