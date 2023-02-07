import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import LanguageExp from "./LanguagePage/LanguageExp";
import Projects from "./ProjectsPage/Projects";
import About from "./AboutPage/About";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
const HomePage = () => {
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
