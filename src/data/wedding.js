// Todo el contenido editable del sitio vive acá.
// El día se modela como una línea de tiempo real (16:45 -> noche),
// y cada "stop" de color define el degradé ambiente + el riel del día.

// GitHub Pages sirve este sitio desde /boda-juliana-santiago/, no desde la
// raíz del dominio — las rutas a /public deben usar este prefijo para no
// romperse en producción (en dev BASE_URL es simplemente '/').
const BASE = import.meta.env.BASE_URL;

export const couple = {
  names: ['Juliana', 'Santiago'],
  short: 'J & S',
};

export const wedding = {
  isoDate: '2026-11-28T16:45:00-03:00',
  dateLabel: '28 de Noviembre, 2026',
  locationShort: 'Paso de la Patria, Corrientes',
  rsvpDeadline: 'Antes del 15 de octubre de 2026',
  rsvpFormUrl: 'https://forms.gle/oNxsiWpukzAgxRLPA',
  mapsUrl: 'https://maps.app.goo.gl/1pWxPTuTu1GDu1Ws8',
  calendarUrl:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamiento+de+Juliana+%26+Santiago&dates=20261128T194500Z/20261129T080000Z&details=Ceremonia+16%3A45+hs.+Fiesta+al+t%C3%A9rmino+en+Confratelli+Caba%C3%B1as.+Ubicaci%C3%B3n%3A+https%3A%2F%2Fmaps.app.goo.gl%2F1pWxPTuTu1GDu1Ws8&location=Confratelli+Caba%C3%B1as%2C+Av.+Prefectura+Naval+4516%2C+Paso+de+la+Patria%2C+Corrientes',
};

export const venue = {
  name: 'Confratelli Cabañas',
  address: 'Av. Prefectura Naval 4516, Paso de la Patria, Corrientes',
  intro: 'Un mismo lugar para todo el día, a orillas del Paraná, para vivirlo juntos de principio a fin.',
};

// Los "stops" del arco del día: cada uno define una hora real, una etiqueta
// y el color que tiñe esa franja del sitio. t va de 0 (arranca la ceremonia)
// a 1 (entrada en la noche). Se usan para el fondo ambiente, el riel lateral
// y los íconos del cronograma.
export const dayStops = [
  { t: 0, time: '16:45', label: 'Ceremonia', color: '#FFB238' },
  { t: 0.242, time: '18:30', label: 'Recepción', color: '#FF6F59' },
  { t: 0.587, time: '21:00', label: 'Cena', color: '#C4487E' },
  { t: 0.864, time: '23:00', label: 'Baile', color: '#4B2A5E' },
  { t: 1, time: '00:00+', label: 'Noche', color: '#1A1030' },
];

// Same timeline, but the last stop is moonlight instead of night-indigo —
// used only for the day-rail orb itself, so the "moon" stays visible
// against the indigo night background instead of blending into it.
export const orbStops = [
  ...dayStops.slice(0, -1),
  { t: 1, time: '00:00+', label: 'Noche', color: '#F4EEFF' },
];

export const timeline = [
  {
    t: 0,
    time: '16:45',
    title: 'Ceremonia religiosa',
    copy: 'El comienzo de todo, con quienes más queremos cerca.',
    icon: 'rings',
  },
  {
    t: 0.242,
    time: '18:30',
    title: 'Recepción y cóctel',
    copy: 'Brindis a orillas del río para empezar a festejar.',
    icon: 'glass',
  },
  {
    t: 0.587,
    time: '21:00',
    title: 'Cena y momentos especiales',
    copy: 'Buena mesa y los brindis de la noche.',
    icon: 'fork',
  },
  {
    t: 0.864,
    time: '23:00',
    title: '¡A bailar!',
    copy: 'Apertura de la pista, hasta que el cuerpo aguante.',
    icon: 'music',
  },
];

export const dressCode = {
  title: 'Elegante & cómodo',
  copy: 'Elegante. Como el festejo es al aire libre y a la orilla del río, recomendamos taco ancho para mayor comodidad.',
  reserved: {
    colors: ['#FFFFFF', '#EDE1CC', '#F5EFE0'],
    note: 'Blanco, beige y crema — reservados para la novia',
  },
};

export const gifts = {
  title: 'Lo que más nos importa es tenerlos ahí',
  copy: 'Tenerte con nosotros ese día ya es el regalo más grande que nos podés hacer. Si de todas formas querés tener un gesto con nosotros, más cerca de la fecha te contamos cómo colaborar con nuestra luna de miel, con todo el cariño.',
};

export const lodging = [
  {
    name: 'Hotel Condado Casino',
    copy: 'Alojamiento sugerido por los novios.',
    searchUrl: 'https://www.google.com/search?q=Hotel+Condado+Casino+Paso+de+la+Patria+Corrientes',
  },
  {
    name: 'Cabañas Don Julián',
    copy: 'Alojamiento sugerido por los novios.',
    searchUrl: 'https://www.google.com/search?q=Caba%C3%B1as+Don+Juli%C3%A1n+Paso+de+la+Patria+Corrientes',
  },
];

export const gallery = [
  { src: `${BASE}assets/fototodos.jpeg`, alt: 'Juliana, Santiago y los suyos', wide: true, real: true },
  { src: `${BASE}assets/fotoambos2.jpeg`, alt: 'Juliana y Santiago', real: true },
  { deco: 'wave' },
];

export const assetPaths = {
  heroPhoto: `${BASE}assets/fotoambos.jpeg`,
  music: `${BASE}assets/musica.mp3`,
};
