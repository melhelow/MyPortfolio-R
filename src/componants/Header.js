import Navbar from "./Navbar";

function Header(props) {
  return (
    <>
      <Navbar 
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
      {/* <div className="header-left"><h1>Mohamed Elhelw</h1></div>

        <div className="header-right">
    
      <p href="#about-me">About me</p>
      <p href="#work">Work</p>
      <p href="#contact-me">Contact</p>
        </div> */}
    </>
  );
}

export default Header;
