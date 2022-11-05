import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Services";

function App() {

  useEffect(() => {
  document.title = "Bytehub+"; }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
