import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-navbar">
        <h3 className="logo">GHANNSTORE</h3>
        <ul className="nav-category">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
        <div className="nav-others">
          <div className="search-bar-container">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
            />
            <div className="seach-bar">Search</div>
          </div>

          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#000000" }}
            size="xl"
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            style={{ color: "#030303" }}
            size="xl"
          />
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#000000" }}
            size="xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
