import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import About from "./pages/About";
import Skills from "./pages/Skills";
import {Routes, Route } from "react-router";
import ProjectDetails from "./pages/ProjectDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./pages/ScrollToTop";
import Timeline from "./components/Timeline";


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/timeline" element={<Timeline/>} />
        </Routes>
        <ScrollToTop/>
        <Footer/>
        <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;
