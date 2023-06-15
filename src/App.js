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
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }

  }

  return (
    <>
    <div className="App ">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />  
      <main>{render()}</main>
      
    </div>
    <div>
    <Footer/>
    </div>
    </>
    
  );
}

export default App;
