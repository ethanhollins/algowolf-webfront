import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class CookiesPolicy extends Component
{

    render()
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

                <div className="banner body title">
                    <div className="banner inner">
                        COOKIES POLICY
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item legal">
                        <p>This cookies policy (“<strong>Cookies Policy</strong>”) describes the cookies and other technologies that AlgoWolf (“<strong>AlgoWolf</strong>”, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>our</strong>”) uses on its website (“Site”) and the choices that you have. This Cookies Policy forms part of our <a href="/privacy-policy">Privacy Policy</a>.</p>
                        <p>When you first visit the Site, you will be asked to consent to the use of cookies on the Site in accordance with this Cookies Policy, and if you accept we will store them on your computer.</p>
                        <p><strong>What are Cookies?</strong></p>
                        <p>Cookies are small text files containing a string of numbers and letters that are placed on your hard disk every time you visit a certain webpage. These files allow to identify your browser when you visit the same website again. Cookies can store user settings and other information. You can set your browser to reject all cookies or to notify you when you receive a cookie.</p>
                        <p>Please note however that some website features or services may not function properly without cookies. Any data collected in this manner cannot be used to individually identify website users. Cookies cannot be used to run programs or deliver viruses to your computer.</p>
                        <p><strong>How do we use Cookies?</strong></p>
                        <p>Our pages use "session" cookies to remember for example your language choices and display preferences (such as contrast color settings or font size). These cookies are deleted from your computer when you close your browser.</p>
                        <p>We also use a limited number of “persistent” cookies. These remain stored on your computer until you delete them, or until they expire, usually after a short period of time going.</p>
                        <p>We use cookies to control and improve the use of our website, collect non-personal information about our users and store your preferences and other information on your computer in order to save your time by eliminating the need to repeatedly enter the same information and to display your personalized content on your later visits to our website. This information is also used for statistical analysis to tailor content to usage patterns.</p>
                        <p>The cookie-related information is not used to identify you personally and the data collected on your browsing behavior on our website is kept in fully secure conditions.</p>
                        <p>The majority of the cookies we use are of the analytic type, which count number of users, help us to understand how they navigate our site and improve the way it works, for instance by making search results more accurate.</p>
                        <p>The data collected through cookies may include information about the IP (internet protocol) address of your device, browser type, language, operating system, the state or country from which you accessed this Site, the date and the time of a visit, the number of links you click on this Site, the functions you use on this Site, the searches you request and the data you save on this Site.</p>
                        <p>We also use certain cookies for publicity purposes, so that we can more efficiently manage the presentation of our products on other platforms where users may request services, such as Facebook.</p>
                        <p>The following sets out how we use different categories of cookies, as well as information on your options for managing the settings for the data collection by these technologies:</p>
                        <ul>
                            <li>Necessary cookies: Used to provide users with services available through the Site and to use some of its features, such as the ability to log in and access secure areas and provide pop-up notices. These cookies are essential for using and navigating the Site. Without these cookies, the basic functions of our Site would not work. Because these cookies are strictly necessary to deliver the Site and the services, you cannot refuse them.</li>
                            <li>Functionality cookies: Used to remember choices (e.g. user name, language or the region users are in) and provide enhanced, more personal features.</li>
                            <li>Performance/Analytics: Used to recognize and count the number of Site visitors, to gather statistics regarding how visitors move around the Site (including a number of page views, number of visitors, and time spent on each page) and for conversion tracking and click hotspots. This helps us improve the way our Site works and the user experience on it, for example by making sure users can find what they need easily.</li>
                            <li>Cookie used to integrate third-party services: Used to integrate third-party functionalities on the Site (such as videos, maps or social networks plug-ins).</li>
                            <li>Other third-party cookies: Some parts of the Site, including but not limited to new widgets use content provided by other websites. These third-party sites could set their own cookies. We have no control over third-party cookies. You can turn them off by disabling them on your browser (for more information, read the as described under the “How to control cookies” section below).</li>
                        </ul>
                        <p><strong>How to Control Cookies / Turning off Cookies</strong></p>
                        <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the Help pages of your web browser. Please note however, if you disable cookies or refuse to accept a request to place a cookie, it is possible that some parts of this Site will not function properly or will not work at all.</p>
                        <p><strong>Tracking Pixels</strong></p>
                        <p>Tracking Pixels are tiny graphics with a unique identifier that allows us to track usage patterns, count users who have visited a particular page, advertising impressions, and clicks, etc. Tracking pixels only collect limited information, including a cookie number, time and date of a page view, and a description of the page on which the tracking pixels resides. These tracking pixels do not carry any personal data and are only used to track the effectiveness of this Site and to show advertisements based on the user’s interests. We may use tracking pixels in connection with Google Analytics and other advertising services. The information generated relating to this site is used as necessary for various legitimate purposes, including the creation of reports about the use of this site as well as the development, testing, and improvement of services. Google will store information collected by Google services. For more information about Google’s use of data for marketing and analytics purposes, please see <a target="_blank" href="https://policies.google.com/privacy">Google’s Privacy Policy</a></p>
                        <p><strong>Changes</strong></p>
                        <p>We may change the type of third-party service providers that place cookies on the Site and amend this Cookies Policy at any time by posting the amended version on the Site. Unless additional notice or consent is required by applicable laws, this will serve as your notification of these changes.</p>
                        <p><strong>Contact Us</strong></p>
                        <p>If you have questions about this Cookies Policy or the way personal information is processed or used in connection with the use of our Software Applications or websites, please address your queries to: <a href="mailto:support@algowolf.com">support@algowolf.com</a></p>
                        <p><strong>The following documents must be read & accepted in conjunction with the above:</strong></p>
                        <p><a href="/tos"><strong>TERMS OF USE & CONDITIONS OF SERVICE POLICY</strong></a></p>
                        <p><a href="/privacy-policy"><strong>PRIVACY POLICY</strong></a></p>
                    </div>
                </section>
            
            </div>

            <div id="first-section" />

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(CookiesPolicy);
