import { BsArrowClockwise, BsHeadset } from "react-icons/bs";
import { GiHandTruck } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import './icons.scss';



export const Icons = () => {


  return (
    <>
      <div className="icons-container">

        <div className="icons">
          <GiHandTruck />
          <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>

        <div className="icons">
          <MdSecurity />
          <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div className="icons">
          <BsArrowClockwise />
          <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>
        <div className="icons">
          <BsHeadset />
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>

      </div>
    </>
  )
}