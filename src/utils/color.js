export function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function lerp(a, b, f) {
  return a + (b - a) * f;
}

// Interpolates a color across a list of { t, color } stops for a given
// progress value (0..1). Stops must be sorted ascending by t.
export function colorAtProgress(stops, progress) {
  const p = Math.min(1, Math.max(0, progress));
  let lower = stops[0];
  let upper = stops[stops.length - 1];

  for (let i = 0; i < stops.length - 1; i++) {
    if (p >= stops[i].t && p <= stops[i + 1].t) {
      lower = stops[i];
      upper = stops[i + 1];
      break;
    }
  }

  const span = upper.t - lower.t || 1;
  const f = (p - lower.t) / span;

  const c1 = hexToRgb(lower.color);
  const c2 = hexToRgb(upper.color);

  const r = Math.round(lerp(c1.r, c2.r, f));
  const g = Math.round(lerp(c1.g, c2.g, f));
  const b = Math.round(lerp(c1.b, c2.b, f));

  return `rgb(${r}, ${g}, ${b})`;
}

// Perceived luminance (0..1) of an interpolated background color, used to
// decide whether dark or light text stays readable on top of it.
export function luminanceAtProgress(stops, progress) {
  const p = Math.min(1, Math.max(0, progress));
  let lower = stops[0];
  let upper = stops[stops.length - 1];
  for (let i = 0; i < stops.length - 1; i++) {
    if (p >= stops[i].t && p <= stops[i + 1].t) {
      lower = stops[i];
      upper = stops[i + 1];
      break;
    }
  }
  const span = upper.t - lower.t || 1;
  const f = (p - lower.t) / span;
  const c1 = hexToRgb(lower.color);
  const c2 = hexToRgb(upper.color);
  const r = lerp(c1.r, c2.r, f);
  const g = lerp(c1.g, c2.g, f);
  const b = lerp(c1.b, c2.b, f);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
