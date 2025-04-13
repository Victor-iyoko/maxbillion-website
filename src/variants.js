 const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.2, delayChildren: 0.5 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const imageVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
})

const imageFadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
}

const beforeAfterVariants = (before) => ({
  hidden: { opacity: 0, x: 40, y: 60, scale: 0.85 },
  visible: {
    opacity: before ? 0.15 : 0.3,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: before ? 1.5 : 1
    },
  },
})

const cardGroupVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], staggerChildren: 0.2, delayChildren: 1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const futureDevVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }
}


export {
    textVariants,
    imageFadeIn,
    imageVariants,
    beforeAfterVariants,
    itemVariants,
    cardGroupVariants,
    cardVariants,
    futureDevVariants
}