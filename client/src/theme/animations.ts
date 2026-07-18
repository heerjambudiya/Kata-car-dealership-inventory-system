export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export const hoverLift = {
  whileHover: {
    y: -4,
    scale: 1.02,
  },

  whileTap: {
    scale: 0.98,
  },
};