import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './Body.css'
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import star1 from "../images/star1.png"
import star2 from "../images/star2.png"
import star3 from "../images/star3.png"
import compare from "../images/compare.png"
import qty from "../images/qty.png"
import twitter from "../images/twitter.png"
import insta from "../images/insta.png"
import fb from "../images/fb.png"
import youtube from "../images/youtube.png"
import rating from "../images/rating.png"
import { Card, Button } from 'react-bootstrap'
import bluecart from "../images/bluecart.png"
import box from "../images/box.png"
import delivery from "../images/delivery.png"
import shipping from "../images/shipping.png"
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import slide5 from "../images/slide5.png"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Body() {
    return (
        <div style={{ marginLeft: "20px" }}><Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                category
            </Breadcrumb.Item>
            <Breadcrumb.Item active>subcategory</Breadcrumb.Item>
        </Breadcrumb>


            <div className="main mt-5">
                <div className="main_top row">
                    <div className="main_top_left col-lg-4 col-md-4 ">
                        <div style={{ marginLeft: "30px" }}>
                            <img className="avatar image" src={image1} alt="image1" />
                        </div>
                        <div>
                            <div className="img2"><img className="avatar image" src={image2} alt="image2" /></div>
                            <div className="imag"><img className="avatar image" src={image3} alt="image3" /></div>
                            <div className="imag"><img className="avatar image" src={image4} alt="image4" /></div>
                        </div>
                    </div>
                    <div className="main_top_middle col-lg-5 col-md-4" >
                        <h2 style={{ text: "bold", color: 'black' }}><strong>Brake Pads</strong></h2>
                        <div className="star"><img className="avatar image" src={star1} alt="star1" /></div>
                        <div className="star"><img className="avatar image" src={star1} alt="star1" /></div>
                        <div className="star"><img className="avatar image" src={star1} alt="star1" /></div>
                        <div className="star"><img className="avatar image" src={star2} alt="star2" /></div>
                        <div className="star"><img className="avatar image" src={star3} alt="star3" /></div>
                        <a href="#" className="reviews" > 1085 Reviews | 856 answered questions</a><br /><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sem a nisl auctor laoreet. </p>
                        <a href="#" className="tag"> more details</a><br />
                        <strong>$ 87.00    </strong>    Free shippping <img className="avatar image ms-5" src={compare} alt="compare" /><a href="#" style={{ textDecoration: "none", marginLeft: "10px" }}>Add to Compare</a>
                        <h6 style={{ marginTop: "20px" }}>Qty</h6><img className="avatar image" src={qty} alt="qty" style={{ marginTop: "-55px", marginLeft: "50px" }} /><br />
                        <button type="submit" className="button1">Add to Cart</button><button type="submit" className="button2">BUY Now</button><br /><br />
                        <strong>Share</strong>
                        <div className="icon">
                            <div className="star"><img className="avatar image" src={fb} alt="fb" /></div>
                            <div className="star"><img className="avatar image" src={twitter} alt="twitter" /></div>
                            <div className="star"><img className="avatar image" src={insta} alt="insta" /></div>
                            <div className="star"><img className="avatar image" src={youtube} alt="youtube" /></div>
                        </div><br /><br />
                        <strong>Sold By</strong><a href="#" className="tag">  Seller One</a><br />
                        Seller rating <img className="avatar image" src={rating} alt="rating" /> 4/5 (on 852 sales)<br />
                        <a href="#" className="tag">  Seller Information</a><br />
                        <strong>Product Details:</strong>
                        <ol>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                            <li>Proin nec sem a nisl auctor laoreet.</li>
                            <li>Phasellus et rutrum magna. Nullam ut accumsan.</li>
                        </ol>
                    </div>
                    <div className="main_top_right col-lg-3 col-md-4" style={{ float: "left" }}>
                        <Card className="text-center w-75">
                            <Card.Header><strong>More Buying Options</strong></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div><a href="#" className="tag">Seller Two   </a><strong>  $88.00 </strong>  <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                        <h6>Free Shipping (standard)</h6></div>
                                    <div><a href="#" className="tag">Seller Three  </a> <strong> $85.00 </strong> <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                        <h6> Shipping $3.99(Express)</h6></div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted"><a href="#" className="tag">4 offers starting at $85.00</a></Card.Footer>
                        </Card><br /><br />

                        <img className="avatar image" src={box} alt="box" /> Free Shipping: Delivered by 14 Oct<br /><br />
                        <img className="avatar image" src={shipping} alt="shipping" />Express Shipping: Delivered by 11 Oct  Select Express<br /><br />
                        <img className="avatar image" src={delivery} alt="delivery" />Buy for $800.00 from this seller to avail 10% discount.<br />

                    </div>
                </div>
                <div className="main_bottom">
                    <h6 className="ms-2">Recommended Products</h6><br /><br />
                    <div className="row slide">
                    <ArrowBackIosIcon/>
                        <div className="slider col-lg-2 col-md-2"> <ArrowBackIosIcon/>
                            <Card >
                                <Card.Img variant="top" src={slide1} alt="slide1" />
                                <Card.Body>
                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        WDE584269<br />
                                        $54.52
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className=" slider col-lg-2 col-md-2">
                            <Card >
                                <Card.Img variant="top" src={slide2} alt="slide2" />
                                <Card.Body>
                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        RFG847125<br />
                                        $14.25
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="slider col-lg-2 col-md-2">
                            <Card >
                                <Card.Img variant="top" src={slide3} alt="slide3" />
                                <Card.Body>
                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        WSQ746864<br />
                                        $21.05
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="slider col-lg-2 col-md-2">
                            <Card >
                                <Card.Img variant="top" src={slide4} alt="slide4" />
                                <Card.Body>
                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        YHG547356<br />
                                        $32.54
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="slider col-lg-2 col-md-2"><ArrowForwardIosIcon/>
                            <Card >
                                <Card.Img variant="top" src={slide5} alt="slide5" />
                                <Card.Body>
                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        TSG854136<br />
                                        $87.65
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Body