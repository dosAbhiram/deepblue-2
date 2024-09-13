import "../styles/section2.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className="Container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Our Capabilities
      </motion.h1>
      <div className="section-container">
        <motion.div
          className="part"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <div className="card">
            <h2>Custom Web Design</h2>
            <p>
              We craft visually stunning and user-friendly websites that
              captivate and engage your target audience and drive conversions.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </div>
          <div className="card">
            <h2>Brand & Styling Strategies</h2>
            <p>
              We establish a strong brand identity that resonates with your
              audience and sets you apart from the competition.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="section-divider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5, ease: "linear" }}
        ></motion.div>

        <motion.div
          className="part"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5, ease: "linear" }}
        >
          <div className="card">
            <h2>AI-Powered Design</h2>
            <p>
              We stay ahead of the curve by incorporating cutting-edge AI tools
              to optimize user experience, personalize content, and enhance
              efficiency.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </div>
          <div className="card">
            <h2>Search Engine Marketing</h2>
            <p>
              We equip you with the tools and strategies to increase your online
              visibility and attract qualified leads.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5, ease: "linear" }}
          className="section-divider"
        ></motion.div>

        <motion.div
          className="part"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5, ease: "linear" }}
        >
          <div className="card">
            <h2>Responsive Web Design</h2>
            <p>
              Your website will look flawless and function optimally across all
              devices, from desktops to mobile phones and tablets.
            </p>

            <a href="#">
              <em>Learn More</em>
            </a>
          </div>
          <div className="card">
            <h2>Maintenance & Analytics</h2>
            <p>
              Just like a well-oiled machine, your website requires ongoing
              maintenance and analysis to function optimally
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section2;
