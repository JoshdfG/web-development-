import { React, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import people from "../components/data";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className="" id="reviews">
      <div className="text-center my-12">
        <h2 className="font-semibold capitalize tracking-wider text-gray-100 text-2xl">
          our Reviews
          <div className="border-2 rounded-2xl  w-[10%] md:w-[6%] mx-auto mt-2"></div>
        </h2>
      </div>
      <article className="background w-[80%] md:w-[50%] bg-white/20 backdrop-blur-2xl p-4 max-[1120px] mx-auto text-center rounded-2xl text-gray-100">
        <motion.div
          className="mx-auto  w-[150px] h-[150px]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={image}
            hidden:alt={name}
            className="mx-auto h-[70%] w-[70%] md:h-[100%] md:w-[100%] object-cover rounded-full border-4 border-blue-400"
          />
        </motion.div>
        <h4 className="font-bold text-xl capitalize">{name}</h4>
        <p className="uppercase text-blue-400 tracking-wider">{job}</p>
        <p>{text}</p>
        <div className="m-4">
          <button className="mr-4">
            <AiOutlineLeft
              onClick={prevPerson}
              className="text-white text-xl "
            />
          </button>
          <button className="ml-4">
            <AiOutlineRight
              onClick={nextPerson}
              className="text-white text-xl "
            />
          </button>
        </div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {" "}
          <button
            className="border bg-blue-800 border-none p-2 rounded-xl hover:bg-blue-950  hover:border"
            onClick={randomPerson}
          >
            Suprise Me
          </button>
        </motion.div>
      </article>
    </section>
  );
};

export default Reviews;
