import { useState, useEffect } from "react";
import Logoimg from "../assets/logo-1-1.png";
import Button1 from "../Component/Button1";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add 'sticky' class when the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <img src={Logoimg} alt="" className="logo-img" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
                        <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " href="#home-1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Testimonials">
                    Testimonials
                  </a>
                </li>
            
                <li className="nav-item">
                  <a className="nav-link" href="#Screen">
                    Screens
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#FAQs">
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
