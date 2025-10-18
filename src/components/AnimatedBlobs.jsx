import React from "react";
import { blobVariants } from "../variants";
import {motion} from 'framer-motion';

const AnimatedBlobs = ({left}) => {
  return (
    <motion.div
            variants={blobVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
     className="absolute w-full h-full pointer-events-none -z-10">
      <svg
        className={`absolute w-[600px] animate-blob1 ${left ? "-top-40 -start-96 text-[var(--primary-accent-color)]" : "opacity-40 -bottom-0 -end-60 text-[var(--secondary-accent-color)]"}`}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M41.3,-70.4C55.6,-63.5,70.5,-56.1,76.8,-44.2C83.2,-32.3,81.1,-16.2,77.1,-1.5C73.1,13.3,67.3,26.6,60.2,39.8C53.2,53,45,66.1,33,73.6C20.9,81.1,5.1,83, -10.7,84.8C-26.5,86.6,-53,88.3,-67.4,77.1C-81.7,65.9,-84,41.7,-81.3,21.2C-78.5,0.6,-70.8,-16.4,-63.4,-31.4C-56,-46.4,-48.9,-59.5,-38.4,-68C-27.9,-76.5,-13.9,-80.5,-0.3,-79.9C13.3,-79.3,26.6,-74.2,41.3,-70.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedBlobs;
