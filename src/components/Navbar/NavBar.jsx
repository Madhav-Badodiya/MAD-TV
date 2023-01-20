import { Link } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__nav">
          <h3 className="navbar__brand">
            <Link to="/">
              <LiveTvIcon /> MAD TV
            </Link>
          </h3>
          <ul>
            <li className="links__link">
              <Link to="/">Home</Link>
            </li>
            <li className="links__link">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
