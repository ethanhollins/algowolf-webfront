import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class FAQ extends Component
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
                        FAQ
                    </div>
                </div>

                <section id="faq-body" className="se-section section">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">Getting Started</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading40-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse40-12" aria-expanded="false" aria-controls="collapse40-12">Should I withdraw profits daily or weekly? Can I quit my job? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse40-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading40-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>This question is at the top for a reason.</p>
                                                <p>No problem of course with taking out any profits <em>whenever</em> you want (unless you want to compound them)… but <strong>if you’re expecting consistent weekly income you’re probably in the wrong game and should stop now!</strong></p>
                                                <p>Trading is much like the seasons of the year… sometimes long periods of gloom punctuated by days of glorious sunshine.</p>
                                                <p>Professional traders generally gauge performance quarterly or over longer periods to allow for these cycles… while keeping a watch during the slow times to ensure the expected maximum drawdowns are not unreasonably exceeded. (See <a href="/getting-started">Getting Started</a> guide for instructions on how to set “Drawdown Limit”)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading18-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse18-12" aria-expanded="false" aria-controls="collapse18-12">Why didn't HG Pro take any trades this week? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse18-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading18-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Assuming your script was turned on; some weeks HG Pro won't take any trades at all if it thinks they're rubbish. HG Pro is programmed to only take what it has identified as the highest probability setups and has the patience to wait for them to come around.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading1-12">
                                            <h6 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse1-12" aria-expanded="false" aria-controls="collapse1-12" className="trans collapsed">How does HG Pro differ from the conventional Holy Grail Strategy? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse1-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Broker commission fees are a significant expense of the original Holy Grail strategy due to the high volume of short range trades taken and the associated higher position sizing of these types of trades (See “Results Calculator”).</p>
                                                <p>To solve this we needed to substantially cut down on the number of underperforming trades and only go with setups that exhibited the highest risk/reward potential.</p>
                                                <p>Areas of change we identified included;</p>
                                                <ul>
                                                    <li>Eliminated or restricted some Confirming Evidence types such as B/B to achieve more profitable outcomes</li>
                                                    <li>Added an additional time frame (5min) for increased opportunities on the higher probability setups</li>
                                                    <li>Extended the trading session by several hours to take advantage of both the European and New York sessions.</li>
                                                    <li>Restricted some Entry types to their most profitable session time</li>
                                                    <li>Increased the minimum stop range to 4 pips to help lower expensive commission fees</li>
                                                    <li>Increased the maximum target range on some trades to 3R for much higher profits</li>
                                                    <li>Implemented a customized Trailing Stop to lock in profits</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading2-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse2-12" aria-expanded="false" aria-controls="collapse2-12">How do I set up my automated account? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse2-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>See the <a href="/getting-started">Getting Started</a> guide for step by step instructions.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading3-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse3-12" aria-expanded="false" aria-controls="collapse3-12">How is "Tradable Bank" calculated on my subscription plan? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse3-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3-12" aria-expanded="false">
                                            <div className="panel-body">
                                                <p>Your subscription plan comes with a maximum allowable Tradable Bank.</p>
                                                <p>The Standard Plan is US$50K @ 1% risk. This means the maximum $risk you may take on any one trade is 50,000 x 1% = $500</p>
                                                <p>The Professional Plan is US$100K @ 1% risk. This means the maximum $risk you may take on any one trade is 100,000 x 1% = $1,000</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading4-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse4-12" aria-expanded="false" aria-controls="collapse4-12">How do I allocate my allowed "Maximum Bank" between accounts? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse4-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The Standard subscription automatically allocates your “Maximum Bank” of US$50K to which ever account you’re currently using to trade with as only one trading account may be used at a time.</p>
                                                <p>A Professional subscription however allows up to 5 simultaneous live accounts to operate at once which means your trading capital limit of US$100K must be split between the accounts you wish to use.</p>
                                                <p>When you first add a Broker account to your Dashboard the “Maximum Bank” field on your “Control Panel” is by default set to “0”.</p>
                                                <p>You then decide how your 100K trading bank limit is split between your accounts. For example you might set your accounts like this.</p>
                                                <p>
                                                    Account 1 Maximum Bank: $45K<br/>
                                                    Account 2 Maximum Bank: $20K<br/>
                                                    Account 3 Maximum Bank: $20K<br/>
                                                    Account 4 Maximum Bank: $15K<br/>
                                                    Account 5 Maximum Bank: $0 (not used)<br/>
                                                    <strong>Total $100K</strong>
                                                </p>
                                                <p>If later on you wish to <em>increase</em> the “Maximum Bank” allowed for Account 1 you will first need to <em>decrease</em> the “Maximum Bank” value of one of the other accounts even if those accounts are switched off.</p>
                                                <p>NOTE1: If your actual Broker’s account balance is <em>less</em> than the allocated “Maximum Bank” value then your position size is based on your Broker’s account value.</p>
                                                <p>If your actual Broker’s account balance is <em>greater</em> than the “Maximum Bank” value then your position size is based instead on your “Maximum Bank” value.</p>
                                                <p>NOTE2: Simply switching “off” an account does <em>not</em> make its “Maximum Bank” allocation available for use for other accounts. Any changes must be made manually through the “Control Panel” for that account.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading5-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse5-12" aria-expanded="false" aria-controls="collapse5-12">What is the "Flexible Risk Option" and how is it calculated? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse5-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The “Flexible Risk” option of the Professional subscription allows you to maintain the same level of $risk using a much smaller bank size.</p>
                                                <p>To explain; The Professional subscription allows you to take a maximum $risk per trade of US$1,000 (100,000 x 1%). To trade at this maximum $risk of $1000 means you would ordinarily need to have at least US$100K sitting in your brokers account.</p>
                                                <p>However, the Professional subscription comes with a flexible risk option of up to 5%. This means if you have <em>less</em> than 100K sitting in your account you may still take the full $1,000 risk by simply <em>increasing</em> your %Risk exposure (up to 5%) while simultaneously <em>decreasing</em> your bank size. See example below;</p>
                                                <p>
                                                    <strong>100K x 1%</strong> = $1000 (max allowable risk per trade)<br/>
                                                    <strong>50K  x 2%</strong> = $1000<br/>
                                                    <strong>20K  x 5%</strong> = $1000 
                                                </p>
                                                <p>This means you can choose not to have all your funds held in your broker account yet still trade at the maximum $risk per trade allowed by your subscription.</p>
                                                <p>NOTE1: Use of this option assumes you have high margin lending (leverage) status with your broker and are allowed by law to take on higher risk.</p>
                                                <p>Your broker will disallow a position if you attempt to place a trade that is greater than the margin capacity of your trading bank.</p>
                                                <p>Use the Leverage calculator on your “Control Panel” to calculate the maximum risk you may take depending on your Broker’s margin requirements.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">Brokers</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading6-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse6-12" aria-expanded="false" aria-controls="collapse6-12">Why might a broker refuse my order if I risk more than 1% on a trade? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse6-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The reason has to do with the margin requirements imposed by your Broker and the laws of your country. E.g. Retail clients in Australia or UK are limited to a maximum of 30:1 leverage.</p>
                                                <p>Some position sizes taken by HG Pro are larger than others depending on the range from entry to the stop loss. The shorter the range the <em>greater</em> the position lot size which in turn increases the associated $ margin amount that must be held in your trading account to cover it. </p>
                                                <p><strong>This means on a 30:1 leverage any attempt to enter one of these short range positions at a risk slightly greater than 1% will most likely be disallowed by your broker.</strong></p>
                                                <p>Use the Leverage calculator on your “Control Panel” to calculate the maximum risk you may take depending on your Broker’s margin requirements.</p>
                                                <p>Generally it makes good sense to keep your risk low anyway to preserve your capital for as long as possible in the event of a sustained drawdown. In many cases it might be prudent to limit your risk to much less than 1%. </p>
                                                <p>All Standard subscriptions are limited to a maximum risk per trade of 1%.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading7-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse7-12" aria-expanded="false" aria-controls="collapse7-12">What is the minimum account size I can use? (Why isn't HG Pro suitable for accounts less than US$15K?) <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse7-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The minimum account size is whatever the smallest lot size your broker allows you to trade.</p>
                                                <p>However, we suggest HG Pro may not be suitable for retail traders with a trading bank of less than US$15K as subscription costs are more likely to outweigh any profits.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading8-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse8-12" aria-expanded="false" aria-controls="collapse8-12">Which broker should I use? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse8-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>At this stage we have no specific recommendations but offer a range to choose from on the Dashboard. From these we suggest you find one who provides a raw or minimal spread account with low commission fees. (See “Why Use A Raw Spread Broker Account”?)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading9-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse9-12" aria-expanded="false" aria-controls="collapse9-12">Why use a "Raw" spread broker account? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse9-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The wider the spread quoted by your broker the more likely you’ll prematurely hit your entry point or stop loss or miss your target profit.</p>
                                                <p>AlgoWolf uses a mid-data (no spread) feed to trigger entry and stop orders. The HG Pro System is essentially a scalping type plan with very small range between entry & stop orders.</p>
                                                <p>Because of this we suggest you find a broker who provides a tight or “raw” (minimal spread) account to help prevent your orders being executed prematurely.</p>
                                                <p>In most cases a Regular Spread Account, even with no commission fees will yield a lower overall return.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading10-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse10-12" aria-expanded="false" aria-controls="collapse10-12">How many broker accounts can I add to my dashboard? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse10-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading10-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>You may add as many as you wish that you hold accounts with. However, the subscription plan you’ve chosen will determine how many of these accounts may be run simultaneously. “Standard” subscription allows for one Broker account to be operated at a time. The “Professional” up to 5 may be simultaneously run together.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading11-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse11-12" aria-expanded="false" aria-controls="collapse11-12">Is the AlgoWolf platform compatible with MetaTrader? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse11-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>MetaTrader accounts are <em>not</em> compatible with our platform although the broker itself may provide an account that is. For example, if your broker is IC Markets you would need to use their cTrader account not the MetaTrader version.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading12-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse12-12" aria-expanded="false" aria-controls="collapse12-12">Is it possible to have trades sent on MT4 via a copier? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse12-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading12-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The AlgoWolf platform performs many complex functions to ensure the strategy runs correctly besides just generating a trade signal. We have no plans to run signal services for other platforms that may compromise this process.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading13-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse13-12" aria-expanded="false" aria-controls="collapse13-12">What else can I do to lower my broker's commission fees? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse13-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Some brokers offer rebates on their fees or discounted commission on volume so shop around.</p>
                                                <p>There’s also Introducing Brokers who offer rebates of up to 60% or more on a range of brokers if you sign up through them. Check their terms & conditions regarding withdrawals etc. Some require the trade orders to be routed through them <strong>which may not be compatible with our platform.</strong> (Check with us first: support@algowolf.com )</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading14-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse14-12" aria-expanded="false" aria-controls="collapse14-12">Will more brokers be added in the future? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse14-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading14-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Yes. Other Broker accounts will be added from time to time once the process of testing their Application Programming Interface (API) has been completed. Not all brokers have this capability or have suitable interfaces compatible with the demands of our platform.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">Platform</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading15-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse15-12" aria-expanded="false" aria-controls="collapse15-12">How often do I need to monitor this account or is it completely hands-off automation? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse15-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading15-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Although completely automatic we’d recommend you check in daily or at least weekly to ensure everything is running properly and to check your “Control Panel” settings for each account.</p>
                                                <p>It is advised you periodically check if your script is still running. Restart if necessary.</p>
                                                <p>Regularly check your broker’s statements to ensure all trade records are correct.</p>
                                                <p>The script automatically trades during the session times programmed in the algorithm and will automatically restart trading those times when the next session begins the following day or after the weekend.</p>
                                                <p>This means you do not have to restart the script manually every trading session.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading16-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse16-12" aria-expanded="false" aria-controls="collapse16-12">Once it's running may I switch off my computer? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse16-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading16-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Yes you may. The AlgoWolf script will continue to run in the background on our servers and neither does your Broker’s platform need to be open for trades to be placed. (Don’t forget you have it switched on though)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading17-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse17-12" aria-expanded="false" aria-controls="collapse17-12">How do I compound my profits? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse17-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading17-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>AlgoWolf automatically compounds your available bank position sizing at the commencement of every session unless restricted by your “Control Panel” inputs such as “Fixed Bank” or “Maximum Bank”.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading19-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse19-12" aria-expanded="false" aria-controls="collapse19-12">What instruments are traded? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse19-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading19-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Currently the HG Pro strategy is optimised for the volatility of the EUR/USD pair. If we find other currency pairs or instruments which are suitable using this strategy we will let you know.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading20-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse20-12" aria-expanded="false" aria-controls="collapse20-12">What is the difference between the Live Demo Charts Platform and the HG Pro Automated Trading Platform? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse20-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading20-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>On the Demo Charts you can watch & revise trade setups that happen in real time pertaining to the original Holy Grail (aka Prison Paycheck) system, whereas on the Automated Platform you can automatically trade real positions in real time using the upgraded HG Pro strategy.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading21-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse21-12" aria-expanded="false" aria-controls="collapse21-12">What charting platform does AlgoWolf use? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse21-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading21-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>AlgoWolf has developed its own in-house charting platform which is designed to work in conjunction with the trading script.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading22-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse22-12" aria-expanded="false" aria-controls="collapse22-12">Is the underlying algo code available for review? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse22-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading22-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>As we are a commercial operation this is not available for the general public. The operational logs however are shown on the platform.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading23-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse23-12" aria-expanded="false" aria-controls="collapse23-12">What is "Paper Trader"? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse23-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading23-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>"Paper Trader" is an in-house Demo account which allows you to watch & record the trading setups live although no actual trades are placed with a broker. It uses a mid-price data feed to execute the trades but does not allow for any broker spread etc when it comes to actually hitting entry, stop & target points.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading24-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse24-12" aria-expanded="false" aria-controls="collapse24-12">How does "Paper Trader" differ from a broker's demo account? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse24-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading24-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Not much. The advantage of using a Brokers Demo account over a "Paper Trader" is you get a feel for how spread and slippage may affect your trades plus you get to see the hypothetical profit/loss dollar results in your Demo account. (Having said that we rarely see a demo account slipped)</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">Trading</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading25-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse25-12" aria-expanded="false" aria-controls="collapse25-12">What is "R"? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse25-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading25-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>“R” refers to the profit and the risk per trade you’re prepared to take as a percentage % of your total trading bank.</p>
                                                <p>i.e. You might decide that 1% is the maximum percentage you wish to risk (or lose) if a trade goes against you. In this case 1% is your “R” value. If your trading bank is $10,000 then you will risk $10,000 X 1%= $100 per trade. Therefore if your stop is hit you will lose 1% of your trading bank or $100 (plus any slippage and commission fees). </p>
                                                <p>On the other hand if your 1R profit target is hit you will gain 1% of your trading bank or $100.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading26-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse26-12" aria-expanded="false" aria-controls="collapse26-12">What is "slippage"? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse26-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading26-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Slippage is the difference between the value of the order you placed and the actual fill the broker gives you for that order.</p>
                                                <p>On rare occasions this can work in your favor if the broker gives you a better fill on your order.</p>
                                                <p>Slippage is recorded on AlgoWolf’s “System Results” page on the Automated Platform.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading27-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse27-12" aria-expanded="false" aria-controls="collapse27-12">Why don't you use Market Orders instead of Stop & Limit Orders? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse27-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading27-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>We use stop orders to help ensure our target range remains within the strategies High & Tight requirements and to receive our full desired profit total if hit. The further your entry is pushed out by spread the further the market has to move to hit your target.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading28-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse28-12" aria-expanded="false" aria-controls="collapse28-12">Why is there a discrepancy between the AlgoWolf chart and my broker's chart? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse28-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading28-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>The discrepancy is most likely due to the spread offered by your broker. AlgoWolf uses a mid-price data feed to initiate trade orders. The wider the spread quoted by your broker the more likely you’ll prematurely hit your entry point or stop loss or miss the target.</p>
                                                <p>This is why we suggest you find a broker who provides a tight or “raw” (minimal spread) account to help prevent these orders being executed prematurely.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading29-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse29-12" aria-expanded="false" aria-controls="collapse29-12">Why is there a discrepancy between the Backtested & Live results? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse29-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading29-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Sometimes there will be discrepancies between the backtest (which uses mid-data) and live trading results. This is usually the result of your broker either “slipping” your order (See “What Is Slippage”) or the broker widening their quoted spread which can prematurely hit your entry and stop positions when the mid-data (no spread) didn’t.</p>
                                                <p>This is why we recommend using brokers who provide a tight or “raw” spread which is closer to the mid-data ideal.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading30-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse30-12" aria-expanded="false" aria-controls="collapse30-12">Do the System Results include commission and slippage? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse30-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading30-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Your Automated Trading Platform Dashboard records any slippage under “System Results”. You’ll find your commission fee totals on your broker’s statement. These details vary between brokers.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading31-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse31-12" aria-expanded="false" aria-controls="collapse31-12">Do I have to install anything? Is a VPS needed? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse31-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading31-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>No. Algowolf runs the script on its own VPS so all that is required is that you Start & Stop the script.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading32-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse32-12" aria-expanded="false" aria-controls="collapse32-12">Why won't the script start? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse32-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading32-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>First check you haven’t reached your subscription account limit. If you are on the “Standard” subscription only one account may be operated at a time. “Professional” allows up to 5 to be simultaneously run. Generally a ‘pop-up’ will remind you that you have reached your limit.</p>
                                                <p>Check which of your accounts are running (inc.”Paper Trader”) and “Stop” at least one before attempting to “Start” another.</p>
                                                <p>Once the script has started you will see “Strategy Running”. This may take 3-4 minutes to commence if it's your first time starting the script or if there are updates.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading33-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse33-12" aria-expanded="false" aria-controls="collapse33-12">I'm unable to add my broker... "Sorry, this service is not available"? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse33-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading33-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Check you’re on the dashboard of the main app and not the Demo platform. Go to <a href="https://app.algowolf.com/">https://app.algowolf.com/</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading34-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse34-12" aria-expanded="false" aria-controls="collapse34-12">I'm missing info on charts when starting up or on refresh? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse34-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading34-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Stopping & Starting the script during the trading session may cause trades and information to be missed.</p>
                                                <p>Refreshing the chart during the session may sometimes cause information on the chart’s current bar to temporarily be missing but does not affect the placing or execution of trades.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading35-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse35-12" aria-expanded="false" aria-controls="collapse35-12">What browser should I use? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse35-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading35-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Most browsers should be fine including Chrome and Edge. However, avoid IE and we are aware of a bug with Firefox.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading36-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse36-12" aria-expanded="false" aria-controls="collapse36-12">Why automated trading? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse36-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading36-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Because it is a massive trading edge to eliminate human error and the damaging cognitive bias that comes from frustration, fatigue and inexperience.</p>
                                                <p>AlgoWolf’s state-of-the art algorithms & fully automated order placement do all the work for you and are virtually impossible for even the most experienced traders to match.</p>
                                                <p>Few things are more disheartening than sitting in front of a screen for hours on end only to finish up with a series of losses as a result of stupid mistakes. I’d rather be out playing golf or having a drink with friends and let the algorithm do all the work.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">General</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading37-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse37-12" aria-expanded="false" aria-controls="collapse37-12">Can your algorithms further improve the HG Pro system? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse37-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading37-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>We frequently conduct testing and implement Machine Learning algorithms to look for ways to improve the effectiveness of this strategy. If we find something good we’ll let you know!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading38-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse38-12" aria-expanded="false" aria-controls="collapse38-12">Where can I find more automated trading strategies? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse38-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading38-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>It is intended to have a Strategies Page located on the AlgoWolf front site which will be populated with the latest trading strategies created by our Machine Learning algorithms and from other experienced traders which can be added to your Dashboard for your use.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading39-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse39-12" aria-expanded="false" aria-controls="collapse39-12">How do I make my own strategy? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse39-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading39-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>AlgoWolf is working towards becoming a general use tool for anyone to create their own Strategies and potentially monetize them. For more information on creating your own strategies, or any other general inquiries, contact the AlgoWolf team at <a href="mailto:admin@algowolf.com">admin@algowolf.com</a></p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                
                
            </div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(FAQ);
