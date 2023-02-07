import data from "../../content/data.json";
import frontendModel from "../../content/frontendModel.json";
import PokedexImg from "../../imgs/PokeDex.png";
import BulletPoint from "../../imgs/BulletPoint.svg";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { useState } from "react";

const Projects = () => {
  //Frontend active
  const [active1, setActive1] = useState(true);
  //Backend active
  const [active2, setActive2] = useState(false);
  //Fullstack active
  const [active3, setActive3] = useState(false);
  //Tracking index
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState([]);

  const project = frontendModel[index];
  const projectUrl = frontendModel[index].image;
  //Browse through one project at a time
  const browseProjects = () => {
    if (index === frontendModel.length - 1) return setIndex(0);
    setIndex((current) => current + 1);
  };

  //Toggle category function
  const toggleCategory = (category) => {
    switch (category) {
      case "frontend":
        setActive2(false);
        setActive3(false);

        //Toggle frontend
        setActive1(true);
        break;

      case "backend":
        setActive1(false);
        setActive3(false);

        //Toggle backend
        setActive2(true);
        break;
      case "fullstack":
        setActive1(false);
        setActive2(false);

        //Toggle fullstack
        setActive3(true);
        break;

      default:
        category = "frontend";
    }
  };

  return (
    <>
      <section className="projects">
        <div className="projects-container">
          <div className="projects-left">
            <h1 className="project-header">{data.projekter.header}</h1>
            <ul className="category-list">
              <button
                className={active1 ? "active" : "category-btn"}
                onClick={() => toggleCategory("frontend")}
              >
                <span className="item-span">
                  {data.projekter.kategori.frontend}
                  <img src={BulletPoint} alt="bullet"></img>
                </span>
              </button>
              <button
                className={active2 ? "active" : "category-btn"}
                onClick={() => toggleCategory("backend")}
              >
                <span className="item-span">
                  {data.projekter.kategori.backend}
                  <img src={BulletPoint} alt="bullet"></img>
                </span>
              </button>
              <button
                className={active3 ? "active" : "category-btn"}
                onClick={() => toggleCategory("fullstack")}
              >
                <span className="item-span">
                  {data.projekter.kategori.fullstack}
                  <img src={BulletPoint} alt="bullet"></img>
                </span>
              </button>
            </ul>
            <div className="category-wrap">
              <button className="project-btn">
                <IoMdArrowDropleft></IoMdArrowDropleft>
              </button>
              <h2 className="category">{data.projekter.kategori.frontend}</h2>
              <button className="project-btn">
                <IoMdArrowDropright></IoMdArrowDropright>
              </button>
            </div>
          </div>
          <div className="projects-right">
            <div className="project">
              <h3 className="project-title">{project.title}</h3>
              <img
                className="project-img"
                src={require(`../../imgs/${projectUrl}`)}
                alt="pokedex"
              ></img>
              <p className="project-desc">{project.desc}</p>
            </div>
            <div className="project-arrow">
              <HiOutlineArrowNarrowDown
                onClick={browseProjects}
              ></HiOutlineArrowNarrowDown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
