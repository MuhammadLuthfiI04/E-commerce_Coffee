import "../Header/Header.css";
import Main1 from "../../img/Header/1.jpg";
import Main2 from "../../img/Header/2.jpg";
import Main3 from "../../img/Header/3.jpg";
import Main4 from "../../img/Header/4.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/tools-equipment">
                <div id="img1" className="lil-overlay"></div>
                <img src={Main1} alt="img1" />
                <p className="main-description">Tools and Equipment</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/coffee">
                <div id="img2" className="lil-overlay"></div>
                <img src={Main2} alt="img2" />
                <p className="main-description">Coffee</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/beans">
                <div id="img3" className="lil-overlay"></div>
                <img src={Main3} alt="img3" />
                <p className="main-description">Beans</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/others">
                <div id="img4" className="lil-overlay"></div>
                <img src={Main4} alt="img4" />
                <p className="main-description">Others</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
