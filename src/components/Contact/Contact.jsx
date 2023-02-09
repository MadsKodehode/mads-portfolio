import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Outlet } from "react-router-dom";
const Contact = () => {
  const [intersecting, setIsIntersecting] = useState();

  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xma214",
        "template_pva2l29",
        form.current,
        "SNXjOSIOviO_38IuY"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result) {
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const entry2 = entries[1];
      setIsIntersecting(entry.isIntersecting);
    });
    if (form.current) {
      observer.observe(form.current);
    }
  }, []);
  return sent ? (
    <>
      <div className="sendt-container">
        <h1 className="sendt">TAKK! DU VIL BLI KONTAKTET SNART.</h1>
      </div>
    </>
  ) : (
    <>
      <section
        id="kontakt"
        className={intersecting ? "kontakt show" : "kontakt"}
      >
        <div className="contact-container">
          <Link className="hjem" to="/">
            <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
          </Link>

          <h1 className="contact-header">KONTAKT MEG</h1>

          <form className="form" ref={form} onSubmit={sendEmail}>
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
    </>
  );
};

export default Contact;
