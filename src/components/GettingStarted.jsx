import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class GettingStarted extends Component
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
                        Getting Started
                    </div>
                </div>

                <div className="getting-started body">
                    <section className="se-section single-feature">
                        <div className="container">
                            <div className="row">
                                <h1>
                                    1. Connecting your Broker
                                    <div className="popup getting-started header-border"/>
                                </h1>
                                <ol>
                                    <li>Click on the Menu icon in the top left of your dashboard.</li>
                                    <li>Select “My Brokers”.</li>
                                    <li>Click on “Add Broker” and select a broker you have an account with. You can connect both live and demo accounts.
                                        <ul>
                                            <li>The instructions for each broker will be provided on the page you end up on. You may be required to login, some brokers require you to generate a token.</li>
                                            <li>Follow the instructions and you should be redirected back to your Dashboard on completion.</li>
                                            <li>Note: If adding multiple accounts be sure to note the account type & its number to easily identify them later.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section className="se-section single-feature">
                        <div className="container">
                            <div className="row">
                                <h1>
                                    2. Using your Broker
                                    <div className="popup getting-started header-border"/>
                                </h1>
                                <ol>
                                    <li>
                                        You can organise your brokerage accounts by navigating back to the Main Menu button and selecting “My Brokers”.
                                        <ul>
                                            <li>Here you will see your connected brokers and options to change the broker name and account names for easy identification.</li>
                                            <li>You can also delete brokers here if required.</li>
                                        </ul>
                                    </li>
                                    <li>“Apply & Save” to make any changes.</li>
                                    <li>When you first use your Dashboard, you will find a user icon with “Papertrader” next to it. ("Paper Trader" is an in-house account which allows you to watch & record trading setups live although no actual trades are placed with a broker). To switch accounts, click on the dropdown and select your new broker’s account.</li>
                                    <li>Whenever using your Dashboard it is important to always select the correct Broker Account from the accounts menu next to the blue My Dashboard label. </li>
                                    <li>
                                        Whenever make any changes to strategy settings etc. these changes will only be applied to the account you have selected.
                                        <br/>This means if you are using multiple accounts, any changes must be made individually for each account.
                                    </li>
                                </ol>
                                <h6>Broker Notes:</h6>
                                <ul>
                                    <li>For the HG Pro plan we suggest you find a broker who provides a raw or minimal spread account to help prevent entry and stop orders being executed prematurely.</li>
                                    <li>Low commission fees are important too. (Use the “Returns Calculator” to see how much they affect your net return). In most cases a Regular Spread Account, even with no commission fees, will yield a lower return.</li>
                                    <li>Other Broker accounts will be added from time to time once the process of testing their Application Programming Interface (API) has been completed. Not all brokers have this capability or have suitable interfaces compatible with the demands of our platform.</li>
                                    <li>MetaTrader accounts are not compatible with our platform although the broker itself may provide an account that is. For example, if your broker is IC Markets you would need to use their cTrader account not the MetaTrader version.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="se-section single-feature">
                        <div className="container">
                            <div className="row">
                                <h1>
                                    3. Adding Your Strategy
                                    <div className="popup getting-started header-border"/>
                                </h1>
                                <p>On the <a href="/holygrail/info">HG Pro Info Page</a>, click on the <strong>Add to Dashboard</strong> button, and once purchased, the HG Pro strategy will be automatically added to your dashboard which you will be redirected to.</p>
                            </div>
                        </div>
                    </section>
                    <section className="se-section single-feature">
                        <div className="container">
                            <div className="row">
                                <h1>
                                    4. Control Panel
                                    <div className="popup getting-started header-border"/>
                                </h1>
                                <strong>Setting Strategy Inputs:</strong> Follow this carefully as these fields determine your position size, risk and margin requirements. At ALL times you are solely responsible for ensuring any trades made through your dashboard are within your risk profile and accept full responsibility for any loss of funds. (See <a href="/risk-disclosure">Risk Disclaimer</a>)
                                <br/>If you do not fully understand any of the following inputs do NOT use this platform.
                                <ol>
                                    <li>Select the broker account you wish to set the Strategy Inputs.</li>
                                    <li>Click on “Control Panel” next to the “Chart Info” header on the left of the screen. Here you can change the various inputs that are currently available.</li>
                                    <li>
                                        Strategy inputs need to be set up individually for each account you wish to trade.
                                        <br/>If you have purchased a “Standard Subscription”, only one account at a time may be selected to trade with.
                                    </li>
                                    <li>Note: <strong>All bank values are expressed in $US dollars</strong></li>
                                    <li>
                                        <strong>Important:</strong> Ensure you click on the Update button to save any changes. The update button will appear orange at the bottom of your screen when you have made any unsaved changes.
                                        <br/>When the update button is greyed out, that means the changes have been saved and you’re ready to start the script.
                                        <ul>
                                            <li>
                                                <strong>Broker’s Bank:</strong> This field is automatically taken from the balance of the account you have with your broker (This converts your bank into $US dollars & updates at the commencement of each trading session and is used for the entire session)
                                                <br/>At all times ensure you hold sufficient funds in your “Brokers Bank” to cover any margin as required by your “Usable Bank” calculation & selected “Risk”. 
                                            </li>
                                            <li>
                                                <strong>Fixed Bank:</strong> (This field may be left blank) This variable allows you to limit the size you want your “Usable Bank” balance value to be when determining your position size. Useful for when you want to use <em>less</em> than your “Broker’s Bank” balance to calculate your position size.
                                                <br/>With Fixed Bank enabled, it ensures your position sizes are always determined by this value but will never be greater than your “Broker’s Bank”. If your “Fixed Bank” value is greater than your “Broker’s Bank” then your “Usable Bank” calculation will default to using your “Broker’s Bank” balance.
                                                <br/>If “Fixed Bank” is <em>not</em> enabled then any gains will compound position sizes on each new trading session.
                                            </li>
                                            <li>
                                                <strong>Maximum Bank:</strong> This is the maximum bank size allowed by your subscription plan. To see how to allocate your maximum bank size for multiple simultaneous accounts see <a href="/hgpro/faq" target="_blank">FAQ</a>.
                                            </li>
                                            <li>
                                                <strong>Drawdown Limit:</strong> (This field may be left blank) If enabled, this value determines the maximum drawdown you’re prepared to allow your account to drop to in the event of a run of losses. If at the commencement of a trading session your Broker’s bank is less than the Drawdown Limit value then your trading script will be prevented from placing trades.
                                                <br/>Familiarise yourself with your strategy’s normal drawdown expectations and allow reasonable leeway (i.e. It might be 20% - 30% from the high)  Every trading strategy has its drawdown periods so chose a value that ensures you’re not prematurely taken out of the game and potentially miss out on the recovery phase.
                                                <br/>Note: Be sure to update this value if deposits or withdrawals are made to your account.
                                            </li>
                                            <li>
                                                <strong>Usable Bank:</strong> This is the value upon which your trade position size is calculated in conjunction with your selected “Risk”.
                                                <br/>(i.e. Usable Bank = Brokers Bank <em>overridden by Maximum Bank or Fixed Bank where applicable</em>)
                                                <br/>Ensure your Usable Bank” total is sufficient to place the <em>minimum</em> lot size order or you order will be rejected by your broker.
                                            </li>
                                            <li>
                                                <strong>Leverage:</strong> This value determines how much margin you are required to maintain in your account to execute the trade and controls the amount of “Risk” you may take on a trade.
                                                <br/>Obtain this setting from your Broker. This will vary between Brokers and is regulated by law in many countries. E.g. Retail clients in Australia or UK might be limited to a maximum of 30:1 leverage.
                                                <br/>Ensure you select this value correctly so your position size is properly calculated; otherwise if your margin requirements are not met your broker will disallow the trade. If in doubt use the default value of 30:1 or less
                                            </li>
                                            <li>
                                                <strong>Risk (%):</strong> This number determines your position size risk as a percentage of your "Usable Bank" and is limited by your margin requirements (See “Leverage”).
                                                <br/>E.g. If you want your position size risk to be half-a-percent of your "Usable Bank", set this to <strong>0.5</strong>. Your total risk in $US dollars is then shown in “$Risk”.
                                            </li>
                                            <li>
                                                <strong>Risk ($):</strong> This field shows your total risk in $US dollars as determined by the %value you entered in “Risk %”.
                                                <br/>Alternatively you may enter a $US amount here which will then adjust your “Risk %” field.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section className="se-section single-feature">
                        <div className="container">
                            <div className="row">
                                <h1>
                                    4. Start Trading Live
                                    <div className="popup getting-started header-border"/>
                                </h1>
                                <ol>
                                    <li>Before you start trading, always check you have selected the correct broker account you wish to trade with.</li>
                                    <li>Review the “Control Panel” information you entered for this account regarding your bank information, risk and position size and confirm any changes you make.</li>
                                    <li>Prior to starting the script ensure no previous positions are open and no pending orders are on the account you wish to trade.</li>
                                    <li>
                                        Click on <strong>“Start”</strong> - Once the script has started you will see “Strategy Running”. This may take a couple of minutes to commence.
                                        <ul>
                                            <li><strong>Note:</strong> The script automatically trades the session times programmed in the algorithm and will automatically <strong>restart</strong> trading those times when the next session begins the following day or after the weekend.</li>
                                            <li>This means you do not have to restart the script manually every trading session.</li>
                                            <li>Unless interrupted by maintenance or server issues the script should continue to trade each session, every day and every week until you click on “Stop” to stop the script.</li>
                                            <li>From time to time it may be necessary for us to close down trading during a session to update the platform. Any open position would continue to trade until either the set stop loss or profit target hit. Alternatively you can manage your position through your broker’s platform. Generally any updates will be scheduled out of trading hours. In some cases this may mean you will need to restart the script.</li>
                                            <li>It is advised you periodically check if your script is still running.  Restart if necessary.</li>
                                            <li>Your Broker’s platform does not need to be open for trades to be placed and you may also close the AlgoWolf platform itself as the script will continue to run in the background on our servers. (Don’t forget you have it switched on though)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Once started, you can always press the <strong>“Stop”</strong> button to stop trading at any time. Be mindful that it can sometimes take a minute for the strategy to fully stop. “Strategy Stopped” will be visible once the trading script has switched off.
                                        <br/>If you stop your strategy part way through a session you can manage any open position through your broker’s platform.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section className="se-section single-feature">
                        <div className="container">
                            <div className="row">
                                <h1>
                                    5. Watch your Strategy in Action
                                    <div className="popup getting-started header-border"/>
                                </h1>
                                <p>Congratulations! You have successfully connected your broker, selected the correct broker account and started your strategy with your own personalized settings. Now it's time to sit back and relax and let the algorithm do all the work for you!</p>
                                <ul>
                                    <li>Your charts will show if there are any pending orders and open trades. The stop loss and take profit associated with these orders/trades is also shown.</li>
                                    <li>Your Strategy may also provide chart information located in the Chart Info window. This information appears when you select a Chart by clicking on it and hover over a bar.</li>
                                    <li>You may also find icons/text appear on your Chart. These Drawings are generated by your Strategy with the exception of drawings in relation to orders/trades.</li>
                                    <li>Old Drawings and Chart Info will automatically be deleted once the total number meets the allowed limitations. This is to preserve your overall experience and keep the application running smoothly.</li>
                                    <li>Send any enquiries to <a href="mailto:support@algowolf.com">support@algowolf.com</a></li>
                                </ul>
                                <p>For more info see <a href="/hgpro/faq">FAQ</a></p>
                                <h6>We look forward to working with you and wish you the best of success!</h6>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

            <div id="first-section"></div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(GettingStarted);
