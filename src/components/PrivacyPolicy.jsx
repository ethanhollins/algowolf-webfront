import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class PrivacyPolicy extends Component
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
                        PRIVACY POLICY
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item legal">
                        <p>We will never sell, barter, or rent your email address to any unauthorized third party. We may use Personally Identifiable Information (for instance your name, e-mail address, street address, telephone number) subject to the terms of this privacy policy.</p>
                        <p><strong>How we gather information from users:</strong></p>
                        <p>We generally collect information that you directly provide to us through the use of electronic tools or web forms that may be transparent to our visitors via our websites or upon your request regarding our products or services,</p>
                        <p>We may collect your personal information through several different sources, including but not limited to:</p>
                        <ul>
                            <li>Website forms and registrations to software products/applications</li>
                            <li>Physical forms</li>
                            <li>Over the telephone or email</li>
                            <li>Introducing agent</li>
                            <li>Existing clients or employees</li>
                            <li>Service desk tickets</li>
                            <li>Online assistance and support</li>
                            <li>Social media and social networking</li>
                            <li>Advertising counters and identifiers on websites</li>
                        </ul>
                        <p><strong>What we do with the information we collect:</strong></p>
                        <p>Like other Web publishers, we collect information to enhance your visit and deliver more individualized content and advertising. We respect your privacy and do not share your information with anyone.</p>
                        <p>Aggregated Information (information that does not personally identify you) may be used in many ways. For example, we may combine information about your usage patterns with similar information obtained from other users to help enhance our site and services (e.g., to learn which pages are visited most or what features are most attractive).</p>
                        <p>We may use Personally Identifiable Information collected on the website to communicate with you about your registration; our privacy policy; services and products offered by this website and other topics we think you might find of interest.</p>
                        <p>Collected Information you provide to us to may be used to:</p>
                        <ul>
                            <li>Provide our services to you, including displaying your reviews, and providing you with access to your profile and our Website</li>
                            <li>Identify you as a registered user when you log in to the Website and re-visit the Website</li>
                            <li>Respond to your questions and provide related customer service</li>
                            <li>Protect our operations or those of any of our affiliates</li>
                            <li>Protect our rights, privacy, safety or property and/or that of our affiliates, you or others</li>
                            <li>Allow us to pursue available remedies or limit any damages that we sustain</li>
                            <li>License administration where applicable;</li>
                            <li>Providing technical support;</li>
                            <li>Retargeting ads;</li>
                            <li>Verify the legitimacy of your reviews or invite you to leave more reviews</li>
                            <li>For internal research and development, including improving our products and services; </li>
                            <li>Statistical analysis of product deployment, which could include analysis of trends and comparison.</li>
                        </ul>
                        <p>We may also use your information to send you promotional information, in accordance with your permission/ consent deemed granted by acceptance of these terms, about our and similar products, services and offers, events and news (which could be third party information) that we deem legitimately to be, or potentially to be, of interest to you (including through email or social media as required by applicable law).</p>
                        <p><strong>Your rights and preferences:</strong></p>
                        <ul>
                            <li>You have the right to withdraw your consent to processing information about you at any time by unsubscribing from our email campaigns.</li>
                            <li>You have the right to be informed and request access to your personal data that we are processing</li>
                            <li>You have the right to request to modify or update your personal data if it is inaccurate or incomplete</li>
                            <li>You have the right to ask us to delete your personal data</li>
                            <li>You have the right to request the temporary or permanent discontinuation of processing all or some of your personal data</li>
                            <li>You have the right to oppose at any time the processing of your personal data by us, based on reasons relating to your personal circumstance. you have the right to oppose the processing of your personal data for direct marketing purposes</li>
                            <li>You have the right to request a copy of your personal data in electronic form and to transfer this personal data to the third-party service and</li>
                            <li>You may seek access to your personal data held by us to have it rectified or erased and object to us at any time to receiving direct marketing or automated marketing from us.</li>
                        </ul>
                        <p>Your data will be held for such time as you are an active subscriber or until you request that you be removed from any marketing.</p>
                        <p>We will respond to requests to access or delete your information within 30 days. We may retain certain data contributed by You if it may be necessary to prevent fraud or future abuse, or for legitimate business purposes, such as analysis of aggregated, non-personally-identifiable data, account recovery, or if required by law.</p>
                        <p>Should you despite communicating with us feel aggrieved, you have the right to approach a supervisory authority within your jurisdiction for assistance.</p>
                        <p><strong>How We Protect Your Information:</strong></p>
                        <p>To protect Your information, we take appropriate technical, administrative, physical and procedural security measures, consistent with international information practices.</p>
                        <p>Your data is securely held on our servers and protected against any hacking attempts using modern security and we do not sell or give your data to any 3rd party marketing companies. As a customer, you have the option at any time to permanently delete your personal data from our servers.</p>
                        <p><strong>Use of Cookies</strong></p>
                        <p>This website uses cookies to better the user's experience while visiting the website, you can find out more by reading our <a href="/cookies-policy">Cookies Policy</a>.</p>
                        <p><strong>Affiliated sites, External Links and Advertisements:</strong></p>
                        <p>Although this website only looks to include quality, safe and relevant external links, users are advised to adopt a policy of caution before clicking any external web links mentioned throughout this website. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                        <p>The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should, therefore, note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.</p>
                        <p>This website expects its partners, advertisers and affiliates to respect the privacy of our users. Be aware, however, that third parties, including our partners, advertisers, affiliates and other content providers accessible through our site, may have their own privacy and data collection policies and practices. This website is not responsible for the actions or policies of such third parties. You should check the applicable privacy policies of those third parties when providing information on a feature or page operated by a third party.</p>
                        <p>While on our site, our advertisers, promotional partners or other third parties may use cookies or other technology to attempt to identify some of your preferences or retrieve information about you. For example, some of our advertising is served by third parties and may include cookies that enable the advertiser to determine whether you have seen a particular advertisement before. Other features available on our site may offer services operated by third parties and may use cookies or other technology to gather information. We do not control the use of this technology by third parties or the resulting information, and we do not accept responsibility for any actions or policies of such third parties. You should also be aware that if you voluntarily disclose Personally Identifiable Information on message boards or in chat or comment areas, that information can be viewed publicly and can be collected and used by third parties without our knowledge and may result in unsolicited messages from other individuals or third parties. Such activities are beyond the control of this website.</p>
                        <p><strong>Minors:</strong></p>
                        <p>AlgoWolf does not knowingly collect or solicit Personally Identifiable Information from or about persons under 18.</p>
                        <p>If we discover we have received any information from a person under 18 in violation of this policy, we will delete that information immediately. If you believe that we have any information from or about anyone under 18, please contact us at the address listed below. <strong>Only persons 18 years of age and older and who qualify as major emancipated persons in terms of the laws of their country, may participate or purchase our products or receive our services.</strong></p>
                        <p><strong>Changes To This Notice:</strong></p>
                        <p>We reserve the right to revise or to modify this Notice. In such event, we will post a prominent notice on this website prior to the change becoming effective. Should the change have the effect of introducing a purpose for the use of Your personal information, which would be inconsistent with this notice, and where required by applicable law, we may either notify You or provide You with an opportunity to opt-out from such use.</p>
                        <p><strong>Contacting Us</strong></p>
                        <p>You may contact us anytime by addressing your queries to: <a href="mailto:support@algowolf.com">support@algowolf.com</a></p>
                        <p><strong>The following documents must be read & accepted in conjunction with the above:</strong></p>
                        <p><a href="/tos"><strong>TERMS OF USE & CONDITIONS OF SERVICE POLICY</strong></a></p>
                        <p><a href="/risk-disclosure"><strong>RISK DISCLOSURE STATEMENT AND PERFORMANCE DISCLAIMER AGREEMENT</strong></a></p>
                        <p><a href="/cookies-policy"><strong>COOKIES POLICY</strong></a></p>
                    </div>
                </section>
            
            </div>

            <div id="first-section" />

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(PrivacyPolicy);
