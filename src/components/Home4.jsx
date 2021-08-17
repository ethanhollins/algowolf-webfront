import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CookiesPopup from './CookiesPopup';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class Home3 extends Component
{

    componentDidMount()
    {
        this.props.countPageVisit(window.location.pathname);
    }

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
                                    Design, Build, Test, Visualize
                                </div>
                                <div className="home s1-desc">
                                    Use leading data science tools with a range of alternative datasets to gain unique market insights. 
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
                                    <div className="home feat-header2">The Quant Edge</div>
                                    <div className="home feat-header3">See your work with the modern visualization tools.</div>
                                    <div className="home feat-body">
                                        Gain immediate insights into your modelling processes with comprehensive data visualization tools.
                                        Use our tools to get the edge you need to outperform the competition.
                                    </div>
                                    <div className="home feat-header3">Learn from professionals with our free interactive tutorials</div>
                                    <div className="home feat-body">
                                        Our learning resources are designed to teach new and veteran engineers. 
                                        Take advantage of our online tutorials to write your first statistical 
                                        model, and take it further with our machine learning education resources 
                                        to use the tools that professional engineers are revolutionizing the world with. 
                                    </div>
                                    <div className="home feat-header3">Wide range of datasets</div>
                                    <div className="home feat-body">
                                        Choose from the wide range of datasets, from weather patterns to search trends, that we and the community 
                                        provide to approach your modelling process from new angles. Datasets immediately transfer to your workflow 
                                        for easy implementation. Implementing your own datasets is also a hassle free process.
                                    </div>
                                </div>
                                <div className="col-md-5 col-md-offset-1 col-sm-12">
                                    <img className="home s2-img" src={process.env.PUBLIC_URL + "/images/visualize-img.jpg"}  alt="Chart Image" />
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
                                        Use the field's leading language, Python, to develop your models. 
                                        Our platform lets you create a Jupyter notebook or use our integrated IDE.
                                    </div>
                                    <div className="home feat-header3">Major libraries readily available</div>
                                    <div className="home feat-body">
                                        The most popular libraries are readily available for you to use from 
                                        numpy and pandas, for powerful data manipulation, to PyTorch and TensorFlow 
                                        for comprehensive machine learning tools to create a seemless experience 
                                        from conception to creation. 
                                    </div>
                                    <div className="home feat-header3">Take it offline</div>
                                    <div className="home feat-body">
                                        Need more control over your workflow? Seemlessly download your workspace and 
                                        switch between and online and offline environment with no hassles.
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

            <CookiesPopup 
                getCookies={this.props.getCookies}
            />

            </React.Fragment>

        );
    }

}

export default withRouter(Home3);
