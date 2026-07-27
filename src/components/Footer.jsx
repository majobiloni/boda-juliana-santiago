import { couple } from '../data/wedding';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mono">
        {couple.names[0]} &amp; {couple.names[1]}
      </div>
      <div className="footer-date">28 · 11 · 2026</div>
      <p className="footer-love">Gracias por ser parte de esta historia. Con todo nuestro amor, los esperamos.</p>
    </footer>
  );
}
