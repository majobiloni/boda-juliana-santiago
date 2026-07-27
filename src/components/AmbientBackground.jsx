import { useMemo } from 'react';
import { dayStops } from '../data/wedding';
import { colorAtProgress } from '../utils/color';

function seededStars(count) {
  // Deterministic pseudo-random so stars don't jump around on re-render.
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(rand() * 100).toFixed(2)}%`,
    top: `${(rand() * 100).toFixed(2)}%`,
    size: (rand() * 1.6 + 0.6).toFixed(2),
    delay: `${(rand() * 4).toFixed(2)}s`,
  }));
}

const STARS = seededStars(60);

export default function AmbientBackground({ progress }) {
  const color = colorAtProgress(dayStops, progress);
  const nextColor = colorAtProgress(dayStops, Math.min(1, progress + 0.18));
  const starsOpacity = Math.max(0, (progress - 0.7) / 0.3);

  const style = useMemo(
    () => ({ background: `linear-gradient(165deg, ${color} 0%, ${nextColor} 100%)` }),
    [color, nextColor]
  );

  return (
    <div className="ambient-bg" style={style}>
      <div className="ambient-grain" />
      <div className="ambient-stars" style={{ opacity: starsOpacity }}>
        {STARS.map((s) => (
          <span
            key={s.id}
            className="ambient-star"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
