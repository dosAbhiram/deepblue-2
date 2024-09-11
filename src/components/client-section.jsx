import "../styles/client.css";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="client-container">
      <p>Featured Web Design Clients /</p>

      <div className="insideContainer" ref={ref}>
        {/* First row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="row1"
        >
          <img src="clients/Intel-1.png.webp" alt="Intel" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/JHU.png.webp" alt="JHU" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/nasa.png.webp" alt="NASA" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/Continental-1.png.webp" alt="Continental" />
        </motion.div>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.9, ease: "easeInOut" }}
          style={{ height: "1px", width: "100vw", backgroundColor: "white" }}
        ></motion.div>

        {/* Second row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
          className="row1"
        >
          <img src="clients/sports-club.png" alt="Sports Club" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/Airbus.png" alt="Airbus" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/usc.png" alt="USC" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/ta.png" alt="TA" />
        </motion.div>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.9, ease: "easeInOut" }}
          style={{ height: "1px", width: "100vw", backgroundColor: "white" }}
        ></motion.div>

        {/* Third row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 3.5, duration: 1, ease: "easeInOut" }}
          className="row1"
        >
          <img src="clients/atlanta-web-design-4.png" alt="Save Our Seas" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 3.5, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/atlanta-web-design-5.png" alt="EPA" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 3.5, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/atlanta-web-design-6.png" alt="Mazda" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 3.5, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/atlanta-web-design-7.png" alt="UCDavis" />
        </motion.div>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 3.5, duration: 0.9, ease: "easeInOut" }}
          style={{ height: "1px", width: "100vw", backgroundColor: "white" }}
        ></motion.div>

        {/* Fourth row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 4.5, duration: 1, ease: "easeInOut" }}
          className="row1"
        >
          <img src="clients/sweetwater2.png.webp" alt="Sweetwater" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 4.5, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/NCI.png.webp" alt="NCI" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 4.5, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/disa.png.webp" alt="Disa" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 4.5, duration: 0.9, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="clients/medicalcity.png.webp" alt="Medical City" />
        </motion.div>
      </div>
    </div>
  );
}

export default Clients;
