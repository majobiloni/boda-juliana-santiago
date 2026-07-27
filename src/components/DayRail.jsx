import { dayStops, orbStops } from '../data/wedding';
import { colorAtProgress } from '../utils/color';

// The signature element: a vertical rail that mirrors the wedding day's
// real timeline. As the guest scrolls the page, a sun slides down the rail
// and turns into a moon by the time they reach the RSVP — the page's
// progress literally IS the day passing, from the 16:45 ceremony to the
// night dance floor. The orb uses orbStops (not dayStops) so it stays a
// pale, visible moon instead of fading into the indigo night background.
export default function DayRail({ progress }) {
  const color = colorAtProgress(orbStops, progress);
  const isNight = progress > 0.8;

  return (
    <aside className="day-rail" aria-hidden="true">
      <div className="day-rail-track">
        {dayStops.slice(0, -1).map((stop) => (
          <div key={stop.time} className="day-rail-tick" style={{ top: `${stop.t * 100}%` }}>
            <span className="day-rail-tick-dot" style={{ background: stop.color }} />
            <span className="day-rail-tick-label">{stop.time}</span>
          </div>
        ))}
      </div>
      <div
        className={`day-rail-orb${isNight ? ' is-night' : ''}`}
        style={{ top: `${progress * 100}%`, background: color, boxShadow: `0 0 22px 4px ${color}66` }}
      >
        <span className="day-rail-orb-glow" style={{ background: color }} />
      </div>
    </aside>
  );
}
