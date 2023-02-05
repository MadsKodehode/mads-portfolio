import data from "../content/data.json";
import MadsImg from "../imgs/MadsiTrappen.JPG";
const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-header">{data.om.header}</h1>
        <div className="about-flex-left">
          <div className="img-wrapper">
            <img className="about-img" src={MadsImg} alt="mads"></img>
          </div>
          <div className="about-btns">
            <button className="contact">KONTAKT</button>
            <button className="readmore">LES MER</button>
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