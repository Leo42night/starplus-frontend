import services from "../../data/services";

const Service = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Our Services</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- Service Start --> */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Services</p>
            <h2>We Provide Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-1.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Building Construction</h3>
                  <a className="btn" href="img/service-1.jpg" data-lightbox="service">+</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-2.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>House Renovation</h3>
                  <a className="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-3.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Architecture Design</h3>
                  <a className="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-4.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Interior Design</h3>
                  <a className="btn" href="img/service-4.jpg" data-lightbox="service">+</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-5.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Fixing & Support</h3>
                  <a className="btn" href="img/service-5.jpg" data-lightbox="service">+</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-6.jpg" alt="Image" />
                  <div className="service-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                    </p>
                  </div>
                </div>
                <div className="service-text">
                  <h3>Painting</h3>
                  <a className="btn" href="img/service-6.jpg" data-lightbox="service">+</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}


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

export default Service