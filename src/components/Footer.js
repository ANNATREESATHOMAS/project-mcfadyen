import React from 'react'
import './Footer.css'
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import image11 from "../images/image11.png"
import image12 from "../images/image12.png"
import image13 from "../images/image13.png"
import image14 from "../images/image14.png"
import image15 from "../images/image15.png"
import fb2 from "../images/fb2.png"
import youtube2 from "../images/youtube2.png"
import linkedin2 from "../images/linkedin2.png"
import twitter2 from "../images/twitter2.png"
function Footer() {
  return (
    <div className="containerFluid">
      <div className="footer ">
        <div className="row">
          <div className=" foot col-lg-3 col-md-3">
            <strong className="title"> CONTACT</strong><br />
            <LocalPhoneOutlinedIcon className="fs-6" /> {''} {''}1800 420 0707<br />
            <AlternateEmailOutlinedIcon className="fs-6" />  {''}{''}customercare@company.com<br />
            <LocationOnOutlinedIcon className="fs-6" />  {''}{''}Address line 1Address line 2<br /><br />
            <div className="box" id="box8">
              <img className="avatar image" src={fb2} alt="fb2" />
              <img className="avatar image image12" src={youtube2} alt="youtube2" />
              <img className="avatar image image12" src={linkedin2} alt="linkedin2" />
              <img className="avatar image image12" src={twitter2} alt="twitter2" />
            </div>
            <div className="box" id="box7">
              <strong className="title">PAYMENT METHODS</strong><br /><br />
              <img className="avatar image1" src={image11} alt="image11" />
              <img className="avatar image1 image12" src={image12} alt="image12" />
              <img className="avatar image1 image12" src={image13} alt="image13" />
              <img className="avatar image1 image12" src={image14} alt="image14" />
              <img className="avatar image1 image12" src={image15} alt="image15" />
            </div>
          </div>

          <div className=" foot col-lg-3 col-md-3">
            <strong className="title"> COMPANY</strong><br />
            <h6>About Us</h6>
            Sell With Us<br />
            Our Sellers<br />
          </div>
          <div className=" foot col-lg-3 col-md-3">
            <strong className="title"> INFORMATION</strong><br />
            Privacy Policy<br />
            Exchange and Returns Policy<br />
            Terms and conditions<br />
            Common questions<br />
          </div>

          <div className="foot col-lg-3 col-md-3">
            <div className="box" id="box7">
              <strong className="title"> SUBSCRIBE NEWSLETTER</strong><br />
              <input type="text" placeholder="Enter your email address"></input>
              <button type="submit" >Submit</button><br /><br /><br />
            </div>
            <div className="box" id="box7">
              <img className="avatar image" src={fb2} alt="fb2" />
              <img className="avatar image image12" src={youtube2} alt="youtube2" />
              <img className="avatar image image12" src={linkedin2} alt="linkedin2" />
              <img className="avatar image image12" src={twitter2} alt="twitter2" />
            </div>
            <div className="box" id="box8">
              <strong className="title">PAYMENT METHODS</strong><br />
              <img className="avatar image1" src={image11} alt="image11" />
              <img className="avatar image1 image12" src={image12} alt="image12" />
              <img className="avatar image1 image12" src={image13} alt="image13" />
              <img className="avatar image1 image12" src={image14} alt="image14" />
              <img className="avatar image1 image12" src={image15} alt="image15" />
            </div>
          </div>
        </div>
        <hr />
        <h5>Copyrights © 2021 Company Ltd. All rights reserved.</h5>
      </div>
    </div>
  )
}

export default Footer