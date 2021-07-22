import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class Tos extends Component
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
                        TERMS OF USE & CONDITIONS OF SERVICE POLICY
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item legal">
                        <p><strong>By accessing <a href="/">https://algowolf.com</a> or using any product or service provided by AlgoWolf, you acknowledge and accept these Terms of Use & Conditions in full.</strong></p>
                        <p>You are not permitted to use AlgoWolf’s website or services unless you accept all of the terms and conditions stated on this page.</p>
                        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. </p>
                        <p>These Terms of Use apply to all visitors, users, and others who access or use the Service.</p>
                        <p>These terms and conditions (“Terms of Service”) describe the terms and conditions that AlgoWolf (“Author”, “we”, “us”or “our”) uses on its Website (“Site”, “Marketplace” “our product“, “the product“, “our service“, or “the service“) and the choices You (“Client”, “Customer”, “User”) have.</p>
                        <p>In our Terms of Use, the terminology “AlgoWolf“, “our product“, “the product“, “our service“, and “the service“ indicates any and all the products and services offered by AlgoWolf, including the website, algorithmic script, trading platform, any training course, training materials, videos published by us, and all content as well as software associated with our company.</p>
                        <p><strong>Your Account:</strong></p>
                        <ul>
                            <li>The account you register with AlgoWolf is for personal use only and you may not share your account details or log in credential with any other individuals.</li>
                            <li>You may not create an account under someone else's name on our website or platform. If we find any user impersonating another account, their access to our products and services will be terminated.</li>
                            <li>The user shall assume full responsibility for any activity that occurs through their account on our system.</li>
                            <li>We are entitled to put your account on hold or deny you access to our products and/or services if we find any suspicious activity that occurs from you or within your account. Your access to our platform may also be jeopardized if we find that you do not comply with or violate our Terms of Use, Privacy Policy, and other conditions posted by us.</li>
                        </ul>
                        <p><strong>Your Limited User License:</strong></p>
                        <ul>
                            <li>You may not republish post, transmit or otherwise distribute the Author Content to online bulletin and message boards, blogs, chat rooms, intranets or anywhere else without our consent. You further agree not to create abstracts from or extract any portion of Author Content, for use on another website or service. Any other copying, distribution, storing, or transmission of any kind, or any commercial use of Author Content, is prohibited without Author’s prior written permission. No subscriber or other user is allowed to copy, sell, license, modify, distribute, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit, create any of the materials or Author Content on our site or any derivative works from or use the Author Content, in whole or in part, except as is expressly authorized by these terms and conditions.</li>
                        </ul>
                        <p><strong>Subscription Plans:</strong></p>
                        <ul>
                            <li>By ordering any subscription on <a href="/">https://algowolf.com</a> (including any with a free trial period), you confirm that you have read and accepted our Terms of Use and you authorize AlgoWolf to automatically charge your bank card according to the billing period selected by you.</li>
                            <li>Your subscription at AlgoWolf will continue until terminated. Unless you cancel your subscription before your billing cycle ends, you authorize us to charge the subscription fee according to your subscription plan for the next billing cycle to your payment method saved on our system.</li>
                            <li>If a trial plan is not cancelled before its expiration date, it automatically converts to a monthly or annual paid plan depending on the user’s choice.</li>
                            <li>We may change our subscription plans, its accompanying features and offers, and the pricing plans from time to time. You will be notified within 7 days if any changes apply to you.</li>
                        </ul>
                        <p><strong>Cancellation of service:</strong></p>
                        <ul>
                            <li>You may cancel your AlgoWolf subscription at any time from the Billing section in your account settings on our website. You will continue to have access to our product or service until the end of your billing period and you won't be billed for the subsequent months.</li>
                            <li>Users may cancel their subscription any time before a free trial ends or before the next billing cycle.</li>
                            <li>It's your sole responsibility to evaluate the merits of any trial period given and make an educated decision about keeping or cancelling the subscription. </li>
                            <li>We reserve the right to refuse service to anyone at any time for any reason. This includes access to our website, algorithmic software and trading platform.</li>
                        </ul>
                        <p><strong>Payment:</strong></p>
                        <p>When you purchase any subscription to our products you can pay using one of the major credit or debit cards for secure & fast payment. We use the services of secure payment providers to bill for our products online. These companies will have access to your personal and payment information. </p>
                        <p>When paying by card, we do not ever have any access to your card details.</p>
                        <p>The third party payment gateway company we use is <a target="_blank" href="https://www.nab.com.au/">NAB Transact</a>. We share information with these companies only to the extent necessary for the purposes of processing payments you make via our marketplace.</p>
                        <p><strong>Failed Payments:</strong></p>
                        <p>Failed payments will automatically revoke your access to the subscribed algorithm. </p>
                        <p>The system will retry the charge for a total of 5 days after the initial payment attempt unless you cancel the subscription from the dashboard on our website. </p>
                        <p>Your subscription will be cancelled if the system is not able to capture the payment within 5 days. </p>
                        <p>You can update your payment method or card details in the Billing section in your account settings to prevent the automatic cancellation.</p>
                        <p><strong>Chargebacks:</strong></p>
                        <p>You hereby agree to not process any chargebacks on your purchase from AlgoWolf, rather speak to the AlgoWolf support team at <a href="mailto:support@algowolf.com">support@algowolf.com</a> to resolve any issue.</p>
                        <p>In no event shall AlgoWolf be accountable for any financial losses or costs from the use of any of our software or Algorithms. Any chargeback initiated by the customer will be investigated to the fullest extent, and that customer will no longer be able to purchase any items from our company. </p>
                        <p>Any additional purchases will be refunded immediately. Do not attempt to make any fraudulent purchases. If we receive any fraudulent chargebacks, we will immediately deactivate your account and prosecute to the fullest extent of the law.</p>
                        <p><strong>Refund Policy & Terms:</strong></p>
                        <p>We offer a 14-day refund option for any software or algorithmic products that state on the product page the words <strong>14-Day Refund Option.</strong></p>
                        <p><strong>After the 14-day period, the customer will no longer be eligible to receive a refund.</strong></p>
                        <p>This means if you purchase a product or subscription plan and you are unhappy with it, as long as it is within 14-days of the initial purchase date we will issue a refund minus any refund fees.</p>
                        <p>On the same day that we action your refund the product will be deactivated and you will no longer be able to use it.</p>
                        <ul>
                            <li>If you wish to request a refund send an email requesting a refund within the prescribed 14-day period to:  <a href="mailto:support@algowolf.com">support@algowolf.com</a></li>
                        </ul>
                        <p><strong>Refund Limitations</strong></p>
                        <p>In order to protect ourselves against fraud and misuse, the following limitations apply which make refunds void and not possible.</p>
                        <ul>
                            <li>The 14-day refund option is ONLY available to the first or initial payment of a product or subscription plan.</li>
                            <li>If a customer has use of a trial period of a product and then goes ahead and subscribes to it, they will NOT be able to request a refund.</li>
                            <li>A refund request <strong>is not available</strong> for products that have been previously refunded by the customer and again purchased at a later date.</li>
                            <li>Any product that states it is <strong>non-refundable</strong> on the product page.</li>
                            <li>Free & trial downloads cannot be refunded.</li>
                        </ul>
                        <p>After the 14-day refund period, refunds or account credits will not be issued for situations as follows:</p>
                        <ul>
                            <li>You have changed your mind about your using our product and service;</li>
                            <li>You purchased our subscription plan by mistake;</li>
                            <li>You do not have sufficient expertise to use our system;</li>
                            <li>You forgot to cancel your subscription before the trial period ended;</li>
                            <li><strong>You forgot to cancel your subscription before your next billing cycle;</strong></li>
                            <li>You did not activate the algorithm in time before your trial or current subscription cycle finishes; or</li>
                            <li>You experience dissatisfaction with our system after purchase.</li>
                        </ul>
                        <p><strong>Refund Fees</strong></p>
                        <ul>
                            <li>The transactional fee charged by our payment provider to process the payment will not be returned. This is the fee the payment provider is charged by the banks to process the payment. There is also a 5% administration fee deducted from the total price of the subscription purchase that we charge to process the refund.</li>
                        </ul>
                        <p><strong>How Long Do Refunds Take?</strong></p>
                        <ul>
                            <li>We usually action a refund within 24 hours from when we receive instructions from you to cancel the order. If you paid with your credit or debit card then it can take 5-10 business days to reach your account.</li>
                        </ul>
                        <p><strong>Support:</strong></p>
                        <ul>
                            <li>All customers who have purchased a subscription to our products are entitled to full product support and can contact us at <a href="mailto:support@algowolf.com">support@algowolf.com</a></li>
                            <li>The service level we provide is a 24 hour response time, but during busy periods this may be longer.</li>
                            <li><strong>Non-Paid Software Product Support</strong> - All customers who have use of any demo, free or trial products will have limited support only. </li>
                            <li>We do not provide the source code for any of our algorithmic or digital products unless otherwise stated on the product page.</li>
                            <li>We do not offer any form of modifications to our algorithmic products except those which are available on your account’s dashboard or Control Panel</li>
                            <li>We do not provide a free service for configuring the customer's accounts for use with any of our algorithmic software; instead we provide content on the website to help the customer. If the customer cannot configure these accounts then we offer a paid service to do this for them.</li>
                            <li>If there is a communication issue with the customer where we cannot provide support then AlgoWolf reserves the right to refund the full amount that the customer paid and deactivate the product, we will also no longer provide any continued support.</li>
                            <li>All our products are distributed and licensed on an “as is” basis and no warranties, guarantees, or promises of any kind by AlgoWolf as to their performance, reliability or suitability to any given task.</li>
                        </ul>
                        <p><strong>Maintenance:</strong></p>
                        <ul>
                            <li>We will, to a reasonable extent, maintain our software and keep any other related systems up to date. We and/or any relevant third party may perform maintenance from time to time which includes shutting down, restarting and/or refreshing the servers to ensure, or procure to ensure the effective and efficient operation of the software. These actions may cause the software to be inaccessible and/or inoperative for a period of time, therefore you accept that we will bear no responsibility for any loss, including financial loss and/or opportunity due to maintenance and/or any action or omission of AlgoWolf and/or any third-party software provider.</li>
                        </ul>
                        <p><strong>Warranty Disclaimer</strong></p>
                        <p>This site and the content, products, and services on this site, software, and all Author Content are provided on an “as-is” and “as available” basis, with no warranties of any kind, whether express or implied. To the fullest extent permissible pursuant to applicable law, the author disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. The author does not represent or warrant that the functions contained in the site will be uninterrupted or error-free, that the defects will be corrected, or that this site or the server that makes the site available are free of viruses or other harmful components.</p>
                        <p>The author does not make any warranties or representations regarding the use of the materials in this site in terms of their correctness, accuracy, adequacy, usefulness, timeliness, reliability or otherwise. Some states do not permit limitations or exclusions on warranties, so the above limitations may not apply to you. In such states, our liability and that of our third-party content providers will be limited to the greatest extent permitted by law.</p>
                        <p><strong>Electronic Trading Risks</strong></p>
                        <p>Before you engage in transactions using an electronic system, you should carefully review the rules and regulations of the exchanges offering the system and/or listing the instruments you intend to trade. Online trading has inherent risk due to system response and access times that may vary due to market conditions, system performance and other facts. You should understand these and additional risks before trading.</p>
                        <p>In connection with the use of computer equipment and data, the client bears the following risks amongst other risks, in which cases you agree we bear no liability for any resulting loss from:</p>
                        <ul>
                            <li>Power cut of the equipment on the side of the client or the provider, or communication operator (including voice communication) that serves the client</li>
                            <li>Physical damage (or destruction) of the communication channels used to link the client and provider (communication operator)</li>
                            <li>Outage (unacceptably low quality) of communication via the channels used by the client, or the company of the channels used by the provider, or communication operator (including voice communication) that are used by the client or the company</li>
                            <li>Wrong or inconsistent with requirements settings of the client terminal</li>
                            <li>Untimely update of the client terminal</li>
                            <li>The use of communication channels, hardware, and software, generate the risk of no reception of a message (including text messages) by the client from the company</li>
                            <li>Malfunction or non-operability of the platform, which also includes the client terminal</li>
                            <li>The client is warned that when trading in an electronic platform he assumes the risk of financial loss which may be a consequence amongst other things:</li>
                            <li>Failure of client’s devices, software and poor quality of connection</li>
                            <li>AlgoWolf’s or client’s hardware or software failure, malfunction or misuse</li>
                            <li>Improper work of client’s equipment</li>
                            <li>Wrong settings of client’s terminal</li>
                            <li>Delayed updates to the client’s terminal</li>
                        </ul>
                        <p><strong>Further Client’s Warranties and Representations:</strong></p>
                        <p>The Client warrants and represents that You:</p>
                        <ul>
                            <li>Are carrying out and will at any time carry out any use of any algorithms on a well thought-out basis and not as gambling or a wager.</li>
                            <li>Have adequate and sufficient knowledge and understanding of the instruments and transactions to be carried on and is familiar with the regulations of the relevant markets, transactions and products;</li>
                            <li>Have thoroughly tested any algorithm, API, trading strategy, tool, function, programming code, specific order, setting or combination thereof as well as any third party software or software on the demo account, and found such to be satisfactory before use of any such on your live account.</li>
                            <li>Are in compliance with all laws to which You are subject, including, without limitation, all tax laws and regulations, exchange control requirements and registration requirements and have obtained all necessary consents, licenses, etc. from competent authorities to enter into and perform all your obligations under the Conditions or any provisions thereof;</li>
                            <li>Are not under any legal disability and are not subject to any law or regulation which would prevent You to enter into and perform all your obligations under the Conditions or any provisions thereof.</li>
                            <li>Are responsible for setting your own password in accordance with the instructions that we provide to you (which together with your email address are known as your “Account Sign In Details”) as well as keeping all information in your Account confidential. </li>
                            <li>You must notify us immediately if you know or suspect that any Person has accessed or may access your Account, or any information you hold in your Account, without your permission. </li>
                            <li>Unless you notify us otherwise, we will treat any activity on or communication made from your Account as having been authorised by you and you may be liable for such activity up to the point of notification. </li>
                            <li>We may need to change or reset your password and we will notify you if we do this. </li>
                            <li>We may need to change or reset your Account Sign In Details to protect you and us against fraud. We will notify you if we do this. </li>
                            <li>You must notify us immediately if you know or suspect that any Person has obtained (or is likely to obtain) your Account Sign In Details and/or has (or is likely to have) access to your Account without our prior approval.</li>
                        </ul>
                        <p><strong>Language:</strong></p>
                        <p>This Agreement is made only in the English language. If there is any conflict in the meaning of the English language version of this Agreement and any version or translation of it in any other language, the English language version shall prevail.</p>
                        <p><strong>Typographical Errors:</strong></p>
                        <p>In the event that an Author product is mistakenly listed at an incorrect price, the Author reserves the right to refuse or cancel any orders placed for a product listed at the incorrect price. The author reserves the right to refuse or cancel any such orders whether or not the order has been confirmed and your payment method has been charged or completed. If your payment method has already been charged or completed for the purchase and your order is cancelled, the Author shall issue a credit to your payment method used in the amount of the incorrect price less any applicable fees.</p>
                        <p><strong>Indemnification:</strong></p>
                        <p>You agree to indemnify, defend, and hold harmless Author, its officers, directors, employees, agents, members, licensors and suppliers (collectively the “Service Providers”) from and against all losses, expenses, damages and costs, including reasonable attorneys’ fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your Internet account.</p>
                        <p><strong>Intellectual Property:</strong></p>
                        <p>The entire content included in this site and inclusive of all Author Content, including but not limited to text, graphics or code is copyrighted under Australian and other copyright laws and is the property of the Author.</p>
                        <p><strong>Reverse Engineering of Copyrighted Code:</strong></p>
                        <p>It is illegal to reverse engineer any of our products or algorithms that are provided without source code. Any customer found to be doing this will be banned from the website and all related support services as well as possible legal proceedings for abuse of copyright.</p>
                        <p><strong>Copyright Notice:</strong></p>
                        <p>This website, its content, algorithms and its products built are protected by International copyright laws. Reproduction and distribution of the content or any product without the written permission of the owner is prohibited.</p>
                        <p><strong>Force Majeure:</strong></p>
                        <p>Author and its suppliers shall not be liable in any respect for failures to perform hereunder due wholly or substantially to the elements, acts of God, labour disputes, acts of terrorism, acts of civil or military authority, fires, floods, epidemics, quarantine restrictions, armed hostilities, riots and other unavoidable events beyond the control of the Author or its suppliers, and the time for performance of obligations hereunder by the Author or its suppliers subject to such event shall be extended for the duration of such event.</p>
                        <p><strong>AlgoWolf reserves the right to change its Terms & Conditions:</strong></p>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms & Conditions at any time. From time to time you should check our Website to ensure any changes made are suitable for you. If required by applicable law, you will be informed of any significant changes made to the terms of service.</p>
                        <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Service.</p>
                        <p>The current version of these terms of service was modified on <strong>1st July 2021.</strong></p>
                        <p><strong>Contact:</strong></p>
                        <p>If you have any questions about these Terms, please contact us send in an email with your query at <a href="mailto:support@algowolf.com">support@algowolf.com</a></p>
                        <p>AlgoWolf is a trading name of Tymraft Pty Ltd, ACN: 006 268 131</p>
                        <p>All contents © 2021 AlgoWolf. All rights reserved.</p>
                        <p><strong>The following documents form part of the Terms & Conditions and must be read & accepted in conjunction with the above:</strong></p>
                        <p><a href="/risk-disclosure"><strong>RISK DISCLOSURE STATEMENT AND PERFORMANCE DISCLAIMER AGREEMENT</strong></a></p>
                        <p><a href="/privacy-policy"><strong>PRIVACY POLICY</strong></a></p>
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

export default withRouter(Tos);
