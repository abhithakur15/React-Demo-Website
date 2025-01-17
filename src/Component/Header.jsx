import { useState, useEffect } from "react";
import Logoimg from "../assets/logo-1-1.png";
import Button1 from "../Component/Button1";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg ${
            isSticky ? "sticky fadeInDown animated" : ""
          }`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logoimg} alt="Logo" className="logo-img" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavCollapsed ? "" : "show"
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home-1" onClick={closeNavbar}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature" onClick={closeNavbar}>
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing" onClick={closeNavbar}>
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#Testimonials"
                    onClick={closeNavbar}
                  >
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Screen" onClick={closeNavbar}>
                    Screens
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#FAQs" onClick={closeNavbar}>
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <Button1 path="#" name="Download App"></Button1>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
