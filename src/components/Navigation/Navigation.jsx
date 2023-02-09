import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState();
  return (
    <nav className="navigation">
      <div className="clip-bg">
        <ul className="nav-links">
          <li>
            <Link className="link" to="#erfaring">
              Erfaringer
            </Link>
          </li>
          <li>
            <Link className="link" to="#projekter">
              Projekter
            </Link>
          </li>
          <li>
            <Link className="link" to="#om">
              Om meg
            </Link>
          </li>
          <li>
            <Link className="link" to="kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
