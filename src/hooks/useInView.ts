'use client';

import { RefObject, useEffect, useState } from 'react';

/** True while the element is (nearly) on screen. */
export const useInView = <T extends Element>(
  ref: RefObject<T | null>,
  rootMargin = '200px'
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
};
