import { useRef, useState } from 'react';
import Icon from './Icon';
import { assetPaths } from '../data/wedding';

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} src={assetPaths.music} loop preload="none" />
      <button
        className={`music-toggle${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
      >
        <Icon name={playing ? 'wave' : 'music'} size={20} />
      </button>
    </>
  );
}
