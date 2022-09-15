import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">
              <FaArrowRight /> home{" "}
            </a>
            <a href="#featured">
              {" "}
              <FaArrowRight /> featured{" "}
            </a>
            <a href="#review">
              {" "}
              <FaArrowRight /> reviews{" "}
            </a>
            <a href="#blogs">
              <FaArrowRight /> blogs{" "}
            </a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">
              {" "}
              <FaArrowRight /> account info{" "}
            </a>
            <a href="#">
              {" "}
              <FaArrowRight /> ordered items{" "}
            </a>
            <a href="#">
              <FaArrowRight /> privacy policy{" "}
            </a>
            <a href="#">
              <FaArrowRight /> payment method{" "}
            </a>
            <a href="#">
              {" "}
              <FaArrowRight /> our serivces{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              <FaPhone /> +123-456-7890{" "}
            </a>
            <a href="#">
              <FaPhone /> +111-222-3333{" "}
            </a>
          </div>
        </div>

        <div className="share">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>

        <div className="credit">&#169; Wallas5h</div>
      </section>
    </>
  );
};
