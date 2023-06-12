import Navbar from "./Navbar";

function Header(props) {
  return (
    <>
      <Navbar 
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
      
    </>
  );
}

export default Header;
