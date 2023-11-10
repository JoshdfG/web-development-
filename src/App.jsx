import Nav from "./components/Nav";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

import Tab from "./components/tab";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Reviews />
      <Tab />
      <Footer />
    </>
  );
}

export default App;
