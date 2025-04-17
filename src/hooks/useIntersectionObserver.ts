import { useState, useEffect } from "react";

const useIntersectionObserver = (
  ref: React.RefObject<Element | null>,
  threshold: number = 0.1
): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold }
    );

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
};

export default useIntersectionObserver;
