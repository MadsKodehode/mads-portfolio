import data from "../../content/data.json";

import JsLogo from "../../imgs/logos_javascript.svg";
import HtmlLogo from "../../imgs/HTML.svg";
import CssLogo from "../../imgs/CSS.svg";
import ReactLogo from "../../imgs/REACT.svg";
import ExpressLogo from "../../imgs/Vector.svg";
import NodeLogo from "../../imgs/logos_nodejs.svg";
import { useEffect, useRef, useState } from "react";
const LanguageExp = () => {
  const languageRef = useRef();
  const [intersecting, setIsIntersecting] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    //Observe element ref
    observer.observe(languageRef.current);
  }, []);

  return (
    <>
      <section
        id="erfaring"
        className={intersecting ? "languages show" : "languages"}
      >
        <div className="language-container">
          <h1 className="exp-header">{data.språk.header}</h1>
          <div className="language-flex" ref={languageRef}>
            <div className="exp-col">
              <h1 className="language">{data.språk.text1}</h1>
              <img src={JsLogo} alt="javascript"></img>
            </div>
            <div className="exp-col">
              <h1 className="front-header">{data.språk.text2}</h1>
              <div className="logo-flex">
                <img className="exp-logo" src={HtmlLogo} alt="html"></img>
                <img className="exp-logo" src={CssLogo} alt="css"></img>
                <img className="exp-logo" src={ReactLogo} alt="react"></img>
              </div>
            </div>
            <div className="exp-col">
              <h1 className="back-header">{data.språk.text3}</h1>
              <div className="logo-flex">
                <img className="exp-logo" src={ExpressLogo} alt="express"></img>
                <img className="exp-logo" src={NodeLogo} alt="node"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LanguageExp;
