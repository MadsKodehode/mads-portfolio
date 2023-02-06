import data from "../content/data.json";
import PokedexImg from "../imgs/PokeDex.png";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const Projects = () => {
  return (
    <>
      <section className="projects">
        <div className="projects-container">
          <div className="projects-left">
            <h1 className="project-header">{data.projekter.header}</h1>
            <ul className="category-list">
              <li className="category-item">{data.projekter.subheader1}</li>
              <li className="category-item">{data.projekter.subheader2}</li>
              <li className="category-item">{data.projekter.subheader3}</li>
            </ul>
            <div className="category-wrap">
              <button className="project-btn">
                <IoMdArrowDropleft></IoMdArrowDropleft>
              </button>
              <h2 className="category">{data.projekter.subheader1}</h2>
              <button className="project-btn">
                <IoMdArrowDropright></IoMdArrowDropright>
              </button>
            </div>
          </div>
          <div className="projects-right">
            <div className="project">
              <h3 className="project-title">{data.projekter.title}</h3>
              <img className="project-img" src={PokedexImg} alt="pokedex"></img>
              <p className="project-desc">{data.projekter.desc}</p>
            </div>
            <div className="project-arrow">
              <HiOutlineArrowNarrowDown></HiOutlineArrowNarrowDown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
