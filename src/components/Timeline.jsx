import Icon from './Icon';
import Reveal from './Reveal';
import { timeline, dayStops } from '../data/wedding';
import { colorAtProgress } from '../utils/color';

export default function Timeline() {
  return (
    <section className="section" id="cronograma">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          <Icon name="clock" size={16} />
          Cronograma
        </Reveal>
        <Reveal as="h2" className="section-title">
          Así va a ser el día
        </Reveal>

        <div className="section-card" style={{ padding: 'clamp(2rem, 5vw, 3rem)', maxWidth: 720, margin: '0 auto' }}>
          <div className="timeline">
            {timeline.map((item, i) => {
              const color = colorAtProgress(dayStops, item.t);
              return (
                <Reveal as="div" className="timeline-item" key={item.time} delay={i * 90}>
                  <div className="timeline-icon" style={{ borderColor: color, color }}>
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <div className="timeline-time">
                      {item.time} · {item.title}
                    </div>
                    <p className="timeline-label">{item.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
