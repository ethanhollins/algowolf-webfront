import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import Strategies from './Strategies';
import Banner from './Banner';

class Home2 extends Component
{
    constructor(props)
    {
        super(props);

        this.setBannerImgRef = elem => {
            this.bannerImg = elem;
        }

        this.images = [];
        this.imageItems = [];
        this.setImageRef = elem => {
            this.images.push(elem);
        }
        this.setImageItemRef = elem => {
            this.imageItems.push(elem);
        }

        this.onScroll = this.onScroll.bind(this);
    }

    state = {
        current_image: 0
    }

    componentDidMount()
    {
        window.addEventListener("scroll", this.onScroll);

        setTimeout(() => {
            this.onImageTransition()
        }, (5)*1000);
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
                />

                <Banner 
                    getScreenWidth={this.props.getScreenWidth}
                />

                <Strategies
                    checkAuthorization={this.props.checkAuthorization}
                    getUserId={this.props.getUserId}
                    getStrategiesList={this.props.getStrategiesList}
                    getScreenWidth={this.props.getScreenWidth}
                    getIsBetaTester={this.props.getIsBetaTester}
                    createStrategy={this.props.createStrategy}
                    getScriptFile={this.props.getScriptFile}
                />
                
            </div>

            <div ref={this.setBannerImgRef} className="home banner-img">
                <div ref={this.setImageRef} className="opaque">
                    <img ref={this.setImageItemRef} className="home banner-img-background" src={process.env.PUBLIC_URL + "/images/relax.jpg"}  alt="Banner Background Image" />
                    <img ref={this.setImageItemRef} className="home banner-img-main" src={process.env.PUBLIC_URL + "/images/relax.jpg"}  alt="Banner Image" />
                    <div className="home banner-img-shadow"></div>
                </div>
                <div ref={this.setImageRef}>
                    <img ref={this.setImageItemRef} className="home banner-img-background" src={process.env.PUBLIC_URL + "/images/golf.jpg"}  alt="Banner Background Image" />
                    <img ref={this.setImageItemRef} className="home banner-img-main" src={process.env.PUBLIC_URL + "/images/golf.jpg"}  alt="Banner Image" />
                    <div className="home banner-img-shadow"></div>
                </div>
                <div ref={this.setImageRef}>
                    <img ref={this.setImageItemRef} className="home banner-img-background" src={process.env.PUBLIC_URL + "/images/picnic.jpg"}  alt="Banner Background Image" />
                    <img ref={this.setImageItemRef} className="home banner-img-main" src={process.env.PUBLIC_URL + "/images/picnic.jpg"}  alt="Banner Image" />
                    <div className="home banner-img-shadow"></div>
                </div>
            </div>

            <section id="first-section" className="se-section features-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-6 se-feature">
                            <span className="icon iconify" data-icon="cil:golf" data-inline="false"></span>
                            <h5>Get your Life Back</h5>
                            <p>Would you rather be playing golf? Free up around 30 hours of your life every week.</p>
                        </div>

                        <div className="col-md-4 col-sm-6 se-feature">
                            <span className="icon iconify" data-icon="fluent:pin-28-regular" data-inline="false"></span>
                            <h5>Pin Point Accuracy</h5>
                            <p>With pin point accuracy & super-fast order placement, AlgoWolf recognizes and executes every trading setup flawlessly according to the strategy rules.</p>
                        </div>

                        <div className="col-md-4 col-sm-6 se-feature">
                            <i className="icon ion-ios-lightbulb-outline"></i>
                            <h5>Easy to Use</h5>
                            <p>With just a few clicks you're ready to go. It switches itself on and off and automatically commences the each day without you having to lift a finger.</p>
                        </div>
                        
                        <div id="features-separator" className="col-md-12"></div>

                        <div className="col-md-6 col-sm-6 se-feature">
                            <i className="icon ion-ios-speedometer-outline"></i>
                            <h5>Tireless Performance</h5>
                            <p>Even the best traders in the world struggle to come close to matching AlgoWolf’s tireless performance.</p>
                        </div>

                        <div className="col-md-6 col-sm-12 se-feature">
                            <span className="icon iconify" data-icon="ph:chart-line-up-light" data-inline="false"></span>
                            <h5>Your Ultimate Trader</h5>
                            <p>No more costly human error due to frustration, fatigue, cognitive bias or inexperience… AlgoWolf is your ultimate trader.</p>
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

    onScroll(e)
    {
        for (let elem of this.imageItems)
        {
            if (elem)
            {
                elem.style.top = "calc(50% + " + Math.max(-elem.clientHeight/2, (window.scrollY - this.images[0].parentNode.offsetTop + elem.clientHeight)/9) + "px)";
            }
        }
    }

}

export default withRouter(Home2);
