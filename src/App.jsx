import Background from "./components/background";
import Section from "./components/section";
import ParallaxSection from "./components/parallax-section1";
import Section2 from "./components/section2";
import Clients from "./components/client-section";
import AwardSection from "./components/award-section";
import ParallaxSection2 from "./components/parallax-section-2";
import BlogSection from "./components/blog-section";
import FormSection from "./components/form-section";
import Map from "./components/map";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Background />
      <Section />
      <ParallaxSection />
      <Section2 />
      <Clients />
      <AwardSection />
      <ParallaxSection2 />
      <BlogSection />
      <FormSection />
      <Map />
      <Footer />
    </>
  );
}

export default App;
