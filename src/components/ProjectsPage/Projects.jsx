//Text content
import data from "../../content/data.json";
//Projects data
import frontendModel from "../../content/frontendModel.json";
import fullstackModel from "../../content/fullstackModel.json";
import backendModel from "../../content/backendModel.json";
import BulletPoint from "../../imgs/BulletPoint.svg";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const projectsRef = useRef();
  const [intersecting, setIsIntersecting] = useState();

  useEffect(() => {
    //Create new instance of observer
    const observer = new IntersectionObserver((entries) => {
      //Storing entry
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    //Observe element reference
    observer.observe(projectsRef.current);
  }, []);

  //Frontend active
  const [active1, setActive1] = useState(true);
  //Backend active
  const [active2, setActive2] = useState(false);
  //Fullstack active
  const [active3, setActive3] = useState(false);

  //Tracking index
  const [frontendIndex, setFrontendIndex] = useState(0);
  const [backendIndex, setBackendIndex] = useState(0);
  const [fullstackIndex, setFullstackIndex] = useState(0);

  //Frontend project
  const frontendProject = frontendModel[frontendIndex];
  const frontendProjectUrl = frontendModel[frontendIndex].image;

  //Backend projects
  const backendProject = backendModel[backendIndex];
  const backendProjectUrl = backendModel[backendIndex].image;

  //Fullstack project
  const fullstackProject = fullstackModel[fullstackIndex];
  const fullstackProjectUrl = fullstackModel[fullstackIndex].image;

  //Browse through one project at a time
  const browseProjects = () => {
    if (active1) {
      if (frontendIndex === frontendModel.length - 1)
        return setFrontendIndex(0);

      setFrontendIndex((current) => current + 1);
    } else if (active2) {
      if (backendIndex === backendModel.length - 1) return setBackendIndex(0);

      setBackendIndex((current) => current + 1);
    } else if (active3) {
      if (fullstackIndex === fullstackModel.length - 1)
        return setFullstackIndex(0);

      setFullstackIndex((current) => current + 1);
    }
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

  const browseRight = () => {
    if (active1) {
      setActive1(false);
      setActive3(false);

      setActive2(true);
    } else if (active2) {
      setActive1(false);
      setActive2(false);

      setActive3(true);
    } else if (active3) {
      setActive2(false);
      setActive3(false);

      setActive1(true);
    }
  };

  const browseLeft = () => {
    if (active1) {
      setActive1(false);
      setActive2(false);

      setActive3(true);
    } else if (active2) {
      setActive2(false);
      setActive3(false);

      setActive1(true);
    } else if (active3) {
      setActive3(false);
      setActive1(false);

      setActive2(true);
    }
  };

  return (
    <>
      <section
        id="projekter"
        className={intersecting ? "projects show" : "projects"}
      >
        <div className="projects-container">
          <div className="projects-left" ref={projectsRef}>
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
                <IoMdArrowDropleft onClick={browseLeft}></IoMdArrowDropleft>
              </button>
              <h2 className="category">
                {active1
                  ? data.projekter.kategori.frontend
                  : active2
                  ? data.projekter.kategori.backend
                  : active3
                  ? data.projekter.kategori.fullstack
                  : ""}
              </h2>
              <button className="project-btn">
                <IoMdArrowDropright onClick={browseRight}></IoMdArrowDropright>
              </button>
            </div>
          </div>
          <div className="projects-right">
            <div className="project">
              <h3 className="project-title">
                {active1
                  ? frontendProject.title
                  : active2
                  ? backendProject.title
                  : active3
                  ? fullstackProject.title
                  : null}
              </h3>
              <a
                href={
                  active1
                    ? frontendProject.repoUrl
                    : active2
                    ? backendProject.repoUrl
                    : active3
                    ? fullstackProject.repoUrl
                    : null
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img
                  className="project-img"
                  src={require(`../../imgs/${
                    active1
                      ? frontendProjectUrl
                      : active2
                      ? backendProjectUrl
                      : active3
                      ? fullstackProjectUrl
                      : ""
                  }`)}
                  alt="pokedex"
                ></img>
              </a>
              <p className="project-desc">
                {active1
                  ? frontendProject.desc
                  : active2
                  ? backendProject.desc
                  : active3
                  ? fullstackProject.desc
                  : ""}
              </p>
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
