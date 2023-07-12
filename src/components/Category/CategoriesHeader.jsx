import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="tools-equipment">
              <button onClick={() => handleBtnName("tools and equipment")}>
                Tools and Equipment
              </button>
            </Link>
            <Link to="coffee">
              <button onClick={() => handleBtnName("coffee")}>Coffee</button>
            </Link>
            <Link to="beans">
              <button onClick={() => handleBtnName("beans")}>Beans</button>
            </Link>
            <Link to="others">
              <button onClick={() => handleBtnName("others")}>Others</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
