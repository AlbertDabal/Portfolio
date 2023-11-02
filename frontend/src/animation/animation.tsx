export const animationSlideLeft = (delay: number) => ({
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visable: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      velocity: -100,
      delay: delay,
      duration: 0.3
    }
  }
});

export const animationShowElement = (delay: number) => ({
  hidden: {
    opacity: 0
  },
  visable: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: delay
    }
  }
});

export const animationShowImage = (delay: number) => ({
  hidden: {
    opacity: 0
  },
  visable: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay
    }
  }
});
