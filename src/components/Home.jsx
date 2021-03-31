import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

class Home extends Component
{

    render()
    {
        return (
            <div className="light-header animsition">

            <Navigation
                isHome={true}
            />

            <header className="header main-header gradient-bg" >
                <div className="container">
                    <div className="outer">
                        <div className="inner text-center">
                            <h1 className="white-color">Welcome to the AlgoWolf Algorithmic Trading Platform</h1>
                            <h5 className="">Leading platform in Charting, Algorithms, Statistics and more!</h5>
                            <a href="/automated-trading" className="btn se-btn-white btn-rounded">Learn more about Live Automated Trading</a>
                        </div>
                    </div>
                </div>
            </header>
{/* 
            <section className="se-section features-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-6 se-feature">
                            <span className="icon iconify" data-icon="ph:cloud-lightning-thin" data-inline="false"></span>
                            <h5>Lightning Fase</h5>
                            <p>Automatic trades are executed </p>
                        </div>

                        <div className="col-md-3 col-sm-6 se-feature">
                            <i className="icon ion-ios-paper-outline"></i>
                            <h5>Well Documented</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>

                        <div className="col-md-3 col-sm-6 se-feature">
                            <i className="icon ion-ios-lightbulb-outline"></i>
                            <h5>Easy To Use</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>

                        <div className="col-md-3 col-sm-6 se-feature">
                            <i className="icon ion-ios-speedometer-outline"></i>
                            <h5>Lightning Fast</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="se-section single-feature">

                <div className="container feature-desc">
                    <div className="row">

                        <div className="col-md-6">
                            <img src="http://placehold.it/1600x1100?text=SoftEase" alt="" className="img-responsive"/>
                        </div>

                        <div className="col-md-5 col-md-offset-1">
                            <h2 className="mtn">This is amazing dashboard</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud officia deserunt mollit exercitation.</p>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui anim id est laborum.</p>
                            <a href="#" className="btn se-btn btn-rounded">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="se-section single-feature">

                <div className="container feature-desc">
                    <div className="row">

                        <div className="col-md-6 col-md-offset-1 pull-right">
                            <img src="http://placehold.it/1600x1100?text=SoftEase" alt="" className="img-responsive"/>
                        </div>

                        <div className="col-md-5">
                            <h2 className="mtn">This is amazing dashboard</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud officia deserunt mollit exercitation.</p>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui anim id est laborum.</p>
                            <a href="#" className="btn se-btn btn-rounded">Learn More</a>
                        </div>

                    </div>
                </div>

            </section>

            <section className="se-section gray-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="underline">FAQ</h4>
                        </div>

                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne-12">
                                        <h6 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapseOne-12" aria-expanded="false" aria-controls="collapseOne-12" className="trans collapsed">Can I use Accordion for simple FAQ? <span className="icon fa fa-plus trans"></span></a></h6>
                                    </div>
                                    <div id="collapseOne-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne-12" aria-expanded="false" style={{height: "0px"}}>
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo-12">
                                        <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapseTwo-12" aria-expanded="false" aria-controls="collapseTwo-12">Is this your second question? <span className="icon fa fa-plus trans"></span></a></h6>
                                    </div>
                                    <div id="collapseTwo-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo-12" aria-expanded="false" style={{height: "0px"}}>
                                        <div className="panel-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="se-section primary-bg">
                <div className="container">
                    <div className="row text-center">
                        <h3>Automated LIVE Trading</h3>
                        <p>of the Prison Paycheck strategy is currently available for Beta testers.</p>
                        <a href="mailto:admin@algowolf.com" className="btn se-btn-black btn-rounded">Enquire Today</a>
                    </div>
                </div>
            </section>

            <Footer/> */}
            
            </div>
        );
    }
}

export default withRouter(Home);