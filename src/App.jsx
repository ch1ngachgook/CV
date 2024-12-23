import React from "react";
import "./index.css"; 
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header"; 
import About from "./components/About";
import MySkills from "./components/MySkills"; 
import MyWorks from "./components/MyWorks"; 
import Offers from "./components/Offers"; 

const App = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />
      <div className="pt-24 p-8">
        <div className="max-w-6xl mx-auto p-5">
          <Header />
          <About />
          <MySkills />
          <MyWorks />
          <Offers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;