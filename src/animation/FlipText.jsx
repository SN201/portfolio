import React from 'react'
import {motion} from 'framer-motion'
function FlipText({ children, href }) {
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return (
        <motion.a
          initial="initial"
          whileHover="hovered"
          href={href}
          className="relative block overflow-hidden whitespace-nowrap text-1xl  bg-transparent sm:text-1xl md:text-1xl lg:text-1xl"
          style={{
            lineHeight: 1.3,
          }}
        >
          <div>
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-0">
            {children.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.a>
      );
    };

export default FlipText
