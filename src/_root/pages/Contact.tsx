
const Contact = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- Contact Start --> */}
      <div className="contact wow fadeInUp">
        <div className="container mx-auto">
          <div className="section-header text-center">
            <p>Get In Touch</p>
            <h2>For Any Query</h2>
          </div>
          <div className="flex">
            <div className="flex-1 bg-[#030f27] px-4 py-8">
              <div className="contact-info">
                <div className="contact-item">
                  <i className="flaticon-address"></i>
                  <div className="contact-text">
                    <h2>Location</h2>
                    <p>123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="flaticon-call"></i>
                  <div className="contact-text">
                    <h2>Phone</h2>
                    <p>+012 345 67890</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="flaticon-send-mail"></i>
                  <div className="contact-text">
                    <h2>Email</h2>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#fdbe33] px-4 py-8">
              <div className="contact-form">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm" noValidate className="flex flex-col gap-4">
                  <div className="control-group">
                    <input type="text" className="form-control w-full p-2" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control w-full  p-2" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input type="text" className="form-control w-full  p-2" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea className="form-control w-full  p-2" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  )
}

export default Contact