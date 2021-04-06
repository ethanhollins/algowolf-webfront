import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faQuestionCircle
} from '@fortawesome/pro-regular-svg-icons';
import Navigation from './Navigation';
import Footer from './Footer';

class BetaTesters extends Component
{
    render()
    {
        return (
            <div className="dark-header animsition">

            <Navigation/>

            <header className="header page-title" >
                <div className="container">
                    <div className="outer">
                        <div className="inner text-center">
                            <h1 className="">Prison Paycheck Beta Testers</h1>
                            <h5 className="">Apply for beta testing the live "Prison Paycheck" sytem.</h5>
                            <a href="mailto:admin@algowolf.com" className="btn se-btn-black btn-rounded mt20">Apply to become a Beta Tester Today</a>

                        </div>
                    </div>
                </div>
            </header>

            <section className="se-section beta-testers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Please read the following carefully to ensure you understand how to properly setup your platform.</h4>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">To Get Started</h4>
                            <p>Logon to the main <a href="/login" target="_blank">AlgoWolf App</a> through the <strong>LOG IN</strong> tab in the top right of the toolbar.</p>
                            <p>Here you will find the live trading section of our app.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">To Connect To Your Broker</h4>
                            <ol type="1">
                                <li>Click on the Menu icon in the top left corner.</li>
                                <li>Select “My Brokers”.</li>
                                <li>Click on “Add Broker” on the left of the popup.</li>
                                <li>Select a broker you have an account with and then scroll to the bottom to click on the “Connect” button.</li>
                                <li>After logging in to your broker, on the authentication page select the accounts you wish to trade with (Note: If adding multiple accounts be sure to note the account type & its number to easily identify them at step 7.</li>
                                <li>Once the connection process is complete; Next to the Menu icon you will find a User icon with “papertrader” next to it. To switch accounts, click on the dropdown and select your new broker’s account.</li>
                                <li>Now go back into the “My Brokers” settings page where you can add your own description to your broker’s account to make it easy to identify. Be sure to clearly identify between Demo and any Live account you may have added.</li>
                            </ol>
                            <h5>Broker Notes</h5>
                            <ol type="a">
                                <li>As this is a beta version of the strategy, currently only cTrader brokers are available to be used for live and demo trading. These include IC Markets, Pepperstone, FxPro, Fondex etc. (Short list: <a href="https://ct.icmarkets.com/" target="_blank">https://ctrader.com/featured-brokers/</a> - Google to find others or check your broker)</li>
                                <li>FXCM, Oanda and Interactive Brokers should all be available soon, with more to come.</li>
                                <li>MetaTrader accounts are not currently compatible with our platform although the broker itself may provide an account that is. For example, if your broker is IC Markets you would need to use their cTrader account not the MetaTrader version.</li>
                                <li>For this scalping type plan we suggest you find a broker who provides a raw or minimal spread account to help prevent entry and stop orders being executed prematurely. Low commission fees would be good too.</li>
                            </ol>
                            <p><strong>HINT:</strong> Your platform has an in-house account called "Paper Trader" which allows you to watch & record the trading setups live, although no actual trades are placed with a broker.</p>
                            <p>However, here is a quick way to open a broker's Demo account to use with AlgoWolf...</p>
                            <p>Go to <a href="https://ct.icmarkets.com/" target="_blank">https://ct.spotware.com/</a>. Pop in your email and a password and you're away.</p>
                            <p>If you prefer to use a specific broker from the cTrader group, go to their page to find their cTrader platform or just insert their name into the link instead ie. For IC Markets you would go to <a href="https://ct.icmarkets.com/" target="_blank">https://ct.icmarkets.com/</a></p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">Setting Strategy Inputs (Follow this carefully as these fields determine your position size, risk and margin requirements)</h4>
                            <ol type="1">
                                <li>Select the account you wish to set the Strategy Inputs.</li>
                                <li>Click on “Control Panel” next to the “Chart Info” header on the left of the screen.</li>
                                <li>
                                    Here you can change the various inputs that are currently available.
                                    <ol type="a">
                                        <li><strong>Broker’s Bank:</strong> This field is automatically taken from the balance of the account you have with your broker. (This currently converts your bank into $US dollars & updates whenever you refresh or log-in)</li>
                                        <li><strong>Maximum Bank:</strong> This variable allows you to limit the size you want your “Total Bank” balance value to be when determining your position size. Useful for when you want to use less than your “Broker’s Bank” balance to calculate your position size or as a failsafe maximum if you put the incorrect value in the “External Bank” or “Fixed Bank” sections.</li>
                                        <li><strong>External Bank:</strong> This number is added to your “Broker’s Bank” balance (i.e. Broker’s Bank + External Bank = Total Bank Size). This allows you to create an artificial bank size without needing the additional funds to be held in your broker’s account except for sufficient to cover any margin. (This field is generally left blank)</li>
                                        <li><strong>Fixed Bank:</strong> This value overrides both “Broker’s Bank” and “External Bank”. With Fixed Bank enabled, it will ensure your position sizes are always determined by this bank size. (This field is generally left blank)</li>
                                        <li><strong>Total Bank:</strong> This is the final value upon which your trade position size is calculated in conjunction with your selected “Risk”. (ie Total Bank = Brokers Bank + External Bank overridden by Maximum Bank or Fixed Bank where applicable)</li>
                                        <li><strong>Risk (%):</strong> This number determines your position size risk as a percentage of your “Total Bank”. E.g. If you want your position size risk to be half-a-per-cent of your “Total Bank”, set this to 0.5  Your total risk in $US dollars is then shown in “$Risk”. Currently the maximum risk you can select is 2% (See Strategy notes)
                                            <br/><strong style={{fontWeight: 500}}>Alternatively:</strong> you may enter a $US amount here which will then adjust your “Risk %” field.</li>
                                        <li><strong>Start Time & End Time:</strong> This determines the start and end time of the daily trading session.</li>
                                    </ol>
                                </li>
                                <li>
                                    <strong>Important:</strong> Ensure you click on the Update button to save your changes. The update button will appear orange at the bottom of your screen when you have made any unsaved changes. When the update button is greyed out, that means the changes have been saved and you’re ready to start the script.
                                    <h5>Strategy Input Notes</h5>
                                    <ol type="a">
                                        <li>All bank values are expressed in $US dollars</li>
                                        <li>Ensure at all times you hold sufficient funds in your “Brokers Bank” to cover any margin as required by your “Total Bank” calculation & selected “Risk” otherwise your orders will be rejected by your broker.</li>
                                        <li>Ensure your “Total Bank” calculation is sufficient to place the minimum lot size order with your broker otherwise your order will be rejected.</li>
                                        <li>Strategy inputs need to be set up individually for each account you wish to trade.</li>
                                        <li>Currently only one account at a time may be selected to trade with.</li>
                                        <li>The platform is currently limiting the maximum risk you can take to 2% of your “Total Bank”. This is done to avoid accidentally setting a large number and potentially wiping out your bank if the trade fails. This may be varied in the future depending on the feedback we get. (Taking less than 1% risk on a trade is often considered prudent money management)</li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">To Start/Stop the Script</h4>
                            <ol type="1">
                                <li>Select the account you wish to start the script on.</li>
                                <li>Click on “Start”</li>
                                <li>Once the script has started you will see “Strategy running”</li>
                                <li>Click on “Stop” to stop the script.</li>
                                <li>“Strategy Stopped” will be visible once the trading script has stopped.</li>
                            </ol>
                            <p><strong style={{fontWeight: 500}}>* It is important you check that each account (inc."Paper Trader") has been “Stopped”  before attempting to “Start” another (currently only one account may be ran at a time)</strong></p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">Some Other IMPORTANT Points</h4>
                            <ul style={{listStyleType: "disc"}}>
                                <li>It is advised you ensure no previous positions are open and no orders pending on the account you wish to trade prior to starting the script. Keep the account exclusively for algo use.</li>
                                <li>The script only trades within the trading session times that have been set via the “Control Panel” and will automatically restart trading between those times when the next session begins the following day. This means you do not have to restart the script manually every trading session.</li>
                                <li>The script will continue to trade each session, every day and every week until you Click on “Stop” to stop the script.</li>
                                <li>Your Broker’s platform does not need to be open for trades to be placed and you may also close the AlgoWolf platform and your computer as the script will continue to run in the background... just be sure to remember you have it switched on!</li>
                                <li>Go to Chart "Help" to learn how to read the various chart symbols.</li>
                                <li>From time to time it may be necessary for us to close down trading during a session to update the platform. Any open position would continue to trade until either the set stop loss or profit target hit. Alternatively you can manage your position through your brokers platform. Generally any updates will be scheduled out of trading hours. In some cases this may mean you will need to restart the script.</li>
                                <li>During this testing stage we strongly advise you use your brokers Demo account to prevent any significant loss of real funds in case of system error. At  ALL times you are solely responsible for ensuring any live trades made through our platform are within your risk profile in case of full loss of funds.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">We’re looking for feedback on areas such as</h4>
                            <ul style={{listStyleType: "disc"}}>
                                <li>Platform Usability inc.</li>
                                <li>Adding your Broker</li>
                                <li>Comprehension of the Control Panel</li>
                                <li>Starting the Script</li>
                                <li>Tracking live progress of the Plan</li>
                                <li>Chart Information (chart info/chart drawings)</li>
                                <li>Ease of Navigation</li>
                                <li>Any Platform or Charting Bugs</li>
                                <li>Entry, Stop & Target Orders placed correctly</li>
                                <li>Executes correct Position or Lot Sizing according to your Total Bank and selected Risk</li>
                                <li>Any Unusual or Unexpected Plan Activity</li>
                                <li>Any Setups or Positions that don’t seem to follow the Holy Grail Rules</li>
                                <li>Additional Brokers you’d like to have added</li>
                                <li>Any other Suggestions or Improvements</li>
                            </ul>
                            <p>Please send your comments to <a href="mailto:admin@algowolf.com">admin@algowolf.com</a></p>
                            <h5>Let us know if anything is unclear and thank you for taking the time to evaluate our platform.</h5>
                            <h5>We look forward to working with you and wish you the best of success.</h5>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

            </div>
        );
    }

}

export default BetaTesters;