import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import Strategies from './Strategies';
import Banner from './Banner';

class Home3 extends Component
{

    render()
    {
        console.log(this.props.getUserId());

        return (
            <React.Fragment>

            <div className="home body">
                
                <Navigation2 
                    checkAuthorization={this.props.checkAuthorization}
                    getUserId={this.props.getUserId}
                    getFirstName={this.props.getFirstName}
                    getScreenWidth={this.props.getScreenWidth}
                    isNoBorder={true}
                />
                

                <section className="se-section features-section no-border">
                    <div className="home container col-md-12 col-sm-12">
                        <div className="row">

                        <div className="home s1-parent section-centered">
                            <div className="home s1-body col-md-6 col-sm-12">
                                <div className="home s1-header">
                                    AlgoWolf Platform
                                </div>
                                <div className="home s1-sub-header">
                                    Design, Build, Test, Trade
                                </div>
                                <div className="home s1-desc">
                                    Build your own trading strategies with our state of the art tools and 
                                    sit back and relax as it does all the work for you.
                                </div>
                                {
                                    this.props.getUserId() === null ?
                                    
                                    <React.Fragment>
                                    <div className="home s1-btn-group">
                                        <a className="home s1-b1 feat-btn" href="/register">Sign up</a>
                                        <a className="home s1-b2 feat-btn" href="/login">Sign in</a>
                                    </div>
                                    </React.Fragment>

                                    : <React.Fragment/>
                                }
                            </div>
                            <div className="col-md-5 col-md-offset-1 col-sm-12">
                                <img className="home s1-img" src={process.env.PUBLIC_URL + "/images/relax-image.svg"}  alt="Relax Image" />
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="se-section features-section no-border">
                    <div className="home container col-md-12 col-sm-12">
                        <div className="row">

                            <div className="home s2-parent section-centered">
                                <div className="home s2-body1 col-md-6 col-sm-12">
                                    <div className="home feat-header1">Innovate</div>
                                    <div className="home feat-header2">Get the Hedge Fund Edge</div>
                                    <div className="home feat-header3">Visualize your Strategies with our modern charts</div>
                                    <div className="home feat-body">
                                        We provide comprehensive backtesting tools to visualize buy 
                                        and sell trades as well as custom bar info and chart drawings 
                                        to make your experience in creating a money-making algorithm 
                                        as easy as possible.
                                    </div>
                                    <div className="home feat-header3">Learn from professionals with our free interactive tutorials</div>
                                    <div className="home feat-body">
                                        Our learning resources are design to teach new algo traders as well 
                                        as veterans. Take advantage of our online tutorials to write your 
                                        first automated strategy, or learn exactly how professionals have 
                                        used machine learning to revolutionize the trading world. 
                                    </div>
                                    <div className="home feat-header3">No need to install any programs</div>
                                    <div className="home feat-body">
                                        AlgoWolf runs all of your backtests on the cloud with our high 
                                        speed infrastructure. Compute clouds are also provided for 
                                        machine learning model training, no extra setup required.
                                    </div>
                                </div>
                                <div className="col-md-5 col-md-offset-1 col-sm-12">
                                    <img className="home s2-img" src={process.env.PUBLIC_URL + "/images/chart-image.svg"}  alt="Chart Image" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="se-section features-section no-border">
                    <div className="home container col-md-12 col-sm-12">
                        <div className="row">

                            <div className="home s3-parent section-centered">
                                <div className="home feat-table-parent col-md-6 visible-sm visible-md visible-lg visible-xl">
                                    <div className="home feat-table-md">
                                        <table>
                                            <tbody>
                                                <tr className="home feat-table-row">
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/python-logo.png"}  alt="Python Logo" />
                                                        </div>
                                                    </td>
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/jupyter-logo.png"}  alt="Jupyter Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="home feat-table-row">
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/tensorflow-logo.png"}  alt="Tensorflow Logo" />
                                                        </div>
                                                    </td>
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/pytorch-logo.png"}  alt="PyTorch Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="home feat-table-row">
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/keras-logo.png"}  alt="Keras Logo" />
                                                        </div>
                                                    </td>
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/numpy-logo.png"}  alt="NumPy Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="home feat-table-parent col-sm-12 visible-xs">
                                    <div className="home feat-table-xs">
                                        <table>
                                            <tbody>
                                                <tr className="home feat-table-row">
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/python-logo.png"}  alt="Python Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/jupyter-logo.png"}  alt="Jupyter Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="home feat-table-row">
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/tensorflow-logo.png"}  alt="Tensorflow Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/pytorch-logo.png"}  alt="PyTorch Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="home feat-table-row">
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/keras-logo.png"}  alt="Keras Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="home feat-table-data">
                                                        <div>
                                                            <img className="home feat-table-img" src={process.env.PUBLIC_URL + "/images/numpy-logo.png"}  alt="NumPy Logo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="home s3-body1 col-md-6 col-sm-12">
                                    <div className="home feat-header1">The Latest Tools</div>
                                    <div className="home feat-header2">Train learning algorithms right away</div>
                                    <div className="home feat-header3">Develop in Python using Jupyter</div>
                                    <div className="home feat-body">
                                        Use the easy to read and understand programming language Python to code 
                                        your strategies. You can create a Jupyter notebook or use our IDE.
                                        Don’t worry if you’re just a beginner, our learning resources 
                                        will get you started in no time!
                                    </div>
                                    <div className="home feat-header3">Major libraries readily available</div>
                                    <div className="home feat-body">
                                        The most popular libraries are readily available for you to use from 
                                        numpy and pandas, for powerful data manipulation, to PyTorch and TensorFlow 
                                        for comprehensive machine learning tools to create a seemless experience from 
                                        having an idea to live trading. 
                                    </div>
                                    <div className="home feat-header3">Take it offline</div>
                                    <div className="home feat-body">
                                        Need more control over your workflow? Seemlessly download your workspace and 
                                        switch between and online and offline environment with no hassles. You can 
                                        backtest in the cloud or from your own PC.   
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="se-section features-section no-border">
                    <div className="home container col-md-12 col-sm-12">
                        <div className="row">
                        <div className="home s4-parent section-centered">
                            <div className="home s1-header">
                                See Our Pricing
                            </div>
                            <a className="home s4-b1 feat-btn" href="/pricing">Pricing</a>
                        </div>
                        </div>
                    </div>
                </section>

            </div>

            <div id="first-section"></div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(Home3);
