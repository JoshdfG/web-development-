import React from "react";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  // const handleMenu = () => {
  //   setOpen((prev) => !prev);
  // };
  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    });
  });
  return (
    <header className=" relative bg-black/20 z-[999] backdrop-blur-2xl py-4 shadow-lg ">
      <nav className="flex justify-between items-center w-[95%] md:w-[90%]  mx-auto p-1 my-auto ">
        <div className="font-bold text-3xl text-blue-500 ">
          Z_<span className="text-blue-900 ">Breed.</span>
        </div>

        <div className="text-white/80">
          {" "}
          <ul className="hidden md:flex space-x-6 ">
            {" "}
            <motion.li
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a className="hover:text-blue-400 " href="#">
                Home
              </a>
            </motion.li>{" "}
            <motion.li
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a className="hover:text-blue-400 " href="#pricing">
                Info
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a className="hover:text-blue-400  " href="#reviews">
                Reviews
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a className="hover:text-blue-400 " href="#about">
                About Us
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a className="hover:text-blue-400 " href="#careers">
                Careers
              </a>
            </motion.li>
            <motion.button
              className="bg-blue-900 px-3 py-1 rounded-2xl text-white mr-6 hover:bg-blue-400 "
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get Started
            </motion.button>
          </ul>
          <div className="flex">
            <div>
              {" "}
              <motion.button
                className="bg-blue-900 px-3 py-1 rounded-2xl text-white mr-2 hover:bg-blue-400 md:hidden"
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get Started
              </motion.button>
            </div>{" "}
            <motion.button
              className="border-none"
              type=""
              onClick={() => setOpen(!open)}
              whileHover={{ scale: 1.1, originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <span className="sr-only">open menu</span> */}
              {open === true ? (
                <FaTimes className="text-2xl cursor-pointer text-blue-300 transition-all duration-500 ease-in-out border-none md:hidden  " />
              ) : (
                <TiThMenu className="text-2xl text-blue-300 border-none cursor-pointer md:hidden" />
              )}
            </motion.button>
          </div>
        </div>
        {/* mobile menu */}
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            ref={menuRef}
            className="navbar 
           md:hidden absolute left-0 right-0 mt-3 bg-gray-950 backdrop-blur-2xl text-center rounded-b-2xl p-6 z-[999] text-white/80"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: "0",
            }}
            exit={{
              opacity: 0,
              y: "-100%",
              zIndex: "-1",
              transition: { duration: "0.25" },
            }}
            transition={{ type: "string", stiffness: "300", duration: "0.55" }}
          >
            <ul className="text-center md:hidden space-y-6 font-semibold ">
              <motion.li
                onClick={() => setOpen(false)}
                className=" hover:text-blue-400 hover:rounded-lg p-1 ease-in-out"
                whileHover={{ scale: 1.03, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  className="  hover:border-b-2 hover:border-blue-400 tracking-wider "
                  href="#"
                >
                  Home
                </a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(false)}
                className="  hover:text-blue-400 hover:rounded-lg p-1 ease-in-out"
                whileHover={{ scale: 1.03, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  className=" hover:border-b-2 hover:border-blue-400 tracking-wider"
                  href="#pricing"
                >
                  Info
                </a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(false)}
                className=" hover:text-blue-400 hover:rounded-lg p-1 ease-in-out"
                whileHover={{ scale: 1.03, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  className=" hover:border-b-2 hover:border-blue-400 tracking-wider"
                  href="#reviews"
                >
                  Reviews
                </a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(false)}
                className="hover:text-blue-400 hover:rounded-lg p-1 ease-in-out"
                whileHover={{ scale: 1.03, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  className=" hover:border-b-2 hover:border-blue-400 tracking-wider"
                  href="#about"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li
                onClick={() => setOpen(false)}
                className="hover:text-blue-400 hover:rounded-lg p-1 ease-in-out"
                whileHover={{ scale: 1.03, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  className=" hover:border-b-2 hover:border-blue-400 tracking-wider"
                  href="#careers"
                >
                  Careers
                </a>
              </motion.li>{" "}
            </ul>
          </motion.div>
        ) : null}{" "}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
