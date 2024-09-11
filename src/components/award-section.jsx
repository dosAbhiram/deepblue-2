import "../styles/awards.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AwardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="award-container">
      <p className="heading">Awards & Certifications /</p>
      <div className="awards" ref={ref}>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <img src="awards/awwwards-home.png.webp" alt="Awwwards" />
          <p>Awwwards Winner</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 1.5, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>

        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
        >
          <img src="awards/best-web-design.png.webp" alt="Best Web Design" />
          <p>Best Web Design</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 1.7, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.9,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.4,
          }}
        >
          <img src="awards/webbys-home.png.webp" alt="Webby Award" />
          <p>Webby Award Winner</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 1.9, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 2.1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.6,
          }}
        >
          <img src="awards/GSA_home.png.webp" alt="GSA Contract Holder" />
          <p>GSA Contract Holder</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 2.1, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 2.3, // Slower animation
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.8,
          }}
        >
          <img src="awards/508c.png.webp" alt="ADA Disabilities Compliant" />
          <p>ADA Disabilities Compliant</p>
        </motion.div>
      </div>
    </div>
  );
}

export default AwardSection;
