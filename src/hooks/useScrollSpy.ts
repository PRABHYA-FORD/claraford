'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view. A section counts as active
 * once its top crosses the band just below the fixed navbar.
 */
export function useScrollSpy(ids: readonly string[], offset = 96): string {
  // Empty until a section is observed, so pages without these sections highlight nothing.
  const [active, setActive] = useState('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        // Pick the visible section closest to the top of the viewport, in document order.
        const next = ids.find((id) => visible.has(id));
        if (next) setActive(next);
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
