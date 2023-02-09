import data from "../../content/data.json";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Body = () => {
  const heroRef = useRef();
  const [intersecting, setIsIntersecting] = useState();

  useEffect(() => {
    //Create new instance of observer
    const observer = new IntersectionObserver((entries) => {
      //Storing entry
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    //Observe element reference
    observer.observe(heroRef.current);
  }, []);
  return (
    <>
      <main className={intersecting ? "layout show" : "layout"}>
        <div className="hero-container" ref={heroRef}>
          <div className="hero">
            <h1 className="hero-header">{data.hero.header}</h1>
            <h3 className="hero-subheader">{data.hero.subheader}</h3>
            <p className="hero-paragraph">{data.hero.paragraph}</p>
          </div>
          <div className="arrow">
            <p className="hero-footer">{data.hero.footer}</p>
            <HiOutlineArrowNarrowDown></HiOutlineArrowNarrowDown>
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
