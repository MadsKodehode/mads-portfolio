import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Contact = () => {
  const contactRef = useRef();
  const [intersecting, setIsIntersecting] = useState();

  useEffect(() => {
    //Create new instance of observer
    const observer = new IntersectionObserver((entries) => {
      //Storing entry
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    //Observe element reference
    observer.observe(contactRef.current);
  }, []);
  return (
    <section id="kontakt" className={intersecting ? "kontakt show" : "kontakt"}>
      <div className="contact-container">
        <Link className="hjem" to="/">
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
        </Link>
        <h1 className="contact-header">KONTAKT MEG</h1>

        <form className="form" ref={contactRef}>
          <label>NAVN</label>
          <input type="text" name="user_name" />
          <label>EPOST</label>
          <input type="email" name="user_email" />
          <label>MELDING</label>
          <textarea name="message" />
          <input className="send-btn" type="submit" value="SEND" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
