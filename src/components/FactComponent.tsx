import { useEffect, useState } from "react";
import { FaBuilding, FaHardHat, FaIndustry, FaMapMarkedAlt } from "react-icons/fa";

export default function FactComponent() {
  const [expertWorkers, setExpertWorkers] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [runningProjects, setRunningProjects] = useState(0);

  useEffect(() => {
    // Animasi angka untuk Expert Workers
    let count = 0;
    const interval1 = setInterval(() => {
      if (count < 109) {
        count++;
        setExpertWorkers(count);
      } else {
        clearInterval(interval1);
      }
    }, 10);

    // Animasi angka untuk Happy Clients
    count = 0;
    const interval2 = setInterval(() => {
      if (count < 485) {
        count++;
        setHappyClients(count);
      } else {
        clearInterval(interval2);
      }
    }, 10);

    // Animasi angka untuk Completed Projects
    count = 0;
    const interval3 = setInterval(() => {
      if (count < 789) {
        count++;
        setCompletedProjects(count);
      } else {
        clearInterval(interval3);
      }
    }, 10);

    // Animasi angka untuk Running Projects
    count = 0;
    const interval4 = setInterval(() => {
      if (count < 890) {
        count++;
        setRunningProjects(count);
      } else {
        clearInterval(interval4);
      }
    }, 10);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div className="fact-section">
      <div className="fact-container">
        {/* Left */}
        <div className="fact-left">
          <div className="fact-grid">
            <div className="fact-item">
              <div className="fact-icon">
                <FaHardHat />
              </div>
              <div className="fact-text">
                <h2>{expertWorkers}</h2>
                <p>Expert Workers</p>
              </div>
            </div>
            <div className="fact-item">
              <div className="fact-icon">
                <FaBuilding />
              </div>
              <div className="fact-text">
                <h2>{happyClients}</h2>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="fact-right">
          <div className="fact-grid">
            <div className="fact-item">
              <div className="fact-icon">
                <FaMapMarkedAlt />
              </div>
              <div className="fact-text">
                <h2>{completedProjects}</h2>
                <p>Completed Projects</p>
              </div>
            </div>
            <div className="fact-item">
              <div className="fact-icon">
                <FaIndustry />
              </div>
              <div className="fact-text">
                <h2>{runningProjects}</h2>
                <p>Running Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}