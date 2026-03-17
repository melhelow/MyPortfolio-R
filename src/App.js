import { useState } from "react";
import Header from "./componants/Header";
import About from "./componants/About";
import Work from "./componants/Work";
import Resume from "./componants/Resume";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  function render() {
    if (currentPage === "About")   return <About setCurrentPage={setCurrentPage} />;
    if (currentPage === "Work")    return <Work />;
    if (currentPage === "Contact") return <Contact />;
    if (currentPage === "Resume")  return <Resume />;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{render()}</main>
      <Footer />
    </div>
  );
}

export default App;
