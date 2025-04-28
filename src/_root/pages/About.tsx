
const About = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">About Us</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- About Start --> */}
      <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src="img/about.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Welcome to Builderz</p>
                <h2>25 Years Experience</h2>
              </div>
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                </p>
                <a className="btn" href="">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}


      {/* <!-- Fact Start --> */}
      <div className="fact">
        <div className="container-fluid">
          <div className="row counters">
            <div className="col-md-6 fact-left wow slideInLeft">
              <div className="row">
                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-worker"></i>
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">109</h2>
                    <p>Expert Workers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-building"></i>
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">485</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 fact-right wow slideInRight">
              <div className="row">
                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-address"></i>
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">789</h2>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fact-icon">
                    <i className="flaticon-crane"></i>
                  </div>
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">890</h2>
                    <p>Running Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fact End --> */}


      {/* <!-- FAQs Start --> */}
      <div className="faqs">
        <div className="container">
          <div className="section-header text-center">
            <p>Frequently Asked Question</p>
            <h2>You May Ask</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div id="accordion-1">
                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div id="accordion-2">
                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                  <div className="card-header">
                    <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                      Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQs End --> */}
    </>
  )
}

export default About