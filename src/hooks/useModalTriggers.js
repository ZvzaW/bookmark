import { useEffect, useState } from "react";

export const useModalTriggers = (delay) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let hasOpened = false;

    const stopListening = () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
    };

    const open = () => {
      if (hasOpened) return;
      hasOpened = true;
      setIsOpen(true);
      stopListening();
    };

    const handleMouseOut = (event) => {
      if (!event.relatedTarget && event.clientY <= 0) open();
    };

    const timer = setTimeout(open, delay);
    document.addEventListener("mouseout", handleMouseOut);

    return stopListening;
  }, [delay]);

  return [isOpen, () => setIsOpen(false)];
};
