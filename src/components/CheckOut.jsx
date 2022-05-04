
import "./Checkout.css";
import imagev from "../assets/visa.svg"
import imagem from "../assets/mastercard.svg"
import imagep from "../assets/paypal.svg"
import imagea from "../assets/alipay.svg"
export const Checkout=()=>{
    return (
        <div>
            <div className="imageHolder">
                <img src="	https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" alt="" />
            </div>
            <div className="checkoutTab">
                <div className="checkoutMain">
                    <div className="checkoutTopTitle">CHECKOUT</div>
                    <div className="shippingHead">SHIPPING ADDRESS</div>
                    <hr/>
                    <br/>
                    <div className="addressHolder">
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>First Name</label>
                                <input style={{height:"30px"}} type="text" name="firstName"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Last Name</label>
                                <input style={{height:"30px"}} type="text" name="lastName"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Street Address</label>
                                <input style={{height:"30px"}} type="text" name="streetAddress"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Company (Optional)</label>
                                <input style={{height:"30px"}} type="text" name="company"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>City</label>
                                <input style={{height:"30px"}} type="text" name="city"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Zip or Postal Code</label>
                                <input style={{height:"30px",width:"40%"}} type="text" name="postalcode"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Country</label>
                                <input style={{height:"30px"}} type="text" name="country"/>
                            </div>
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>State/Province</label>
                                <input style={{height:"30px",width:"40%"}} type="text" name="state"/>
                            </div>
                        </div>
                        <div className="fillDetails">
                            <div>
                                <label style={{textAlign:"left",fontSize:"11px"}}>Phone</label>
                                <input style={{height:"30px",width:"40%"}} type="text" name="company"/>
                                <p style={{textAlign:"left", color:"gray",fontSize:"10px"}}>May be used to assist with Delivery</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="shipping">
                        <div className="shippingmethod">SHIPPING METHOD</div>
                        <hr/>
                        <div className="shippingbox">
                            <input type="radio" name="shippingbox" checked />
                            <div>$0.00 USD | 5 - 7 days | Express</div>
                        </div> 
                    </div>
                    <br/>
                    <div className="payment">
                        <div className="paymentmethod">PAYMENT METHOD</div>
                        <hr/>
                        <div className="paymentbox">
                            <div className="cardpayment">
                                <input type="radio" name="cardpayment" />
                                <div style={{marginLeft:"1%"}}>Pay with credit or debit card</div>
                                <img src={imagev} style={{marginLeft:"1%"}}/>
                                <img src={imagem}  style={{marginLeft:"1%"}}/>
                            </div>
                            <div className="paypalpayment">
                                <input type="radio" name="cardpayment" />
                                <div style={{marginLeft:"1%"}}>Pay with Pay Pal</div>
                                <img src={imagep} style={{marginLeft:"1%"}}/>
                            </div>
                            <div className="alipaypayment">
                                <input type="radio" name="cardpayment" />
                                <div style={{marginLeft:"1%"}}>Pay with Alipay</div>
                                <img src={imagea} style={{marginLeft:"1%"}}/>
                            </div>
                        </div> 
                    </div>
                    <br/>
                    <hr />
                    <div className="footer">
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                        <a/>
                    </div>
                </div>
                <div>
                     <div className="dataHead">ORDER SUMMARY -(0)ITEMS</div>
                    <hr/>
                    <br/>   
                    <div className="productChoosed">Product choosed details #need to be edited#</div>   
                    <div className="dataHead">COUNTRY/REGION: INDIA / USD</div>        
                    <hr/>  
                    <div className="total">
                        <div>
                            <p>Subtotal</p>
                            <p>$ 00.00</p>
                        </div>
                        <div>
                            <p>Shippingtotal</p>
                            <p>(free)</p>
                        </div>
                        <hr />
                        
                    </div>
                    <div className="orderTotal">
                        <p>Ordertotal(USD)</p>
                        <p>$ 00.00</p>
                    </div>
                    <div >
                        <p style={{fontSize:"11px", textAlign:"left"}}>
                            Important Notice<br/>enter
                            Our prices do not include Duty and VAT. Please consult your<br/>country/region’s customs legislation for more information about potential<br/> additional charges.
                        </p>
                    </div>
                    <div>
                        <button className="placeOrder">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}