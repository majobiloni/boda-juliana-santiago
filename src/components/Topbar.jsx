import { useEffect, useState } from 'react';
import Icon from './Icon';
import { couple } from '../data/wedding';

export default function Topbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.65);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`topbar${visible ? ' is-visible' : ''}`}>
      <span className="topbar-mono">{couple.short}</span>
      <a href="#rsvp" className="btn btn--glow">
        <Icon name="check" size={15} />
        Confirmar
      </a>
    </div>
  );
}
