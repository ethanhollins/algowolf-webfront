import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import moment from "moment";
import CryptoJS from 'crypto-js';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/pro-light-svg-icons';
import { loadStripe } from "@stripe/stripe-js";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    Elements,
    useStripe,
    useElements,
    CardElement
} from "@stripe/react-stripe-js";



const CheckoutForm = (props) =>
{
    const { REACT_APP_API_URL } = process.env;
    const params = new URLSearchParams(window.location.search);

    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [status, setStatus] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [authorize, setAuthorize] = useState(false);
    const [success, setSuccess] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        country: "",
        postal_code: "",
        email: props.email,
        name: ""
    });

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => 
    {
        event.preventDefault();

        if (!stripe || !elements) 
        {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (!cardComplete)
        {
            elements.getElement("card")._parent.parentNode.style.borderColor = "#e74c3c";
            elements.getElement("card").focus()
            return;
        }
        else if (cardComplete && authorize) 
        {
            setProcessing(true);


            if (status)
            {
                const result = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            email: billingDetails.email,
                            name: billingDetails.name,
                            address: {
                                country: billingDetails.country,
                                postal_code: billingDetails.postal_code
                            }
                        }
                    }
                });
                if (result.error)
                {
                    setError(result.error);
                    console.log("(1) ERROR: " + result.error.message);
                    setSuccess(false);
                }
                else
                {
                    console.log("(1) Payment Succeeded");
                    setSuccess(true);
                }
            }
            else
            {
                const result = await stripe.createPaymentMethod({
                    type: "card",
                    card: elements.getElement(CardElement),
                    billing_details: {
                        email: billingDetails.email,
                        name: billingDetails.name,
                        address: {
                            country: billingDetails.country,
                            postal_code: billingDetails.postal_code
                        }
                    }
                });

                if (result.error)
                {
                    setError(result.error)
                    console.log("(2) ERROR: " + result.error.message);
                    setSuccess(false);
                }
                else
                {
                    var requestOptions = {
                        method: 'POST',
                        headers: props.headers,
                        credentials: 'include',
                        body: JSON.stringify({
                            user_id: props.user_id,
                            email: props.email,
                            name: billingDetails.name,
                            address: {
                                country: billingDetails.country,
                                postal_code: billingDetails.postal_code
                            },
                            payment_method: result.paymentMethod.id
                        })
                    };
                    
                    const res = await fetch(`${REACT_APP_API_URL}/v1/payments/subscribe/${params.get("plan")}`, requestOptions);
                    if (res.status === 200)
                    {
                        const { client_secret, status } = await res.json()
    
                        if (status === "requires_action")
                        {
                            setStatus(status);
                            setClientSecret(client_secret);
                            await stripe.confirmCardPayment(client_secret).then((result) => {
                                if (result.error)
                                {
                                    setError(result.error);
                                    console.log("(3) ERROR: " + result.error.message);
                                    setSuccess(false);
                                }
                                else
                                {
                                    console.log("(2) Payment Succeeded")
                                    setSuccess(true);
                                }
                            });
                        }
                        else
                        {
                            console.log("(3) Payment Succeeded");
                            setSuccess(true);
                        }
                    }
                    else
                    {
                        console.log("(4) ERROR");
                        setSuccess(false);
                    }
                }
            }
        }

        setProcessing(false);
    };

    let country_list = [];

    for (let i of country_codes)
    {
        country_list.push(<option key={i["Code"]} value={i["Code"]}>{i["Name"]}</option>);
    }

    if (success === true && !processing)
    {
        return (
            <div className='checkout-result body'>
                <FontAwesomeIcon className='checkout-result success-icon' icon={faCheckCircle} />
                <span className='checkout-result header'>Success!</span>
                <span className='checkout-result sub-header'>Your payment request has been processed successfully.<br/><a href="/app">Click here</a> to go to your dashboard.</span>
            </div>
        )
    }
    else if (success === false && !processing)
    {
        return (
            <div className='checkout-result body'>
                <FontAwesomeIcon className='checkout-result failed-icon' icon={faTimesCircle} />
                <span className='checkout-result header'>Something went wrong.</span>
                <span className='checkout-result sub-header'>
                    Your payment was unsuccessful. Please <a href={"/checkout" + window.location.search}>try again.</a><br/>
                    Contact <a href="mailto:support@algowolf.com">support@algowolf.com</a> if you need assistance.<br/>
                    Go Back to <a href="/">Home</a>
                </span>
            </div>
        )
    }
    else
    {
        return (
            <React.Fragment>
            
            <a href={props.back} className='checkout-result close-icon-parent'>
                <FontAwesomeIcon className='checkout-result close-icon' icon={faChevronLeft} />
                <div className='checkout-result close-text'>Go Back</div>
            </a>
            
            <form 
                onSubmit={handleSubmit}
            >
                <div className="checkout-parent">
                    <div className="checkout payment-details container">
                        <h3>Payment Details</h3>
                        <div className="field col-xs-12">
                            <fieldset className="FormGroup">
                                <label>Payment Card</label>
                                <div className="checkout form-input">
                                    <CardElement 
                                        options={CARD_OPTIONS} 
                                        onChange={(e) => {
                                            setError(e.error);
                                            setCardComplete(e.complete);
                                        }} 
                                    />
                                </div>
                            </fieldset>
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
                                        value={billingDetails.name}
                                        onChange={(e) => {
                                            setBillingDetails({ ...billingDetails, name: e.target.value });
                                        }}
                                    />
                                </fieldset>
                            </div>
                        </div>
                        <h3>Address</h3>
                        <fieldset className="FormGroup">
                            <div className="checkout dropdown">
                                <select 
                                    id="country"
                                    required
                                    autoComplete="country"
                                    onChange={(e) => {
                                        setBillingDetails({ ...billingDetails, country: e.target.value });
                                    }}
                                >
                                    {country_list}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset className="FormGroup">
                            <Field
                                label="Zip/Postal Code"
                                id="postal_code"
                                type="text"
                                placeholder=""
                                required
                                autoComplete="postal-code"
                                value={billingDetails.postal_code}
                                onChange={(e) => {
                                    setBillingDetails({ ...billingDetails, postal_code: e.target.value });
                                }}
                            />
                        </fieldset>
                        <div className="checkbox-group">
                            <label className='aw-login checkbox'>
                                <input 
                                    type='checkbox' 
                                    defaultChecked={false}
                                    required
                                    onChange={(e) => {
                                        setAuthorize(e.target.checked)
                                    }}
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
                                    <div>{props.plan} Plan</div>
                                    <div className="sub-header">Starts Immediately</div>
                                </div>
                                <div className="s1-price">${props.amount} USD</div>
                            </div>
                            <div className="s2">
                                <div>
                                    <div className="s2-header">Total</div>
                                    <div className="sub-header">Billed every month.</div>
                                </div>
                                <div>
                                    <div className="s2-price">${props.amount} USD</div>
                                </div>
                            </div>
                            <div>
                                <SubmitButton 
                                    processing={processing} error={error} disabled={!stripe}
                                >
                                    Complete Purchase
                                </SubmitButton>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            </React.Fragment>
        )
    }
}


