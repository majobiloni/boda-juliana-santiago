const paths = {
  calendar: 'M3 5h18M7 3v4M17 3v4M4 8h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z',
  pin: 'M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z|circle:12,9.5,2.4',
  clock: 'circle:12,12,9|M12 7v5l3 3',
  rings: 'circle:9,15,4|circle:15,15,4|M11 5h2l-1 4-1-4Z',
  glass: 'M8 3h8l-1.2 9a2.8 2.8 0 0 1-5.6 0L8 3Z|M12 14v7M9 21h6',
  fork: 'M7 2v9M10 2v9M7 6.5h3M8.5 11v11M17 2c-1.5 1-2 2.5-2 5s.5 4 2 5v9',
  music: 'circle:7,18,2.6|circle:16,16,2.6|M9.6 18V5.5l8.8-1.8v10.8',
  shirt: 'M8 4h8l2 4-4 2v10H10V10L6 8l2-4Z',
  gift: 'M4 9h16M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M12 9v12M8 9C5.5 9 5.5 5 8 5s4 2.5 4 4c0-1.5.5-4 3-4s2.5 4 0 4',
  bed: 'M3 19v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 19h18M6 11V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4',
  heart: 'M12 21s-7.5-4.9-10-9.5C.4 7.4 3 4 6.5 4 9 4 11 6 12 7.5 13 6 15 4 17.5 4 21 4 23.6 7.4 22 11.5 19.5 16.1 12 21 12 21Z',
  check: 'm4 13 4 4L19 6',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  chevron: 'M12 4v16M6 14l6 6 6-6',
  mail: 'M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z|m4 7 8 6 8-6',
  sun: 'circle:12,12,4|M12 3v2M12 19v2M4 12H2M22 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4',
  wave: 'M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0',
};

export default function Icon({ name, size = 20, className = '' }) {
  const def = paths[name];
  if (!def) return null;

  const segments = def.split('|');

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {segments.map((seg, i) => {
        if (seg.startsWith('circle:')) {
          const [cx, cy, r] = seg.replace('circle:', '').split(',');
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        return <path key={i} d={seg} />;
      })}
    </svg>
  );
}
