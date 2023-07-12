import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/MuhammadLuthfiI04"
          >
            &nbsp; Muhammad Luthfi Ichsanudin
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
