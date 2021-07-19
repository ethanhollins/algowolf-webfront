import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersHSquare, faPlusCircle, faArrowCircleRight, faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import { faCheckCircle, faArrowCircleRight as faArrowCircleRightSolid } from '@fortawesome/pro-solid-svg-icons';
import Graph from './Graph';

class Strategies extends Component
{
    
    state = {
        strategies: [],
        equityCurve: null,
        isLoaded: false
    }

    async componentDidMount()
    {
        let { strategies, equityCurve, isLoaded } = this.state;
        strategies = await this.props.getStrategiesList();

        const data = await this.props.getScriptFile("HolyGrail_Pro", "SystemResults.csv");
        equityCurve = this.generateEquityCurve(data);
        isLoaded = true;

        this.setState({ strategies, equityCurve, isLoaded });
    }

    render()
    {

        return (
            <React.Fragment>
            
            <div className="cat-strategies body">
                <div className="cat-strategies header-body">
                    <h1 className="cat-strategies header">Strategies</h1>
                    <span>See All</span>
                </div>
                <div className="cat-strategies table">
                    
                    {this.getStrategyElemsTemp()}
                    
                </div>
            </div>
            
            </React.Fragment>
        );
    }

    getStrategyElemsTemp = () =>
    {
        const screen_width = this.props.getScreenWidth();

        if (screen_width <= 980) // Screen Width <= 980px
        {
            return (
                <React.Fragment>
                
                {this.getStrategyElems()}

                <div className="cat-strategies item">
                    <a className="cat-strategies item-header-group" href="/holygrail/demo">
                        <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon_classic.jpg"} alt="Strategy Icon"/>
                        <div className="cat-strategies title">
                            <span className="cat-strategies item-header">HolyGrail Live Charts</span>
                        </div>
                    </a>
                    <div className="cat-strategies stat-group">
                        <div>
                            <div className="cat-strategies stat">
                                <div className="cat-strategies stat-header">Commissions</div>
                                <div className="cat-strategies stat-body" style={{color: "#e74c3c"}}>161%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cat-strategies item">
                    <div className="cat-strategies btn-group">
                        <a className='cat-strategies cat-btn-parent' href="/holygrail/demo">
                            <FontAwesomeIcon className='cat-strategies cat-btn' style={{color: "#e67e22"}} icon={faArrowCircleRightSolid} />
                            <div className="cat-strategies anim-text">
                                <span>Goto Page</span>
                            </div>
                        </a>
                    </div>
                </div>
                
                </React.Fragment>
            );
        }
        else
        {
            return (
                <React.Fragment>
                
                {this.getStrategyElems()}

                <div className="cat-strategies item">
                    <a className="cat-strategies item-header-group" href="/holygrail/demo">
                        <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon_classic.jpg"} alt="Strategy Icon"/>
                        <div className="cat-strategies title">
                            <span className="cat-strategies item-header">HolyGrail Live Charts</span>
                        </div>
                    </a>
                    <div className="cat-strategies stat-group">
                        <div>
                            
                        </div>
                    </div>
                    <div className="cat-strategies btn-group">
                        <a className='cat-strategies cat-btn-parent' href="/holygrail/demo">
                            <FontAwesomeIcon className='cat-strategies cat-btn' style={{color: "#e67e22"}} icon={faArrowCircleRightSolid} />
                            <div className="cat-strategies anim-text">
                                <span>Goto Page</span>
                            </div>
                        </a>
                    </div>
                </div>
                
                </React.Fragment>
            );
        }
    }

