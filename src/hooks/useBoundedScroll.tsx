'use client';

import { useMotionValue, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { clamp } from '~/helper/clamp';

export function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);

  useEffect(() => {
    return scrollY.on('change', (current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous!;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);
  return { scrollYBounded, scrollY };
}
