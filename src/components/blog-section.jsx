import "../styles/blog.css";
function BlogSection() {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <p>The Blog /</p>
      </div>
      <div className="blog">
        <div>
          <h3>ARTIFICIAL INTELLIGENCE</h3>
          <h1>AI: A Game-Changer for Small Bussiness Websites</h1>
          <p>August 11,2024 | by Frank Farris</p>
        </div>
      </div>
      <div className="divider" style={{ height: "1px", width: "100vw" }}></div>
      <div className="blog">
        <div>
          <h3>BRAND DESIGN</h3>
          <h1>Typography: The Unsung Hero of Web Design</h1>
          <p>August 5,2024 | by Antje Knott</p>
        </div>
      </div>
      <div className="divider" style={{ height: "1px", width: "100vw" }}></div>
      <div className="blog">
        <div>
          <h3>WEB DESIGN</h3>
          <h1>Future of Web Design: Emerging Technologies</h1>
          <p>July 30,2024 | by Antje Knott</p>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
