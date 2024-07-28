import {useState} from "react";

import "./cssFiles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import SkillgLogo from "./assets/SkillgLogoWhite.png";

function Header() {


    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    LOGO
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <GiHamburgerMenu />
                </div>
                <div className={`nav-elements  ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Our Programs</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <button className="book-demo-btn">Free Session</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

