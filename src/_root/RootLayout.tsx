import { Outlet, Link, useLocation } from "react-router-dom"

const RootLayout = () => {
  const location = useLocation();
  return (
    <div>
      <div className="wrapper">
        {/* Top Bar Start */}
        <div className="top-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="logo">
                  <a href="index.html">
                    <h1>Builderz</h1>
                    {/* <!-- <img src="img/logo.jpg" alt="Logo"> --> */}
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-7 d-none d-lg-block">
                <div className="row">
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-calendar"></i>
                      </div>
                      <div className="top-bar-text">
                        <h3>Opening Hour</h3>
                        <p>Mon - Fri, 8:00 - 9:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-call"></i>
                      </div>
                      <div className="top-bar-text">
                        <h3>Call Us</h3>
                        <p>+012 345 6789</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="top-bar-item">
                      <div className="top-bar-icon">
                        <i className="flaticon-send-mail"></i>
                      </div>
                      <div className="top-bar-text">
                        <h3>Email Us</h3>
                        <p>info@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Top Bar End --> */}

        {/* <!-- Nav Bar Start --> */}
        <div className="nav-bar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
              <a href="#" className="navbar-brand">MENU</a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto">
                  <Link to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                  <Link to="/about" className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
                  <Link to="/service" className={`nav-item nav-link ${location.pathname === "/service" ? "active" : ""}`}>Service</Link>
                  <Link to="/team" className={`nav-item nav-link ${location.pathname === "/team" ? "active" : ""}`}>Team</Link>
                  <Link to="/portfolio" className={`nav-item nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}>Portfolio</Link>
                  {/* <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="team.html" className="nav-item nav-link">Team</a>
                <a href="portfolio.html" className="nav-item nav-link">Project</a> */}
                  <div className="nav-item dropdown">
                    <a href="#" className={`nav-link dropdown-toggle ${location.pathname === "/blog" || location.pathname === "/single" ? "active" : ""}`} data-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu">
                      <Link to="/blog" className="dropdown-item">Blog</Link>
                      <Link to="/single" className="dropdown-item">single</Link>
                      {/* <a href="blog.html" className="dropdown-item">Blog Page</a>
                    <a href="single.html" className="dropdown-item">Single Page</a> */}
                    </div>
                  </div>
                  <Link to="/contact" className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                  {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                </div>
                <div className="ml-auto">
                  <a className="btn" href="#">Get A Quote</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- Nav Bar End --> */}
      </div>


      <div className="wrapper">
        <Outlet />
      </div>


      <div className="wrapper">
        {/* <!-- Footer Start --> */}
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="footer-contact">
                  <h2>Office Contact</h2>
                  <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                  <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                  <p><i className="fa fa-envelope"></i>info@example.com</p>
                  <div className="footer-social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-link">
                  <h2>Services Areas</h2>
                  <a href="">Building Construction</a>
                  <a href="">House Renovation</a>
                  <a href="">Architecture Design</a>
                  <a href="">Interior Design</a>
                  <a href="">Painting</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-link">
                  <h2>Useful Pages</h2>
                  <a href="">About Us</a>
                  <a href="">Contact Us</a>
                  <a href="">Our Team</a>
                  <a href="">Projects</a>
                  <a href="">Testimonial</a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="newsletter">
                  <h2>Newsletter</h2>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                  </p>
                  <div className="form">
                    <input className="form-control" placeholder="Email here" />
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-menu">
            <div className="f-menu">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
          <div className="container copyright">
            <div className="row">
              <div className="col-md-6">
                <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
              </div>
              <div className="col-md-6">
                <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      </div>
    </div>
  )
}

export default RootLayout