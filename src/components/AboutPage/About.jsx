import data from "../../content/data.json";
import MadsImg from "../../imgs/MadsiTrappen.JPG";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const About = () => {
  const aboutRef = useRef();
  const [intersecting, setIsIntersecting] = useState();

  useEffect(() => {
    //Create new instance of observer
    const observer = new IntersectionObserver((entries) => {
      //Storing entry
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    //Observe element reference
    observer.observe(aboutRef.current);
  }, []);
  return (
    <section id="om" className={intersecting ? "about show" : "about"}>
      <div className="about-container">
        <h1 className="about-header">{data.om.header}</h1>
        <div className="about-flex-left" ref={aboutRef}>
          <div className="img-wrapper">
            <img className="about-img" src={MadsImg} alt="mads"></img>
          </div>
          <div className="about-btns">
            <Link className="contact" to="kontakt">
              KONTAKT MEG
            </Link>
          </div>
        </div>
        <div className="about-flex-right">
          <h1 className="about-header-desktop">{data.om.header}</h1>
          <div className="text-wrapper">
            <h5 className="about-subheader">{data.om.subheader}</h5>
            <p className="about-body">{data.om.body}</p>
            <p className="about-footer">{data.om.footer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
