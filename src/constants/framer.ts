export const accordionVariants = {
  open: { opacity: 1, height: 'auto', transition: { opacity: { delay: 0.3 } } },
  collapsed: { opacity: 0, height: 0 },
};

export const swiperVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
