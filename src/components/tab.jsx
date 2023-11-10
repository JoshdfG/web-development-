import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

// import "./tab.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section
      className=" w-[80%] md:w-[75%] mx-auto pt-12 text-white/70"
      id="careers"
    >
      <div className=" ">
        <h2 className="capitalize text-center text-pink-300 font-semibold tracking-wider">
          experience
        </h2>
        <div className="border-2 rounded-2xl  w-[10%] md:w-[6%] mx-auto mt-1 mb-5"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className=" text-center">
          {jobs.map((item, index) => {
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileActive={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setValue(index)}
                className={`mx-3 ${index === value && "active-btn"} `}
              >
                {item.company}
              </motion.button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3 className="my-4">{title}</h3>
          <h4 className=" font-semibold tracking-wider mb-4">{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p className="my-4">{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="bg-white/20 p-1 rounded-md hover:bg-pink-200 hover:transition-all hover:ease-in-out hover:duration-100 hover:text-black"
        >
          more info
        </button>
        <motion.div
          className="absolute right-5  text-3xl"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a href="#">
            <BsFillArrowUpCircleFill />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default App;
