import data from "../../content/data.json";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const Body = () => {
  return (
    <main className="layout">
      <div className="hero-container">
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
  );
};

export default Body;
