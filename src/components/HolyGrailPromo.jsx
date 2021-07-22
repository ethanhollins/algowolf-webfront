import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Graph from './Graph';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/pro-regular-svg-icons';

class ContactUs extends Component
{
    constructor(props)
    {
        super(props);

        this.images = [];
        this.setImageRef = elem => {
            this.images.push(elem);
        }
    }

    state = {
        current_image: 0,
        data: null,
        oldData: null,
        isLoaded: false,
        equityValues: null,
        commsValues: null,
        infoValues: {},
        totalBank: 25000,
        commsPrice: 2.1,
        tradingMonths: 12,
        strategies: []
    }

    async componentDidMount()
    {
        this.props.checkAuthorization();

        setTimeout(() => {
            this.onImageTransition()
        }, (5)*1000);

        let { strategies } = this.state;
        strategies = await this.props.getStrategiesList();
        await this.onStartup();

        this.setState({ strategies });
    }

    render()
    {
        const { isLoaded, commsValues, equityValues, infoValues, totalBank, tradingMonths } = this.state;

        return (
            <React.Fragment>

            {/* <div className="home body">
                
            </div> */}
            
            <div className="promo header-group">
                <div className="promo banner-img">
                    <div ref={this.setImageRef} className="opaque">
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/relax.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/relax.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/golf.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/golf.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/picnic.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/picnic.jpg"} />
                    </div>
                </div>
                
                <div className="promo header-label-parent">
                    <div className="promo header-label">
                        <div className="promo header-shadow"/>
                        <div className="promo header-background"/>
                        <div className="promo header-label-group">
                            <div className="promo title"><span>HG Pro</span></div>
                            <a href="/">Home</a>
                            <div className="sm-hide">
                                {this.getDashboardHeaderBtn()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="se-section single-feature">
                <div className="container feature-desc">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h2 className="mtn">New and Improved</h2>
                            <p>
                                <strong>HG Pro</strong> is an improved version of the Prison Paycheck (aka. Holy Grail) strategy. It allows you to automatically take all the best confirming evidence types, with optimal target & stop ranges during the most profitable trading session times. Most importantly, this upgrade considerably reduces broker's commission fees and significantly improved the final net result.
                            </p>
                            <p>
                                To see how much you'll gain, use the calculator below.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-5 col-md-offset-1 col-xs-12 col-xs-offset-0">
                            <div className="promo graph-header-parent"><span className="promo graph-header">Equity Returns %</span></div>
                            { isLoaded ?
                                <Graph
                                    key="Equity"
                                    type="line"
                                    width="100%"
                                    height="300px"
                                    label="Equity %"
                                    data={equityValues}
                                    showLabel={false}
                                    showXTicks={false}
                                    backgroundColor={[
                                        'rgba(52, 152, 219, 0.2)'
                                    ]}
                                    borderColor={[
                                        'rgba(52, 152, 219, 1.0)'
                                    ]}
                                    getScreenWidth={this.props.getScreenWidth}
                                />
                                : <React.Fragment/>
                            }
                        </div>
                        <div className="col col-md-5 col-md-offset-0 col-xs-12 col-xs-offset-0">
                            <div className="promo graph-header-parent"><span className="promo graph-header">Commission Costs %</span></div>
                            { isLoaded ?
                                <Graph
                                    key="Commissions"
                                    type="bar"
                                    width="100%"
                                    height="300px"
                                    data={commsValues}
                                    showLabel={false}
                                    showXTicks={true}
                                    backgroundColor={[
                                        'rgba(52, 152, 219, 0.2)',
                                        'rgba(231, 76, 60, 0.2)'
                                    ]}
                                    borderColor={[
                                        'rgba(52, 152, 219, 1.0)',
                                        'rgba(231, 76, 60,1.0)'
                                    ]}
                                    getScreenWidth={this.props.getScreenWidth}
                                />
                                : <React.Fragment/>
                            }
                        </div>
                        <div className="col col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                            <h3>Returns Calculator</h3>
                            <p>
                                Find out how much this strategy could have made you. Based on trade risk of 1%.<br/><strong>*Results shown are not indicative of real life future monetary gains.</strong> Please read our <a href="/risk-disclosure">Risk Disclosure and Disclaimer agreement</a> for more information.
                                Not recommended for trading banks less than US$15,000.
                            </p>
                            <div className="col col-md-8 col-md-offset-2 col-xs-12 col-xs-offset-0">
                                <div>
                                    <div className="promo input-parent">
                                        <span>Your Bank Size $</span>
                                        <input 
                                            ref={this.setPasswordRef}
                                            type="number" className="promo input" 
                                            name="bank" id="number" 
                                            placeholder="Total Bank Size ($)"
                                            required onChange={this.handleChange} 
                                            defaultValue={25000}
                                            min={0} max={100000000}
                                            step={100}
                                            onChange={this.onCalcChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="promo input-parent">
                                        <span>Your Broker's Commission Price Per Lot $ (One Side)</span>
                                        <input 
                                            ref={this.setPasswordRef}
                                            type="number" className="promo input" 
                                            name="commission-price" id="number" 
                                            placeholder="Commissions Price Per Lot One side ($)"
                                            required onChange={this.handleChange} 
                                            defaultValue={2.1}
                                            min={0} max={10} step={0.1}
                                            onChange={this.onCalcChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="promo input-parent">
                                        <span>Trading Months</span>
                                        <input 
                                            ref={this.setPasswordRef}
                                            type="number" className="promo input" 
                                            name="trading-months" id="number" 
                                            placeholder="How many trading months?"
                                            required onChange={this.handleChange} 
                                            defaultValue={12}
                                            min={0} max={120} step={1}
                                            onChange={this.onCalcChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="promo calc-result">
                                    <strong>Resulting Bank:</strong> <span id="resulting_bank">${ 
                                        isLoaded ? this.convertMonetary((totalBank + (infoValues["equity_ret_pa_comms"]/100 * (tradingMonths/12)) * totalBank)) 
                                        : ""
                                    }</span><br/>
                                </div>
                            </div>
                        </div>
                        <div className="promo results-table-parent col col-md-6 col-md-offset-3 col-xs-12 col-xs-offset-0">
                            <h3>Performance Metrics</h3>
                            {
                                isLoaded ? 
                                <table className="promo results-table col col-md-12 col-md-offset-0 col-xs-12 col-xs-offset-0">
                                    <tbody>
                                        <tr>
                                            <td className="promo stat-type">Total Gross Equity Return %</td>
                                            <td className="promo stat-value">{infoValues["equity_ret"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Total Net Equity Return % <span className="stat-type-small">inc. Comms</span></td>
                                            <td className="promo stat-value">{infoValues["equity_ret_comms"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Total Net Compounded Equity Return % <span className="stat-type-small"> inc. Comms</span></td>
                                            <td className="promo stat-value">{infoValues["equity_ret_comp_comms"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Gross Equity Return % <span className="stat-type-small">per annum</span></td>
                                            <td className="promo stat-value">{infoValues["equity_ret_pa"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Net Equity Return % <span className="stat-type-small">per annum inc. Comms</span></td>
                                            <td className="promo stat-value">{infoValues["equity_ret_pa_comms"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">GPR <strong>*</strong> <span className="stat-type-small">By Monthly Returns</span></td>
                                            <td className="promo stat-value">{infoValues["gpr"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Expectancy</td>
                                            <td className="promo stat-value">{infoValues["expectancy"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">SQN</td>
                                            <td className="promo stat-value">{infoValues["sqn"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">SQN 100</td>
                                            <td className="promo stat-value">{infoValues["sqn100"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Win Percentage %</td>
                                            <td className="promo stat-value">{infoValues["win_perc"].toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="promo stat-type">Maximum Drawdown %</td>
                                            <td className="promo stat-value">{infoValues["drawdown"].toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                : <React.Fragment/>
                            }
                            <p id="gpr_info"><strong id="gpr_info_asterisks">*</strong> The Gain to Pain ratio (GPR) was popularised in the Market Wizards series by Jack Schwagger. It is the sum of all monthly returns divided by the absolute value of the sum of all monthly losses. Generally speaking, GPR's greater than 1.0 are very good, and those above 2.0 are considered excellent.</p>

                        </div>
                    </div>
                </div>
            </section>
            
            <section className="se-section single-feature">
                <div className="container feature-desc">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h2 className="mtn">What's so good about HG Pro?</h2>
                            <ul>
                                <li>Only <strong>takes high probability setups</strong>, thereby significantly reducing the overall number of trades taken per week. This in turn <strong>substantially cuts down on fees</strong>. (Some weeks it won't take any trades if it thinks they're rubbish).</li>
                                <li><strong>Trades significantly longer hours each day</strong>, taking advantage of both the European and New York sessions.</li>
                                <li><strong>Scans multiple time frames</strong> including 2 min & 5 min charts <strong>looking for the best opportunities</strong>.</li>
                                <li><strong>Increased profit range</strong> on select confirming evidence types and session times.</li>
                                <li>Virtually <strong>impossible for human traders</strong> to match.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h2 className="mtn">Why AlgoWolf?</h2>
                            <p>AlgoWolf’s state-of-the art algorithms & fully automated order placement do all the work for you.</p>
                            <p>With just a few clicks; add your broker, set your trade risk, turn on the script and away you go. It switches itself on and off for the session and automatically commences the next day at the set time without you having to lift a finger.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h2 className="mtn">Getting Started</h2>
                            <p>Go to <a href="/getting-started">this page</a> to learn how to get started with your Dashboard.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="se-section single-feature">
                <div className="container feature-desc">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                            <h2 className="mtn">Pricing *</h2>
                            <div className="pricing parent">
                                <div className="col-md-6 col-xs-12">
                                    <div className="pricing body">
                                        <div className="pricing header-notice">Initial Release 25 Available Places</div>
                                        <div className="pricing header-group">
                                            <div className="pricing title-group">
                                                <div className="pricing title">Standard</div>
                                            </div>
                                            <div className="pricing header-circle">
                                                <div className="pricing price-group">
                                                    <div className="pricing price">295</div>
                                                    <div className="pricing price-currency">USD</div>
                                                </div>
                                                <div className="pricing price-period">
                                                    per month
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing features-group">
                                            <div>Live Trade the HG Pro Algorithm</div>
                                            <div>Automatic Order Execution</div>
                                            <div>Personalize to Your Risk Management</div>
                                            <div>Up to 100K Tradable Bank at 1% risk</div>
                                            <div>1 Trading Account</div>
                                            <div>No Lock-in Contracts</div>
                                            <div>14-Day Refund Option (see <a target="_blank" href="/tos">T&Cs</a>)</div>
                                        </div>
                                        <div className="pricing purchase-group">
                                            <div className="pricing purchase-btn">
                                                {this.getDashboardHeaderBtn()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12 col-xs-offset-0">
                                    <div id="pricing-black" className="pricing body">
                                        {/* <div className="pricing header-notice black"></div> */}
                                        <div className="pricing header-group" style={{ backgroundColor: "#2d3436" }}>
                                            <div className="pricing title-group">
                                                <div className="pricing title">Professional Client</div>
                                                <div className="pricing subtitle">+100K Trading Bank Size</div>
                                            </div>
                                            <div className="pricing header-circle" style={{ backgroundColor: "#2d3436" }}>
                                                <div className="pricing price-group">
                                                    <div className="pricing price-small">Contact Us</div>
                                                    {/* <div className="pricing price-currency">USD</div> */}
                                                </div>
                                                {/* <div className="pricing price-period">
                                                    per month
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="pricing features-group">
                                            <div>Live Trade the HG Pro Algorithm</div>
                                            <div>Automatic Order Execution</div>
                                            <div>Personalize to Your Risk Management</div>
                                            <div>Scalable Bank 100K+ (POA)</div>
                                            <div>Up to 10 Simultaneous Trading Accounts</div>
                                            <div>No Lock-in Contracts</div>
                                            <div>14-Day Refund Option (see <a target="_blank" href="/tos">T&Cs</a>)</div>
                                        </div>
                                        <div className="pricing purchase-group">
                                            <div className="pricing purchase-btn">
                                                Enquire Now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span id="pricing_footnote"><strong id="gpr_info_asterisks">*</strong> Not recommended for trading banks less than US$15,000.</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

            </React.Fragment>

        );
    }

    onImageTransition(e)
    {
        let { current_image } = this.state;

        current_image += 1;

        if (current_image >= this.images.length)
        {
            current_image = 0;
        }

        for (let i=0; i < this.images.length; i++)
        {
            if (!this.images[i])
            {
                continue;
            }
            else if (i === current_image)
            {
                this.images[i].className = "opaque";
            }
            else
            {
                this.images[i].className = "";
            }
        }

        this.setState({ current_image });

        setTimeout(() => {
            this.onImageTransition()
        }, (5)*1000);
    }

    onCalcChange(e)
    {
        const name = e.target.getAttribute("name");
        let { totalBank, commsPrice, tradingMonths } = this.state;
        
        if (name === 'bank')
        {
            totalBank = Math.min(Math.max(e.target.value, 0), 100000000);
            this.setState({ totalBank });
        }
        else if (name === "commission-price")
        {
            commsPrice = Math.min(Math.max(e.target.value, 0), 10);
            this.setState({ commsPrice });
        }
        else if (name === "trading-months")
        {
            tradingMonths = Math.min(Math.max(e.target.value, 0), 120);
            this.setState({ tradingMonths });
        }

        const { data, oldData } = this.state;
        if (data && oldData)
        {
            this.updateValues(data, oldData, totalBank, commsPrice, tradingMonths);
        }
        
    }

    async onAddToDashboard(e)
    {
        const strategy_package = e.target.getAttribute('name') + '.v1_0_0';

        // TEMP
        const name = "HolyGrail Pro";

        await this.props.createStrategy({
            name: name,
            package: strategy_package
        })

        let { strategies } = this.state;
        strategies = await this.props.getStrategiesList();
        this.setState({ strategies });
    }

    async onStartup() 
    {
        const data = await this.props.getScriptFile("HolyGrail_Pro", "SystemResults.csv");
        const oldData = await this.props.getScriptFile("HolyGrail_Pro", "OldSystemResults.csv")
        this.updateValues(data, oldData, 25000, 2.1, 12);

        this.setState({ data, oldData });
    }

    updateValues(data, oldData, totalBank, commsPrice, tradingMonths)
    {
        commsPrice *= 2;
        const equityValues = this.generateEquityCurve(data);
        const ret_info = this.getEquityReturn(data, totalBank, commsPrice);

        const pro_comms_cost = this.getCommissionsCost(Object.values(data["Risk (Pips)"]).slice(0, 287), totalBank, commsPrice);
        const old_comms_cost = this.getCommissionsCost(Object.values(oldData["Risk (Pips)"]), totalBank, commsPrice);
        const commsValues = [{
            y: pro_comms_cost,
            x: "HG Pro"
        }, {
            y: old_comms_cost,
            x: "Old HolyGrail"
        }];

        const equity_ret_comp_comms = this.getCompoundedCommsReturn(data, totalBank, commsPrice);

        const total_days = this.getTotalDays(data);

        const gpr = this.getGpr(data);
        const expectancy = this.getExpectancy(data);
        const sqn_info = this.getSqn(data);

        let infoValues = {};
        infoValues['equity_ret'] = ret_info[0];
        infoValues['equity_ret_comms'] = ret_info[1];
        infoValues['equity_ret_comp_comms'] = equity_ret_comp_comms;
        infoValues['equity_ret_pa'] = ret_info[2];
        infoValues['equity_ret_pa_comms'] = ret_info[3];
        infoValues['gpr'] = gpr;
        infoValues['expectancy'] = expectancy;
        infoValues['sqn'] = sqn_info[0];
        infoValues['sqn100'] = sqn_info[1];
        infoValues['win_perc'] = ret_info[4];
        infoValues['drawdown'] = ret_info[5];
        infoValues['total_days'] = total_days;

        const isLoaded = true;
        this.setState({ equityValues, commsValues, infoValues, isLoaded });
    }
    
    generateEquityCurve(data)
    {
        let values = [];
        let total = 0;
        values.push({
            y: 0,
            x: "0"
        });
        for (let i=0; i < Object.keys(data["R Profit"]).length; i++)
        {
            total += parseFloat(data["R Profit"][i]);
            values.push({
                y: total,
                x: (i+1).toString()
            });
        }
        return values;
    }

    getEquityReturn(data, totalBank, commsPrice)
    {
        const total_days = this.getTotalDays(data);
        const pro_comms_cost = this.getCommissionsCost(Object.values(data["Risk (Pips)"]), totalBank, commsPrice);
        const dataLength = Object.keys(data["R Profit"]).length;

        let ret = 0;
        let wins = 0;
        let losses = 0;
        
        let max_dd = 0;
        let ret_high = 0;

        let avg_win = 0;
        let avg_loss = 0;
        
        for (let i=0; i < dataLength; i++)
        {
            const val = parseFloat(data["R Profit"][i]);
            ret += val;
            if (val >= 0)
            {
                avg_win += val;
                wins += 1;
            }
            else
            {
                avg_loss += val;
                losses += 1;
            }
            if (ret > ret_high)
            {
                ret_high = ret;
            }
            if (ret_high - ret > max_dd)
            {
                max_dd = ret_high - ret;
            }
        }

        avg_win = avg_win / wins;
        avg_loss = avg_loss / losses;

        const ret_pa = ret / (total_days/365);
        const ret_pa_comms = ret_pa - (pro_comms_cost / (total_days/365));
        const win_perc = wins / (wins + losses);

        return [ret, ret - pro_comms_cost, ret_pa, ret_pa_comms, win_perc, max_dd, avg_win, avg_loss];
    }

    getTotalDays(data)
    {
        const start_date = moment(data["Date.1"][0]);
        const end_date = moment(data["Date.1"][Object.keys(data["Date.1"]).length-1]);
        const duration = moment.duration(end_date.diff(start_date));
        
        return Math.floor(duration.asDays());
    }

    getCommissionsCost(values, totalBank, commsPrice)
    {
        let total_cost = 0;

        for (let i=0; i < values.length; i++)
        {
            const risk_pips = parseFloat(values[i]);
            total_cost += (totalBank * 0.01) / (Math.max(Math.abs(risk_pips), 3) * 10) * commsPrice
        }

        const total_cost_perc = total_cost / totalBank;
        return Math.round(total_cost_perc * 10000) / 100;
    }

    getCompoundedCommsReturn(data, totalBank, commsPrice)
    {
        let total_ret = 0;

        for (let i=0; i < Object.keys(data["Risk (Pips)"]).length; i++)
        {
            const risk_pips = parseFloat(data["Risk (Pips)"][i]);
            const r_profit = parseFloat(data["R Profit"][i]);
            const comms = (totalBank * 0.01) / (Math.max(Math.abs(risk_pips), 3) * 10) * commsPrice

            total_ret = total_ret + (totalBank + total_ret) * (r_profit/100) - ((totalBank + total_ret) / totalBank) * comms
        }

        return Math.round((total_ret / totalBank) * 10000) / 100;
    }

    mean(x)
    {
        let total = 0;
        for (let i of x)
        {
            total += parseFloat(i);
        }
        return total / x.length;
    }

    std(x)
    {
        const mu = this.mean(x);
        let total = 0;
        for (let i of x)
        {
            total += Math.pow(parseFloat(i)-mu, 2);
        }
        return Math.sqrt(total/x.length);
    }

    getMonthlyReturn(data)
    {
        const dates = Object.values(data["Date.1"]);
        const profits = Object.values(data["R Profit"]);
        let monthly_ret = {};
        
        for (let i=0; i < dates.length; i++)
        {
            if (moment(dates[i]).format("MMM YY") in monthly_ret)
            {
                monthly_ret[moment(dates[i]).format("MMM YY")] += parseFloat(profits[i]);
            }
            else
            {
                monthly_ret[moment(dates[i]).format("MMM YY")] = parseFloat(profits[i]);
            }
        }

        return monthly_ret;
    }

    getGpr(data)
    {
        const monthly_ret = Object.values(this.getMonthlyReturn(data));

        let ret_total = 0;
        let gpr_sum = 0;
        for (let i of monthly_ret)
        {
            ret_total += i;
            if (i < 0)
            {
                gpr_sum += i;
            }
        }

        return ret_total/Math.abs(gpr_sum);
    }

    getExpectancy(data)
    {
        const equity_info = this.getEquityReturn(data);
        return (equity_info[4] * equity_info[6]) - ((1 - equity_info[4]) * Math.abs(equity_info[7]));
    }

    getSqn(data)
    {
        const values = Object.values(data["R Profit"]);
        const mu = this.mean(values);
        const std = this.std(values);
        const sqn = Math.sqrt(values.length) * mu / std;
        const sqn100 = Math.sqrt(100) * mu / std;

        return [sqn, sqn100];
    }

    getDashboardHeaderBtn = () =>
    {
        const pkg = 'HolyGrail_opt_testing_comb';
        const user_id = this.props.getUserId();
        const is_beta_tester = this.props.getIsBetaTester();
        const { strategies } = this.state;
        
        let dashboard_btn;
        if (!user_id)
        {
            dashboard_btn = (
                <div>

                <FontAwesomeIcon className='promo header-icon' icon={faTimesCircle} />
                Currently Unavailable

                </div>
            );
        }
        else if (strategies.includes(pkg))
        {
            dashboard_btn = (
                <a href="/app">

                <FontAwesomeIcon className='promo header-icon' icon={faCheckCircle} />
                Added

                </a>
            );
        }
        else if (is_beta_tester)
        {
            dashboard_btn = (
                <div onClick={this.onAddToDashboard.bind(this)}>

                <FontAwesomeIcon className='promo header-icon' icon={faPlusCircle} />
                Add to Dashboard

                </div>
            );
        }
        else
        {
            dashboard_btn = (
                <div>

                <FontAwesomeIcon className='promo header-icon' icon={faTimesCircle} />
                Currently Unavailable
                
                </div>
            );
        }

        return dashboard_btn;
    }

    convertMonetary = (value) => 
    {
        let val = (value/1).toFixed(2)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

}

export default withRouter(ContactUs);
