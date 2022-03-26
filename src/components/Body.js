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
import { Card, Carousel } from 'react-bootstrap'
import bluecart from "../images/bluecart.png"
import box from "../images/box.png"
import delivery from "../images/delivery.png"
import shipping from "../images/shipping.png"
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import slide5 from "../images/slide5.png"
function Body() {
    return (
        <div className="containerFluid">
            <div className="ms-4">
                <Breadcrumb >
                    <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                        category
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>subcategory</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="main mt-5">
                <div className="main_top row ">
                    <div className="box" id="box6"><h2 style={{ text: "bold", color: 'black' }}><strong>Brake Pads</strong></h2></div>
                        <div className="main_top_left col-lg-4 col-md-4 ">
                            <div>
                                <img className="imagg" src={image1} alt="image1" />
                            </div>
                            <div>
                                <div className="img2"><img src={image2} alt="image2" /></div>
                                <div className="imag"><img src={image3} alt="image3" /></div>
                                <div className="imag"><img src={image4} alt="image4" /></div>
                            </div>
                        </div>
                    <div className="main_top_middle col-lg-5 col-md-5 " >
                        <div className="box " id="box5"><h2 style={{ text: "bold", color: 'black' }}><strong>Brake Pads</strong></h2></div>
                        <div className="star"><img src={star1} alt="star1" /></div>
                        <div className="star"><img src={star1} alt="star1" /></div>
                        <div className="star"><img src={star1} alt="star1" /></div>
                        <div className="star"><img src={star2} alt="star2" /></div>
                        <div className="star"><img src={star3} alt="star3" /></div>
                        <div className="box" id="box6"><img className="ms-5" src={compare} alt="compare" /><a href="#" style={{ textDecoration: "none", marginLeft: "10px" }}>Add to Compare</a></div>
                        <br />
                        <div className="revieww box" id="box5"><a href="#" className="reviews" > <strong>1085 Reviews | 856 answered questions</strong></a><br /><br /></div>
                        <a href="#" className="reviews" > <strong>1085 Reviews | 856 answered questions</strong></a><br /><br />
                        <div className="box" id="box6"><strong>$ 87.00    </strong>    Free shippping <br /><br /></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sem a nisl auctor laoreet. </p>
                        <a href="#" className="tag"> more details</a><br />
                        <div className="box" id="box5 "><strong>$ 87.00    </strong>    Free shippping</div>
                        <div className="box comparebox" id="box5"><img className="compare" src={compare} alt="compare" /><a href="#" className="comparee">Add to Compare</a></div>
                        <h6 style={{ marginTop: "20px" }}>Qty</h6><img src={qty} alt="qty" style={{ marginTop: "-55px", marginLeft: "50px" }} /><br />
                        <button type="submit" className="button1">Add to Cart</button><button type="submit" className="button2">BUY Now</button><br /><br />
                        <div className="box " id="box6">
                            <img className="avatar image" src={box} alt="box" /> Free Shipping: Delivered by 14 Oct<br /><br />
                            <img className="avatar image" src={shipping} alt="shipping" />Express Shipping: Delivered by 11 Oct  Select Express<br /><br />
                            <img className="avatar image" src={delivery} alt="delivery" />Buy for $800.00 from this seller to avail 10% discount.<br /><br />
                        </div>
                        <div className="box " id="box5"><strong>Share</strong>
                            <div className="icon">
                                <div className="star1"><img src={fb} alt="fb" /></div>
                                <div className="star1"><img src={twitter} alt="twitter" /></div>
                                <div className="star1"><img src={insta} alt="insta" /></div>
                                <div className="star1"><img src={youtube} alt="youtube" /></div>
                            </div><br /><br /></div>
                        <p><strong>Sold By</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="tag"> <strong> Seller One</strong></a></p>
                        <p>Seller rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="fs-1" src={rating} alt="rating" />&nbsp;&nbsp; 4/5 (on 852 sales)<br /></p>
                        <div className="box" id="box5"><p> <a href="#" className="tag">  Seller Information</a></p><br /></div>
                        <div className="box " id="box6">
                            <Card>
                                <Card.Header className="cardhf cardd"><strong>More Buying Options</strong></Card.Header>
                                <Card.Body>
                                    <Card.Text><br />
                                        <div><a href="#" className="tag"><strong>Seller Two</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </a><strong>  $88.00 </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                            <h6>Free Shipping (standard)</h6></div><br />
                                        <div><a href="#" className="tag"><strong>Seller Three</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a> <strong> $85.00 </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                            <h6> Shipping $3.99(Express)</h6></div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted cardhf"><a href="#" className="tag"><strong>4 offers starting at $85.00</strong></a></Card.Footer>
                            </Card><br /><br />
                        </div>
                        <strong>Product Details:</strong>
                        <ol className="list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                            <li>Proin nec sem a nisl auctor laoreet.</li>
                            <li>Phasellus et rutrum magna. Nullam ut accumsan.</li>
                        </ol>
                        <div className="box" id="box6"><strong>Share</strong>
                            <div className="icon">
                                <div className="star1"><img src={fb} alt="fb" /></div>
                                <div className="star1"><img src={twitter} alt="twitter" /></div>
                                <div className="star1"><img src={insta} alt="insta" /></div>
                                <div className="star1"><img src={youtube} alt="youtube" /></div>
                            </div><br /><br /></div>
                    </div>
                    <div className="main_top_right col-lg-3 col-md-3 box" id="box5" style={{ float: "left" }}>
                        <div>
                            <Card>
                                <Card.Header className="cardhf"><strong>More Buying Options</strong></Card.Header>
                                <Card.Body>
                                    <Card.Text><br />
                                        <div><a href="#" className="tag"><strong>Seller Two</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </a><strong>  $88.00 </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                            <h6>Free Shipping (standard)</h6></div><br />
                                        <div><a href="#" className="tag"><strong>Seller Three</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a> <strong> $85.00 </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                            <h6> Shipping $3.99(Express)</h6></div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted cardhf"><a href="#" className="tag"><strong>4 offers starting at $85.00</strong></a></Card.Footer>
                            </Card><br /><br />
                        </div>
                        <div >
                            <img src={box} alt="box" /> Free Shipping: Delivered by 14 Oct<br /><br />
                            <img src={shipping} alt="shipping" />Express Shipping: Delivered by 11 Oct  Select Express<br /><br />
                            <img src={delivery} alt="delivery" />Buy for $800.00 from this seller to avail 10% discount.<br />
                        </div>
                    </div>
                </div>
                <div className="main_bottom ">
                    <h6 className="ms-2">&nbsp;Recommended Products</h6><br /><br />
                    <div className="container  sliderbox col-lg-12 col-md-4">
                        <Carousel className="slider">
                            <Carousel.Item >
                                <div className=" slide">

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
                                <div className=" slide">
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
                                <div className=" slide">
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
                                <div className="slide">
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
                                <div className=" slide">
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

                            </Carousel.Item>
                            <Carousel.Item >
                                <div className=" slide">

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
                                <div className=" slide">
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
                                <div className=" slide">
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
                                <div className="slide">
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
                                <div className=" slide">
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
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body