    getStrategyElems = () =>
    {
        const packages = ['HolyGrail_opt_testing_comb'];
        const user_id = this.props.getUserId();
        const screen_width = this.props.getScreenWidth();
        const is_beta_tester = this.props.getIsBetaTester();
        const { strategies, equityCurve, isLoaded } = this.state;
        
        let result = [];
        for (let i of packages)
        {
            let dashboard_btn;
            if (!user_id)
            {
                dashboard_btn = (
                    <a className='cat-strategies cat-btn-parent' href="/login">
                        <FontAwesomeIcon className='cat-strategies cat-btn add' icon={faPlusCircle} />
                        <div className="cat-strategies anim-text">
                            <span>Add to Dashboard</span>
                        </div>
                    </a>
                );
            }
            else if (strategies.includes(i))
            {
                dashboard_btn = (
                    <div className='cat-strategies cat-btn-parent'>
                        <FontAwesomeIcon className='cat-strategies cat-btn add' icon={faCheckCircle} />
                        <div className="cat-strategies anim-text">
                            <span>Added</span>
                        </div>
                    </div>
                );
            }
            else if (is_beta_tester)
            {
                dashboard_btn = (
                    <div className='cat-strategies cat-btn-parent' name={i} onClick={this.onAddToDashboard.bind(this)}>
                        <FontAwesomeIcon className='cat-strategies cat-btn add' icon={faPlusCircle} />
                        <div className="cat-strategies anim-text">
                            <span>Add to Dashboard</span>
                        </div>
                    </div>
                );
            }
            else
            {
                dashboard_btn = (
                    <div className='cat-strategies cat-btn-parent disabled'>
                        <FontAwesomeIcon className='cat-strategies cat-btn add' icon={faPlusCircle} />
                        <div className="cat-strategies anim-text">
                            <span>Currently Unavailable</span>
                        </div>
                    </div>
                );
            }

            if (screen_width <= 980) // Screen Width <= 780px
            {
                result.push(
                    <React.Fragment key={i}>

                    <div className="cat-strategies item">
                        <a className="cat-strategies item-header-group" href="/holygrail/info">
                            <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon.jpg"} alt="Strategy Icon"/>
                            <div className="cat-strategies title">
                                <span className="cat-strategies item-header">HolyGrail PRO</span>
                                <div className="cat-strategies strategy-label"><span>AlgoWolf's Choice</span></div>
                            </div>
                        </a>
                        <div className="cat-strategies stat-group">
                            <div>
                                { isLoaded ?
                                    <Graph 
                                        type="line"
                                        width="200px"
                                        height="110px"
                                        data={equityCurve}
                                        showLabel={false}
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
                                <div className="cat-strategies stat">
                                    <div className="cat-strategies stat-header">GPR</div>
                                    <div className="cat-strategies stat-body">11.82</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cat-strategies item">
                        <div className="cat-strategies btn-group">
                            <div className='cat-strategies cat-btn-parent'>
                                <FontAwesomeIcon className='cat-strategies cat-btn' icon={faInfoCircle} />
                                <div className="cat-strategies anim-text">
                                    <span>More Info</span>
                                </div>
                            </div>
                            {dashboard_btn}
                        </div>
                    </div>
                    
                    </React.Fragment>
                );
            }
            else // Screen Width > 780px
            {
                result.push(
                    <div key={i} className="cat-strategies item">
                        <a className="cat-strategies item-header-group" href="/holygrail/info">
                            <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon.jpg"} alt="Strategy Icon"/>
                            <div className="cat-strategies title">
                                <span className="cat-strategies item-header">HolyGrail PRO</span>
                                <div className="cat-strategies strategy-label"><span>AlgoWolf's Choice</span></div>
                            </div>
                        </a>
                        <div className="cat-strategies stat-group">
                            <div>
                                { isLoaded ?
                                    <Graph
                                        type="line"
                                        width="200px"
                                        height="110px"
                                        data={equityCurve}
                                        showLabel={false}
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
                                <div className="cat-strategies stat">
                                    <div className="cat-strategies stat-header">GPR</div>
                                    <div className="cat-strategies stat-body">11.82</div>
                                </div>
                            </div>
                        </div>
                        <div className="cat-strategies btn-group">
                            <a className='cat-strategies cat-btn-parent' href="/holygrail/info">
                                <FontAwesomeIcon className='cat-strategies cat-btn' icon={faInfoCircle} />
                                <div className="cat-strategies anim-text">
                                    <span>More Info</span>
                                </div>
                            </a>
                            {dashboard_btn}
                        </div>
                    </div>
                );
            }
        }

        return result;
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

}

export default withRouter(Strategies);
