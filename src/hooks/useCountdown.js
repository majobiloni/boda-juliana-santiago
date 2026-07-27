import { useEffect, useState } from 'react';

function diffParts(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export function useCountdown(isoDate) {
  const [parts, setParts] = useState(() => diffParts(new Date(isoDate)));

  useEffect(() => {
    const target = new Date(isoDate);
    const id = setInterval(() => setParts(diffParts(target)), 1000);
    return () => clearInterval(id);
  }, [isoDate]);

  return parts;
}
