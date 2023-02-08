import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import LanguageExp from "./LanguagePage/LanguageExp";
import Projects from "./ProjectsPage/Projects";
import About from "./AboutPage/About";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const HomePage = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <LanguageExp></LanguageExp>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