class CheckoutPage extends Component
{

    constructor(props)
    {
        super(props);

        // this.state = {
        //     isLoaded: false,
        //     EPS_TIMESTAMP: this.generateEPSTimestamp(),
        //     EPS_AMOUNT: this.getAmount(),
        //     EPS_REFERENCEID: ""
        // }

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
        isLoaded: false
    }

    async componentDidMount()
    {
        // this.props.countPageVisit(window.location.pathname);
        
        // window.addEventListener("load", this.handleLoad.bind(this));

        const { REACT_APP_FRONT_BASE_URL } = process.env;

        const user_id = await this.props.checkAuthorization();
        let { isLoaded } = this.state;
        if (!user_id)
        {
            window.location.href = "/login?redirect=" + encodeURIComponent(REACT_APP_FRONT_BASE_URL + "/checkout" + window.location.search);
        }
        isLoaded = true;
        this.setState({ isLoaded });
    }

    render()
    {
        const { isLoaded } = this.state;
        const queryString = this.props.location.search;
        const params = new URLSearchParams(queryString);
        let back = "/";
        if (params.get("back"))
        {
            back = params.get("back");
        }

        if (isLoaded)
        {
            return (
                <React.Fragment>
    
                <div className="home body checkout">

                    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                    
                    <CheckoutForm 
                        user_id={this.props.getUserId()}
                        email={this.props.getEmail()}
                        headers={this.props.getHeaders()}
                        back={back}
                        plan={this.getPlan()}
                        amount={this.getAmount()}
                    />
                    
                    </Elements>

                </div>
    
                </React.Fragment>
            );
        }
        else
        {
            return (
                <React.Fragment>
    
                <div className="home body">
                    
                    <section className="checkout-result se-section single-feature">
                        <div className="container feature-desc">
                            <div className="row">
                                <div className='checkout-result body'>
                                    <span className='checkout-result header'>
                                        Loading Page...<br/>
                                    </span>
                                    <span className='checkout-result sub-header'>Go Back to <a href="/">Home</a></span>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>

                </React.Fragment>
            )
        }
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
}

// pk_test_6pRNASCoBOKtIshFeQd4XMUh
const stripePromise = loadStripe("pk_test_51JQTAqBtSFeX56k3QKOu4p0kbg8F5AxGFp5SoVi9i2aMVmKKSrA9t4nb5QLtUZXRmb13pAvi1RfSF79XKQlF7CGt009HRxaGGm");

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};

