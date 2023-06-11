import { useState } from "react";
import "./App.css";
import Header from "./componants/Header";
import About from "./componants/About";
import Work from "./componants/Work";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  function render() {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
  }

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>{render()}</main>
    </div>
  );
}

export default App;
