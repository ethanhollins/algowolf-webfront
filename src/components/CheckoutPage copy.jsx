import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from "moment";
import CryptoJS from 'crypto-js';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import { loadStripe } from "@stripe/stripe-js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements
} from "@stripe/react-stripe-js";

class CheckoutPage extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            EPS_TIMESTAMP: this.generateEPSTimestamp(),
            EPS_AMOUNT: this.getAmount(),
            EPS_REFERENCEID: ""
        }

        this.setFormRef = elem => {
            this.form = elem;
        }
        this.setCardNumberRef = elem => {
            this.cardNumber = elem;
        }
        this.setMonthRef = elem => {
            this.month = elem;
        }
        this.setYearRef = elem => {
            this.year = elem;
        }
        this.setCCVRef = elem => {
            this.ccv = elem;
        }
        this.setFirstNameRef = elem => {
            this.firstName = elem;
        }
        this.setLastNameRef = elem => {
            this.lastName = elem;
        }
        this.setBillingCountryRef = elem => {
            this.billingCountry = elem;
        }
        this.setZipcodeRef = elem => {
            this.zipCode = elem;
        }
        this.setAuthorizeRef = elem => {
            this.authorizeCheckbox = elem;
        }
    }

    state = {
        billingDetails: {
            address: {
                "country": null,
                "postal_code": null
            },
            email: "",
            name: ""
        }
    }

    async componentDidMount()
    {
        this.props.countPageVisit(window.location.pathname);
        
        window.addEventListener("load", this.handleLoad.bind(this));

        const { REACT_APP_FRONT_BASE_URL } = process.env;

        const user_id = await this.props.checkAuthorization();
        if (user_id)
        {
            this.generateReference(user_id);
        }
        else
        {
            window.location.href = "/login?redirect=" + encodeURIComponent(REACT_APP_FRONT_BASE_URL + "/checkout" + window.location.search);
        }
    }

    render()
    {
        const { REACT_APP_FRONT_BASE_URL, REACT_APP_API_URL } = process.env;
        const { EPS_TIMESTAMP, EPS_AMOUNT, EPS_REFERENCEID, isLoaded } = this.state;

        if (isLoaded)
        {
            return (
                <React.Fragment>
    
                <div className="home body">
                    
                    {/* <Navigation2 
                        checkAuthorization={this.props.checkAuthorization}
                        getUserId={this.props.getUserId}
                        getFirstName={this.props.getFirstName}
                        getScreenWidth={this.props.getScreenWidth}
                    /> */}
                    
                    {/* <form 
                        ref={this.setFormRef}
                        method="post" action="https://demo.transact.nab.com.au/directpostv2/authorise"
                        onSubmit={this.validateSubmit}
                    >
                        <div className="checkout-parent">
                            <div className="checkout payment-details container">
                                <h3>Payment Details</h3>
                                <input type="hidden" name="EPS_MERCHANT" value={MERCHANT_ID}/>
                                <input type="hidden" name="EPS_TXNTYPE" value="0"/>
                                <input type="hidden" name="EPS_REFERENCEID" value={EPS_REFERENCEID}/>
                                <input type="hidden" name="EPS_AMOUNT" value={EPS_AMOUNT}/>
                                <input type="hidden" name="EPS_CURRENCY" value="USD"/>
                                <input type="hidden" name="EPS_TIMESTAMP" value={EPS_TIMESTAMP}/>
                                <input type="hidden" name="EPS_FINGERPRINT" value={this.generateHMACSHA256()}/>
                                <input type="hidden" name="EPS_RESULTURL" value={REACT_APP_FRONT_BASE_URL + "/checkout/result"}/>
                                <input type="hidden" name="EPS_CALLBACKURL" value={REACT_APP_API_URL + "/v1/nab/callback"}/>
                                <input type="hidden" name="EPS_REDIRECT" value="TRUE"/>
                                <input type="hidden" name="EPS_STORE" value="true"/>
                                <input type="hidden" name="EPS_STORETYPE" value="TOKEN"/>
                                <label>Payment Card Number</label>
                                <div className="field col-xs-12">
                                    <input 
                                        ref={this.setCardNumberRef}
                                        type="text" name="EPS_CARDNUMBER"
                                        maxLength="19"
                                        placeholder="Credit card number"
                                        onKeyPress={this.onKeyPressCreditCard}
                                        onPaste={this.onPasteCreditCard}
                                    />
                                </div>
    
                                <div className="field-group">
                                    <div className="field col-xs-6">
                                        <label>Expiry Date</label>
                                        <div className="sub-field-group">
                                            <div>
                                                <select ref={this.setMonthRef} name="EPS_EXPIRYMONTH">
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>
                                            <div>
                                                <select ref={this.setYearRef} name="EPS_EXPIRYYEAR">
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field col-xs-6">
                                        <label>Security Code</label>
                                        <input 
                                            ref={this.setCCVRef}
                                            type="text" name="EPS_CCV"
                                            maxLength="3"
                                            placeholder="CCV"
                                            onKeyPress={this.onKeyPressCCV}
                                            onPaste={this.onPasteCCV}
                                        />
                                    </div>
                                </div>
    
                                <div className="field-group">
                                    <div className="field col-xs-6">
                                        <label>First Name</label>
                                        <input 
                                            ref={this.setFirstNameRef}
                                            type="text" name="EPS_FIRSTNAME" 
                                        />
                                    </div>
                                    <div className="field col-xs-6">
                                        <label>Last Name</label>
                                        <input 
                                            ref={this.setLastNameRef}
                                            type="text" name="EPS_LASTNAME" 
                                        />
                                    </div>
                                </div>
                                <h3>Address</h3>
                                <label>Country</label>
                                <input 
                                    ref={this.setBillingCountryRef}
                                    type="text" name="EPS_BILLINGCOUNTRY"
                                />
                                <label>Zip/Postal Code</label>
                                <input 
                                    ref={this.setZipcodeRef}
                                    type="text" name="EPS_ZIPCODE"
                                />
                                <div className="checkbox-group">
                                    <label className='aw-login checkbox'>
                                        <input 
                                            ref={this.setAuthorizeRef}
                                            type='checkbox' 
                                            defaultChecked={false}
                                            required
                                        />
                                        <div className='aw-login checkmark'></div>
                                    </label>
                                    <div className="aw-login small-text">
                                        I authorize AlgoWolf to charge me automatically every month, until I cancel my subscription. 
                                        I acknowledge that refunds are made according to the Terms of Use. 
                                        The subscription can be cancelled at any time from the Billing section in the <a href="/account-settings" target="_blank">Account Settings</a>. 
                                        I have read, and agree to, AlgoWolf's <a href="/tos" target="_blank">Terms of Use</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
                                    </div>
                                </div>
                            </div>
                            <div className="checkout summary container">
                                <div>
                                    <div className="s1">
                                        <div className="s1-header">
                                            <div>{this.getPlan()} Plan</div>
                                            <div className="sub-header">Starts Immediately</div>
                                        </div>
                                        <div className="s1-price">${EPS_AMOUNT} USD</div>
                                    </div>
                                    <div className="s2">
                                        <div>
                                            <div className="s2-header">Total</div>
                                            <div className="sub-header">Billed every month.</div>
                                        </div>
                                        <div>
                                            <div className="s2-price">${EPS_AMOUNT} USD</div>
                                        </div>
                                    </div>
                                    <div>
                                        <input 
                                            className="s3-btn" type="submit" value="Complete Purchase"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> */}

                    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>

                    <form 
                        ref={this.setFormRef} onSubmit={handleSubmit}
                    >
                        <div className="checkout-parent">
                            <div className="checkout payment-details container">
                                <h3>Payment Details</h3>
                                <input type="hidden" name="EPS_MERCHANT" value={MERCHANT_ID}/>
                                <input type="hidden" name="EPS_TXNTYPE" value="0"/>
                                <input type="hidden" name="EPS_REFERENCEID" value={EPS_REFERENCEID}/>
                                <input type="hidden" name="EPS_AMOUNT" value={EPS_AMOUNT}/>
                                <input type="hidden" name="EPS_CURRENCY" value="USD"/>
                                <input type="hidden" name="EPS_TIMESTAMP" value={EPS_TIMESTAMP}/>
                                <input type="hidden" name="EPS_FINGERPRINT" value={this.generateHMACSHA256()}/>
                                <input type="hidden" name="EPS_RESULTURL" value={REACT_APP_FRONT_BASE_URL + "/checkout/result"}/>
                                <input type="hidden" name="EPS_CALLBACKURL" value={REACT_APP_API_URL + "/v1/nab/callback"}/>
                                <input type="hidden" name="EPS_REDIRECT" value="TRUE"/>
                                <input type="hidden" name="EPS_STORE" value="true"/>
                                <input type="hidden" name="EPS_STORETYPE" value="TOKEN"/>
                                <div className="field col-xs-12">
                                    <fieldset className="FormGroup">
                                        <label>Payment Card Number</label>
                                        <div className="checkout form-input">
                                            <CardNumberElement 
                                                options={CARD_OPTIONS} 
                                                onChange={(e) => {
                                                    // setError(e.error);
                                                    // setCardComplete(e.complete);
                                                }} 
                                            />
                                        </div>
                                    </fieldset>
                                </div>
    
                                <div className="field-group">
                                    <div className="field col-xs-6">
                                        <fieldset className="FormGroup">
                                            <label>Expiry Date</label>
                                            <div className="checkout form-input">
                                                <CardExpiryElement 
                                                    options={CARD_OPTIONS} 
                                                    onChange={(e) => {
                                                        // setError(e.error);
                                                        // setCardComplete(e.complete);
                                                    }} 
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="field col-xs-6">
                                        <fieldset className="FormGroup">
                                            <label>Security Code</label>
                                            <div className="checkout form-input">
                                                <CardCvcElement 
                                                    options={CARD_OPTIONS} 
                                                    onChange={(e) => {
                                                        // setError(e.error);
                                                        // setCardComplete(e.complete);
                                                    }} 
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
    
                                <div className="field-group">
                                    <div className="field col-xs-12">
                                        <fieldset className="FormGroup">
                                            <Field
                                                label="Name"
                                                id="name"
                                                type="text"
                                                placeholder="Jane Doe"
                                                required
                                                autoComplete="name"
                                                // value={billingDetails.name}
                                                // onChange={(e) => {
                                                //     setBillingDetails({ ...billingDetails, name: e.target.value });
                                                // }}
                                            />
                                        </fieldset>
                                    </div>
                                </div>
                                <h3>Address</h3>
                                <fieldset className="FormGroup">
                                    <Field
                                        label="Country"
                                        id="country"
                                        type="text"
                                        placeholder=""
                                        required
                                        autoComplete="country-name"
                                        // value={billingDetails.name}
                                        // onChange={(e) => {
                                        //     setBillingDetails({ ...billingDetails, name: e.target.value });
                                        // }}
                                    />
                                </fieldset>
                                <fieldset className="FormGroup">
                                    <Field
                                        label="Zip/Postal Code"
                                        id="postal_code"
                                        type="text"
                                        placeholder=""
                                        required
                                        autoComplete="postal-code"
                                        // value={billingDetails.name}
                                        // onChange={(e) => {
                                        //     setBillingDetails({ ...billingDetails, name: e.target.value });
                                        // }}
                                    />
                                </fieldset>
                                <div className="checkbox-group">
                                    <label className='aw-login checkbox'>
                                        <input 
                                            ref={this.setAuthorizeRef}
                                            type='checkbox' 
                                            defaultChecked={false}
                                            required
                                        />
                                        <div className='aw-login checkmark'></div>
                                    </label>
                                    <div className="aw-login small-text">
                                        I authorize AlgoWolf to charge me automatically every month, until I cancel my subscription. 
                                        I acknowledge that refunds are made according to the Terms of Use. 
                                        The subscription can be cancelled at any time from the Billing section in the <a href="/account-settings" target="_blank">Account Settings</a>. 
                                        I have read, and agree to, AlgoWolf's <a href="/tos" target="_blank">Terms of Use</a> and <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
                                    </div>
                                </div>
                            </div>
                            <div className="checkout summary container">
                                <div>
                                    <div className="s1">
                                        <div className="s1-header">
                                            <div>{this.getPlan()} Plan</div>
                                            <div className="sub-header">Starts Immediately</div>
                                        </div>
                                        <div className="s1-price">${EPS_AMOUNT} USD</div>
                                    </div>
                                    <div className="s2">
                                        <div>
                                            <div className="s2-header">Total</div>
                                            <div className="sub-header">Billed every month.</div>
                                        </div>
                                        <div>
                                            <div className="s2-price">${EPS_AMOUNT} USD</div>
                                        </div>
                                    </div>
                                    <div>
                                        <SubmitButton 
                                            // processing={processing} error={error} disabled={!stripe}
                                        >
                                            Complete Purchase
                                        </SubmitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                    </Elements>

                </div>
    
                {/* <div id="first-section" />
    
                <Footer/> */}
    
                </React.Fragment>
            );
        }
        else
        {
            return (
                <React.Fragment>
    
                <div className="home body">
                    
                    <Navigation2 
                        checkAuthorization={this.props.checkAuthorization}
                        getUserId={this.props.getUserId}
                        getFirstName={this.props.getFirstName}
                        getScreenWidth={this.props.getScreenWidth}
                    />

                    <section className="checkout-result se-section single-feature">
                        <div className="container feature-desc">
                            <div className="row">
                                <div className='checkout-result body'>
                                    <span className='checkout-result header'>Loading Page...</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>
                
                {/* <div id="first-section" />

                <Footer/> */}

                </React.Fragment>
            )
        }
    }

    handleLoad(e)
    {
        if (this.form)
        {
            this.form.reset();
        }
    }

    onKeyPressCreditCard = (e) =>
    {
        const event = e || window.event;

        let key = event.keyCode || event.which;
        key = String.fromCharCode(key);

        let regex = /^\d+$/;
        if (regex.test(key) && e.target.value.length < 19)
        {
            const new_value = e.target.value + key;
            e.target.value = new_value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        }
        event.preventDefault();
    }

    onPasteCreditCard = (e) =>
    {
        const event = e || window.event;
        const clipboardData = e.clipboardData || window.clipboardData;
        const data = clipboardData.getData('text/plain');
        
        let regex = /^\d+$/;
        if (regex.test(data))
        {
            const new_value = e.target.value + data;
            e.target.value = new_value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim().substr(0,19);
        }
        event.preventDefault();
    }

    onKeyPressCCV = (e) =>
    {
        const event = e || window.event;

        let key = event.keyCode || event.which;
        key = String.fromCharCode(key);

        let regex = /^\d+$/;
        if (!regex.test(key))
        {
            if (event.preventDefault)
            {
                event.preventDefault();
            }
        }
    }

    onPasteCCV = (e) =>
    {
        const event = e || window.event;
        const clipboardData = e.clipboardData || window.clipboardData;
        const data = clipboardData.getData('text/plain');
        
        let regex = /^\d+$/;
        if (!regex.test(data))
        {
            if (event.preventDefault)
            {
                event.preventDefault();
            }
        }
    }

    onKeyPressCCV = (e) =>
    {
        const event = e || window.event;

        let key = event.keyCode || event.which;
        key = String.fromCharCode(key);

        let regex = /^\d+$/;
        if (!regex.test(key))
        {
            if (event.preventDefault)
            {
                event.preventDefault();
            }
        }
    }

    onPasteCCV = (e) =>
    {
        const event = e || window.event;
        const clipboardData = e.clipboardData || window.clipboardData;
        const data = clipboardData.getData('text/plain');
        
        let regex = /^\d+$/;
        if (!regex.test(data))
        {
            if (event.preventDefault)
            {
                event.preventDefault();
            }
        }
    }

    generateEPSTimestamp = () =>
    {
        return moment.utc().format("YYYYMMDDHHmmss");
    }

    generateHMACSHA256 = () => {
        const { EPS_TIMESTAMP, EPS_AMOUNT, EPS_REFERENCEID } = this.state;
        const data = [
            MERCHANT_ID, TRANSACTION_PASSWORD, "0", 
            EPS_REFERENCEID, EPS_AMOUNT, EPS_TIMESTAMP
        ].join('|');
        
        const sha256 = CryptoJS.HmacSHA256(data, TRANSACTION_PASSWORD);
        return sha256.toString(CryptoJS.enc.HEX);
    }

    testGenerateHMACSHA256 = () => {
        const { EPS_TIMESTAMP, EPS_AMOUNT } = this.state;
        const data = [
            MERCHANT_ID, TRANSACTION_PASSWORD, "0", 
            "Test Reference", EPS_AMOUNT, EPS_TIMESTAMP
        ].join('|');
        console.log(EPS_TIMESTAMP);
        console.log(data);
        
        const sha256 = CryptoJS.HmacSHA256(data, TRANSACTION_PASSWORD);
        return sha256.toString(CryptoJS.enc.HEX);
    }

    getPlan = () =>
    {
        const queryString = this.props.location.search;
        const params = new URLSearchParams(queryString);

        const plan = params.get("plan");
        if (plan === "pro")
        {
            return "Pro";
        }
        else if (plan === "standard")
        {
            return "Standard";
        }
        else if (plan === "hgpro_standard")
        {
            return "Standard";
        }
        else if (plan === "hgpro_professional")
        {
            return "Professional";
        }

        window.location.href = "/pricing";
    }

    getAmount = () =>
    {
        const plan = this.getPlan();

        if (plan === "Pro")
        {
            return "495.00";
        }
        else if (plan === "Standard")
        {
            return "295.00";
        }
        else if (plan === "Professional")
        {
            return "495.00";
        }
    }

    generateReference = (user_id) =>
    {
        let { EPS_REFERENCEID, isLoaded } = this.state;

        const queryString = this.props.location.search;
        const params = new URLSearchParams(queryString);
        const plan = params.get("plan");
        if (plan === "pro")
        {
            EPS_REFERENCEID = `${user_id}|pro|${plan}`;
        }
        else if (plan === "standard")
        {
            EPS_REFERENCEID = `${user_id}|standard|${plan}`;
        }
        else if (plan === "hgpro_professional")
        {
            EPS_REFERENCEID = `${user_id}|HolyGrail_Pro_professional|${plan}`;
        }
        else if (plan === "hgpro_standard")
        {
            EPS_REFERENCEID = `${user_id}|HolyGrail_Pro|${plan}`;
        }
        isLoaded = true;

        this.setState({ EPS_REFERENCEID, isLoaded });
    }

    validateSubmit = (e) =>
    {
        const event = e || window.event;

        let prevent = false;
        if (this.cardNumber.value.length < 19)
        {
            this.cardNumber.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.cardNumber.style.borderColor = "#ececec";
        }

        const now = moment().utc();
        const expiry = moment(this.year.value + "/" + this.month.value + "/01");

        if (
            now.year() > expiry.year() || 
            (now.year() === expiry.year() && now.month() > expiry.month())
        )
        {
            this.month.style.borderColor = "#e74c3c";
            this.year.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.month.style.borderColor = "#ececec";
            this.year.style.borderColor = "#ececec";
        }

        if (this.ccv.value.length < 3)
        {
            this.ccv.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.ccv.style.borderColor = "#ececec";
        }
        if (this.firstName.value.length < 2)
        {
            this.firstName.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.firstName.style.borderColor = "#ececec";
        }
        if (this.lastName.value.length < 2)
        {
            this.lastName.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.lastName.style.borderColor = "#ececec";
        }
        if (this.billingCountry.value.length === 0)
        {
            this.billingCountry.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.billingCountry.style.borderColor = "#ececec";
        }
        if (this.zipCode.value.length === 0)
        {
            this.zipCode.style.borderColor = "#e74c3c";
            prevent = true;
        }
        else
        {
            this.zipCode.style.borderColor = "#ececec";
        }

        if (prevent)
        {
            event.preventDefault();
        }
        else
        {
            this.cardNumber.value = this.cardNumber.value.replaceAll(' ', '')
        }
    }

}

const MERCHANT_ID = "XYZ0010";
const TRANSACTION_PASSWORD = "abcd1234";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#000",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            fontSize: "1em",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "#000"
            },
            "::placeholder": {
                color: "#787878",
                fontWeight: 500,
                fontFamily: "Poppins, sans-serif",
                fontSize: "1em"
            }
        },
        invalid: {
            iconColor: "#e74c3c",
            color: "#e74c3c"
        }
    }
};

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange
}) => (
    <div className="FormRow">
        <label htmlFor={id} className="FormRowLabel">
            {label}
        </label>
        <input
            className="FormRowInput"
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
        />
    </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
      className={"s3-btn " + `SubmitButton ${error ? "SubmitButton--error" : ""}`}
      type="submit"
      disabled={processing || disabled}
    >
      {processing ? "Processing..." : children}
    </button>
  );

export default withRouter(CheckoutPage);
