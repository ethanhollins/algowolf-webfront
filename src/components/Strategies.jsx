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

                <div className="cat-strategies body">
                    <div className="cat-strategies header-body">
                        <h1 className="cat-strategies header">Strategies</h1>
                    </div>
                    <div className="cat-strategies item">
                        <div className="cat-strategies item-header-group">
                            <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon.jpg"}/>
                            <span className="cat-strategies item-header">HolyGrail PRO</span>
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
                            <span className="cat-strategies item-header">HolyGrail Classic</span>
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

            <Footer/>

            </React.Fragment>

        );
    }

    getLoginGroup = () =>
    {
        if (this.props.getUserId() !== null)
        {
            return (
                <div className="nav login-group">
                    <div className="nav login-msg">Welcome <div className="nav login-name">{this.props.getFirstName()}</div>.</div>
                    <div className="nav login-btn">Logout</div>
                </div>
            );
        }
        else
        {
            return (
                <div className="nav login-group">
                    <div className="nav login-btn">Sign In</div>
                    <div className="nav signup-btn">Sign Up</div>
                </div>
            );
        }
    }

}

export default withRouter(Strategies);
