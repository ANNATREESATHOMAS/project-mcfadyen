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
    <div className="footer">
      <div className="row">
        <div className=" foot col-lg-3 col-md-3">

          <LocalPhoneOutlinedIcon />1800 420 0707<br/>
          <AlternateEmailOutlinedIcon />customercare@company.com<br/>
          <LocationOnOutlinedIcon />Address line 1Address line 2<br/><br/><br/>
          <strong className="title">PAYMENT METHODS</strong><br/><br/>
          <img className="avatar image" src={image11} alt="image11" />
          <img className="avatar image" src={image12} alt="image12" />
          <img className="avatar image" src={image13} alt="image13" />
          <img className="avatar image" src={image14} alt="image14" />
          <img className="avatar image" src={image15} alt="image15" />

        </div>
        <div className=" foot col-lg-3 col-md-3">
         <strong className="title"> COMPANY</strong><br/>
          <h6>About Us</h6>
          Sell With Us<br/>
          Our Sellers<br/>
        </div>
        <div className=" foot col-lg-3 col-md-3">
         <strong className="title"> INFORMATION</strong><br/>
          Privacy Policy<br/>
          Exchange and Returns Policy<br/>
          Terms and conditions<br/>
          Common questions<br/>

        </div>
        
        <div className="foot col-lg-3 col-md-3">
         <strong className="title"> SUBSCRIBE NEWSLETTER</strong><br/><br/>
          <input type="text" placeholder="Enter your email address"></input>
          <button type="submit" >Submit</button><br/><br/>
          <img className="avatar image" src={fb2} alt="fb2" />
          <img className="avatar image" src={youtube2} alt="youtube2" />
          <img className="avatar image" src={linkedin2} alt="linkedin2" />
          <img className="avatar image" src={twitter2} alt="twitter2" />


        </div>
      </div>
      <hr/><h5>Copyrights © 2021 Company Ltd. All rights reserved.</h5>
    </div>
  )
}

export default Footer