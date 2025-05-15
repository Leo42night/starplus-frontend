import ServiceComponent from "../../components/ServiceComponent";
import FaqComponent from "../../components/FaqComponent";

const Service = () => {
  
  return (
    <>
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

      <ServiceComponent />

      <FaqComponent />
    </>
  );
};

export default Service;
