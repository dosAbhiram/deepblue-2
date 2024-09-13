/* eslint-disable react/prop-types */
import Navbar from "../components/navbar";
import "../styles/work.css";
import "../styles/section.css";
import Form from "../components/form-section";
import Footer from "../components/footer";
import Map from "../components/map";
import { useState } from "react";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="section">
      <div className="content-wrapper">
        <div className="left-content">
          <h2>DEEPBLUE A.I. Web Design Portfolio</h2>
        </div>
        <div className="right-content">
          <p>
            A leading Web Design and WordPress development agency, we offer a
            core set of AI-powered design, development, and marketing services
            to a diverse group of industries. Our capabilities range from custom
            web design, infused with AI-driven personalization and optimization,
            to responsive design and robust CMS solutions. We integrate
            cutting-edge AI into branding and SEO marketing campaigns, always
            prioritizing an exceptional user experience.
            <p>Let us show you how AI can transform your online presence!</p>
          </p>
          <p>
            Explore the industry links below to view our web design portfolio
            and contact us to schedule your complimentary assessment.
          </p>
        </div>
      </div>
    </div>
  );
}

const portfolio = [
  {
    Name: "Intel",
    src: "Portfolio/intel.jpg",
    filter: ["All", "ConsumerBrand", "Corporate", "Technology"],
    link: "/work/intel",
  },
  {
    Name: "Home Depot",
    src: "Portfolio/homeDepot.jpg",
    filter: ["All", "ConsumerBrand", "Corporate", "eCommerce"],
  },
  {
    Name: "LaCroix Water",
    src: "Portfolio/lacroix.jpg",
    filter: ["All", "ConsumerBrand", "Corporate", "eCommerce"],
  },
  {
    Name: "NASA",
    src: "Portfolio/nasa.jpg",
    filter: ["All", "Government", "Education"],
  },
  {
    Name: "Johns Hopkins University: Global.HIV",
    src: "Portfolio/johns-hopkins.webp",
    filter: ["All", "Education", "Healthcare", "NonProfit"],
  },
  {
    Name: "Environmental Protection Agency",
    src: "Portfolio/epa.jpg",
    filter: ["All", "Government"],
  },
  {
    Name: "Object Rocket",
    src: "Portfolio/object-rocket.jpg",
    filter: ["All", "Corporate", "Technology"],
  },
  {
    Name: "Fox Theatre",
    src: "Portfolio/fox.jpg",
    filter: ["All", "Entertainment", "eCommerce"],
  },
  {
    Name: "United States Courts",
    src: "Portfolio/USCourts.jpg",
    filter: ["All", "Government"],
  },
  {
    Name: "Sports Club/LA",
    src: "Portfolio/sportsclubla.jpg",
    filter: ["All", "Healthcare", "Corporate", "ConsumerBrand"],
  },
  {
    Name: "Tennessee Aquarium",
    src: "Portfolio/tn_aqua.jpg",
    filter: ["All", "Entertainment", "Tourism"],
  },
];

function Category({ selectedCategory }) {
  const filterPortfolio = (category) => {
    return portfolio.filter((item) => item.filter.includes(category));
  };

  const filteredPortfolio = filterPortfolio(selectedCategory);

  return (
    <div className="PortFolio">
      {filteredPortfolio.map((item) => (
        <div key={item.Name} className="portfolioImage">
          <img src={item.src} alt={item.Name} />
          <div className="overlay">
            <p>{item.Name}</p>
            <Link to={item.link}>
              <em>View Case Study</em>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Our Work</h1>
        <p>
          <em>
            Custom web design that improves your online visibility & search
            marketing services that improves your bottom-line.
          </em>
        </p>
      </div>
      <div>
        <Section />
      </div>
      <div className="works">
        <h3>
          <em>Featured Work /</em>
        </h3>
        <div className="category">
          <button onClick={() => handleClick("All")}>All</button>
          <button onClick={() => handleClick("Technology")}>Technology</button>
          <button onClick={() => handleClick("Government")}>Government</button>
          <button onClick={() => handleClick("Education")}>Education</button>
          <button onClick={() => handleClick("ConsumerBrand")}>
            Consumer Brand
          </button>
          <button onClick={() => handleClick("Entertainment")}>
            Entertainment
          </button>
          <button onClick={() => handleClick("Tourism")}>Tourism</button>
          <button onClick={() => handleClick("NonProfit")}>Non-Profit</button>
          <button onClick={() => handleClick("Healthcare")}>Healthcare</button>
          <button onClick={() => handleClick("Corporate")}>Corporate</button>
          <button onClick={() => handleClick("eCommerce")}>eCommerce</button>
        </div>
        <Category selectedCategory={selectedCategory} />
        <Form />
        <Map />
        <div style={{ backgroundColor: "#3f4247", width: "100vw" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
