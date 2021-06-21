import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class Strategies extends Component
{

    render()
    {
        return (
            <React.Fragment>

            <div className="home body">
                
                <Navigation2 
                    getUserId={this.props.getUserId}
                    getFirstName={this.props.getFirstName}
                />

                <div className="banner body title">
                    <div className="banner inner">
                        Strategies
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item">
                        <p>Add <strong>Strategies</strong> to your <strong>Dashboard</strong> and instantly <strong>trade live</strong> with your <strong>preferred broker</strong>.</p>
                        <p>Once added or purchased (if applicable), the <strong>Strategy</strong> will appear in the tab display section at the top of your <strong>Dashboard</strong>.
                        By clicking on that tab, you will have access to the <strong>Start button</strong> (to run the <strong>Strategy</strong> live on your broker), 
                        the <strong>Control Panel</strong> to change settings that personalize the <strong>Strategy</strong> to your needs, chart indicators/information and more.</p>
                        <p><a href="#">Find out more about Strategies here.</a></p>
                    </div>
                </section>

                <div className="strategies body">
                    {/* <div className="cat-strategies header-body">
                        <h1 className="cat-strategies header">Strategies</h1>
                    </div> */}
                    <div className="cat-strategies table">
                        <div className="cat-strategies item">
                            <div className="cat-strategies item-header-group">
                                <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon.jpg"}/>
                                <div className="cat-strategies title">
                                    <span className="cat-strategies item-header">HolyGrail PRO</span>
                                    <div className="cat-strategies strategy-label"><span>AlgoWolf's Choice</span></div>
                                </div>
                            </div>
                            <div className="cat-strategies stat-group">
                                <div>
                                    <div className="cat-strategies stat">
                                        <div className="cat-strategies stat-header">Commissions</div>
                                        <div className="cat-strategies stat-body" style={{color: "#27ae60"}}>31%</div>
                                    </div>
                                    <div className="cat-strategies stat">
                                        <div className="cat-strategies stat-header">GPR</div>
                                        <div className="cat-strategies stat-body">11.82</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat-strategies btn-group">
                                <div className='cat-strategies cat-btn-parent'>
                                    <FontAwesomeIcon className='cat-strategies cat-btn' icon={faArrowCircleRight} />
                                    <div className="cat-strategies anim-text">
                                        <span>More Info</span>
                                    </div>
                                </div>
                                <div className='cat-strategies cat-btn-parent'>
                                    <FontAwesomeIcon className='cat-strategies cat-btn add' icon={faPlusCircle} />
                                    <div className="cat-strategies anim-text">
                                        <span>Add to Dashboard</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cat-strategies item">
                            <div className="cat-strategies item-header-group">
                                <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon_classic.jpg"}/>
                                <div className="cat-strategies title">
                                    <span className="cat-strategies item-header">HolyGrail Classic</span>
                                </div>
                            </div>
                            <div className="cat-strategies stat-group">
                                <div>
                                    <div className="cat-strategies stat">
                                        <div className="cat-strategies stat-header">Commissions</div>
                                        <div className="cat-strategies stat-body" style={{color: "#e74c3c"}}>161%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat-strategies btn-group">
                                <div className='cat-strategies cat-btn-parent'>
                                    <FontAwesomeIcon className='cat-strategies cat-btn' icon={faArrowCircleRight} />
                                    <div className="cat-strategies anim-text">
                                        <span>More Info</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(Strategies);
