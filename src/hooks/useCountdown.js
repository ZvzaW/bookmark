import { useEffect, useState } from "react";


export const useCountdown = (from, duration) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const start = performance.now();
    let frameId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.ceil(from * (1 - progress)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [from, duration]);

  return value;
};