const CARD_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            iconColor: "#ffa801",
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

const country_codes = [{"Code": "AF", "Name": "Afghanistan"},{"Code": "AX", "Name": "\u00c5land Islands"},{"Code": "AL", "Name": "Albania"},{"Code": "DZ", "Name": "Algeria"},{"Code": "AS", "Name": "American Samoa"},{"Code": "AD", "Name": "Andorra"},{"Code": "AO", "Name": "Angola"},{"Code": "AI", "Name": "Anguilla"},{"Code": "AQ", "Name": "Antarctica"},{"Code": "AG", "Name": "Antigua and Barbuda"},{"Code": "AR", "Name": "Argentina"},{"Code": "AM", "Name": "Armenia"},{"Code": "AW", "Name": "Aruba"},{"Code": "AU", "Name": "Australia"},{"Code": "AT", "Name": "Austria"},{"Code": "AZ", "Name": "Azerbaijan"},{"Code": "BS", "Name": "Bahamas"},{"Code": "BH", "Name": "Bahrain"},{"Code": "BD", "Name": "Bangladesh"},{"Code": "BB", "Name": "Barbados"},{"Code": "BY", "Name": "Belarus"},{"Code": "BE", "Name": "Belgium"},{"Code": "BZ", "Name": "Belize"},{"Code": "BJ", "Name": "Benin"},{"Code": "BM", "Name": "Bermuda"},{"Code": "BT", "Name": "Bhutan"},{"Code": "BO", "Name": "Bolivia, Plurinational State of"},{"Code": "BQ", "Name": "Bonaire, Sint Eustatius and Saba"},{"Code": "BA", "Name": "Bosnia and Herzegovina"},{"Code": "BW", "Name": "Botswana"},{"Code": "BV", "Name": "Bouvet Island"},{"Code": "BR", "Name": "Brazil"},{"Code": "IO", "Name": "British Indian Ocean Territory"},{"Code": "BN", "Name": "Brunei Darussalam"},{"Code": "BG", "Name": "Bulgaria"},{"Code": "BF", "Name": "Burkina Faso"},{"Code": "BI", "Name": "Burundi"},{"Code": "KH", "Name": "Cambodia"},{"Code": "CM", "Name": "Cameroon"},{"Code": "CA", "Name": "Canada"},{"Code": "CV", "Name": "Cape Verde"},{"Code": "KY", "Name": "Cayman Islands"},{"Code": "CF", "Name": "Central African Republic"},{"Code": "TD", "Name": "Chad"},{"Code": "CL", "Name": "Chile"},{"Code": "CN", "Name": "China"},{"Code": "CX", "Name": "Christmas Island"},{"Code": "CC", "Name": "Cocos (Keeling) Islands"},{"Code": "CO", "Name": "Colombia"},{"Code": "KM", "Name": "Comoros"},{"Code": "CG", "Name": "Congo"},{"Code": "CD", "Name": "Congo, the Democratic Republic of the"},{"Code": "CK", "Name": "Cook Islands"},{"Code": "CR", "Name": "Costa Rica"},{"Code": "CI", "Name": "C\u00f4te d'Ivoire"},{"Code": "HR", "Name": "Croatia"},{"Code": "CU", "Name": "Cuba"},{"Code": "CW", "Name": "Cura\u00e7ao"},{"Code": "CY", "Name": "Cyprus"},{"Code": "CZ", "Name": "Czech Republic"},{"Code": "DK", "Name": "Denmark"},{"Code": "DJ", "Name": "Djibouti"},{"Code": "DM", "Name": "Dominica"},{"Code": "DO", "Name": "Dominican Republic"},{"Code": "EC", "Name": "Ecuador"},{"Code": "EG", "Name": "Egypt"},{"Code": "SV", "Name": "El Salvador"},{"Code": "GQ", "Name": "Equatorial Guinea"},{"Code": "ER", "Name": "Eritrea"},{"Code": "EE", "Name": "Estonia"},{"Code": "ET", "Name": "Ethiopia"},{"Code": "FK", "Name": "Falkland Islands (Malvinas)"},{"Code": "FO", "Name": "Faroe Islands"},{"Code": "FJ", "Name": "Fiji"},{"Code": "FI", "Name": "Finland"},{"Code": "FR", "Name": "France"},{"Code": "GF", "Name": "French Guiana"},{"Code": "PF", "Name": "French Polynesia"},{"Code": "TF", "Name": "French Southern Territories"},{"Code": "GA", "Name": "Gabon"},{"Code": "GM", "Name": "Gambia"},{"Code": "GE", "Name": "Georgia"},{"Code": "DE", "Name": "Germany"},{"Code": "GH", "Name": "Ghana"},{"Code": "GI", "Name": "Gibraltar"},{"Code": "GR", "Name": "Greece"},{"Code": "GL", "Name": "Greenland"},{"Code": "GD", "Name": "Grenada"},{"Code": "GP", "Name": "Guadeloupe"},{"Code": "GU", "Name": "Guam"},{"Code": "GT", "Name": "Guatemala"},{"Code": "GG", "Name": "Guernsey"},{"Code": "GN", "Name": "Guinea"},{"Code": "GW", "Name": "Guinea-Bissau"},{"Code": "GY", "Name": "Guyana"},{"Code": "HT", "Name": "Haiti"},{"Code": "HM", "Name": "Heard Island and McDonald Islands"},{"Code": "VA", "Name": "Holy See (Vatican City State)"},{"Code": "HN", "Name": "Honduras"},{"Code": "HK", "Name": "Hong Kong"},{"Code": "HU", "Name": "Hungary"},{"Code": "IS", "Name": "Iceland"},{"Code": "IN", "Name": "India"},{"Code": "ID", "Name": "Indonesia"},{"Code": "IR", "Name": "Iran, Islamic Republic of"},{"Code": "IQ", "Name": "Iraq"},{"Code": "IE", "Name": "Ireland"},{"Code": "IM", "Name": "Isle of Man"},{"Code": "IL", "Name": "Israel"},{"Code": "IT", "Name": "Italy"},{"Code": "JM", "Name": "Jamaica"},{"Code": "JP", "Name": "Japan"},{"Code": "JE", "Name": "Jersey"},{"Code": "JO", "Name": "Jordan"},{"Code": "KZ", "Name": "Kazakhstan"},{"Code": "KE", "Name": "Kenya"},{"Code": "KI", "Name": "Kiribati"},{"Code": "KP", "Name": "Korea, Democratic People's Republic of"},{"Code": "KR", "Name": "Korea, Republic of"},{"Code": "KW", "Name": "Kuwait"},{"Code": "KG", "Name": "Kyrgyzstan"},{"Code": "LA", "Name": "Lao People's Democratic Republic"},{"Code": "LV", "Name": "Latvia"},{"Code": "LB", "Name": "Lebanon"},{"Code": "LS", "Name": "Lesotho"},{"Code": "LR", "Name": "Liberia"},{"Code": "LY", "Name": "Libya"},{"Code": "LI", "Name": "Liechtenstein"},{"Code": "LT", "Name": "Lithuania"},{"Code": "LU", "Name": "Luxembourg"},{"Code": "MO", "Name": "Macao"},{"Code": "MK", "Name": "Macedonia, the Former Yugoslav Republic of"},{"Code": "MG", "Name": "Madagascar"},{"Code": "MW", "Name": "Malawi"},{"Code": "MY", "Name": "Malaysia"},{"Code": "MV", "Name": "Maldives"},{"Code": "ML", "Name": "Mali"},{"Code": "MT", "Name": "Malta"},{"Code": "MH", "Name": "Marshall Islands"},{"Code": "MQ", "Name": "Martinique"},{"Code": "MR", "Name": "Mauritania"},{"Code": "MU", "Name": "Mauritius"},{"Code": "YT", "Name": "Mayotte"},{"Code": "MX", "Name": "Mexico"},{"Code": "FM", "Name": "Micronesia, Federated States of"},{"Code": "MD", "Name": "Moldova, Republic of"},{"Code": "MC", "Name": "Monaco"},{"Code": "MN", "Name": "Mongolia"},{"Code": "ME", "Name": "Montenegro"},{"Code": "MS", "Name": "Montserrat"},{"Code": "MA", "Name": "Morocco"},{"Code": "MZ", "Name": "Mozambique"},{"Code": "MM", "Name": "Myanmar"},{"Code": "NA", "Name": "Namibia"},{"Code": "NR", "Name": "Nauru"},{"Code": "NP", "Name": "Nepal"},{"Code": "NL", "Name": "Netherlands"},{"Code": "NC", "Name": "New Caledonia"},{"Code": "NZ", "Name": "New Zealand"},{"Code": "NI", "Name": "Nicaragua"},{"Code": "NE", "Name": "Niger"},{"Code": "NG", "Name": "Nigeria"},{"Code": "NU", "Name": "Niue"},{"Code": "NF", "Name": "Norfolk Island"},{"Code": "MP", "Name": "Northern Mariana Islands"},{"Code": "NO", "Name": "Norway"},{"Code": "OM", "Name": "Oman"},{"Code": "PK", "Name": "Pakistan"},{"Code": "PW", "Name": "Palau"},{"Code": "PS", "Name": "Palestine, State of"},{"Code": "PA", "Name": "Panama"},{"Code": "PG", "Name": "Papua New Guinea"},{"Code": "PY", "Name": "Paraguay"},{"Code": "PE", "Name": "Peru"},{"Code": "PH", "Name": "Philippines"},{"Code": "PN", "Name": "Pitcairn"},{"Code": "PL", "Name": "Poland"},{"Code": "PT", "Name": "Portugal"},{"Code": "PR", "Name": "Puerto Rico"},{"Code": "QA", "Name": "Qatar"},{"Code": "RE", "Name": "R\u00e9union"},{"Code": "RO", "Name": "Romania"},{"Code": "RU", "Name": "Russian Federation"},{"Code": "RW", "Name": "Rwanda"},{"Code": "BL", "Name": "Saint Barth\u00e9lemy"},{"Code": "SH", "Name": "Saint Helena, Ascension and Tristan da Cunha"},{"Code": "KN", "Name": "Saint Kitts and Nevis"},{"Code": "LC", "Name": "Saint Lucia"},{"Code": "MF", "Name": "Saint Martin (French part)"},{"Code": "PM", "Name": "Saint Pierre and Miquelon"},{"Code": "VC", "Name": "Saint Vincent and the Grenadines"},{"Code": "WS", "Name": "Samoa"},{"Code": "SM", "Name": "San Marino"},{"Code": "ST", "Name": "Sao Tome and Principe"},{"Code": "SA", "Name": "Saudi Arabia"},{"Code": "SN", "Name": "Senegal"},{"Code": "RS", "Name": "Serbia"},{"Code": "SC", "Name": "Seychelles"},{"Code": "SL", "Name": "Sierra Leone"},{"Code": "SG", "Name": "Singapore"},{"Code": "SX", "Name": "Sint Maarten (Dutch part)"},{"Code": "SK", "Name": "Slovakia"},{"Code": "SI", "Name": "Slovenia"},{"Code": "SB", "Name": "Solomon Islands"},{"Code": "SO", "Name": "Somalia"},{"Code": "ZA", "Name": "South Africa"},{"Code": "GS", "Name": "South Georgia and the South Sandwich Islands"},{"Code": "SS", "Name": "South Sudan"},{"Code": "ES", "Name": "Spain"},{"Code": "LK", "Name": "Sri Lanka"},{"Code": "SD", "Name": "Sudan"},{"Code": "SR", "Name": "Suriname"},{"Code": "SJ", "Name": "Svalbard and Jan Mayen"},{"Code": "SZ", "Name": "Swaziland"},{"Code": "SE", "Name": "Sweden"},{"Code": "CH", "Name": "Switzerland"},{"Code": "SY", "Name": "Syrian Arab Republic"},{"Code": "TW", "Name": "Taiwan, Province of China"},{"Code": "TJ", "Name": "Tajikistan"},{"Code": "TZ", "Name": "Tanzania, United Republic of"},{"Code": "TH", "Name": "Thailand"},{"Code": "TL", "Name": "Timor-Leste"},{"Code": "TG", "Name": "Togo"},{"Code": "TK", "Name": "Tokelau"},{"Code": "TO", "Name": "Tonga"},{"Code": "TT", "Name": "Trinidad and Tobago"},{"Code": "TN", "Name": "Tunisia"},{"Code": "TR", "Name": "Turkey"},{"Code": "TM", "Name": "Turkmenistan"},{"Code": "TC", "Name": "Turks and Caicos Islands"},{"Code": "TV", "Name": "Tuvalu"},{"Code": "UG", "Name": "Uganda"},{"Code": "UA", "Name": "Ukraine"},{"Code": "AE", "Name": "United Arab Emirates"},{"Code": "GB", "Name": "United Kingdom"},{"Code": "US", "Name": "United States"},{"Code": "UM", "Name": "United States Minor Outlying Islands"},{"Code": "UY", "Name": "Uruguay"},{"Code": "UZ", "Name": "Uzbekistan"},{"Code": "VU", "Name": "Vanuatu"},{"Code": "VE", "Name": "Venezuela, Bolivarian Republic of"},{"Code": "VN", "Name": "Viet Nam"},{"Code": "VG", "Name": "Virgin Islands, British"},{"Code": "VI", "Name": "Virgin Islands, U.S."},{"Code": "WF", "Name": "Wallis and Futuna"},{"Code": "EH", "Name": "Western Sahara"},{"Code": "YE", "Name": "Yemen"},{"Code": "ZM", "Name": "Zambia"},{"Code": "ZW", "Name": "Zimbabwe"}];


export default withRouter(CheckoutPage);
