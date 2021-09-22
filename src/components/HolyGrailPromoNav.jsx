import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Graph from './Graph';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/pro-regular-svg-icons';
import Footer2 from './Footer2';

class HolyGrailPromoNav extends Component
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
        strategies: [],
        is_graph_update: false
    }

    async componentDidMount()
    {
        setTimeout(() => {
            this.onImageTransition()
        }, (5)*1000);

        let { strategies } = this.state;
        strategies = await this.props.getStrategiesList();

        this.setState({ strategies });
    }

    render()
    {
        const { REACT_APP_APP_BASE_URL } = process.env;

        return (
            <React.Fragment>
            
            <div className="promo header-group">
                <div className="promo banner-img">
                    <div ref={this.setImageRef} className="opaque">
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_4.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_4.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_12.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_12.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_9.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_9.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_13.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_13.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_16.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_16.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_14.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_14.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_20.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_20.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_2.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_2.jpg"} />
                    </div>
                    <div ref={this.setImageRef}>
                        <img className="promo banner-img-background" src={process.env.PUBLIC_URL + "/images/hg_22.jpg"} />
                        <img className="promo banner-img-main" src={process.env.PUBLIC_URL + "/images/hg_22.jpg"} />
                    </div>
                </div>
                
                <div className="promo header-label-parent">
                    <div className="promo header-label">
                        <div className="promo header-shadow"/>
                        <div className="promo header-background"/>
                        <div className="promo header-label-group">
                            <a href="/hgpro" className="promo title"><span>HG Pro</span></a>
                            {/* <a href="/">Home</a> */}
                            <a className="hidden-xs hidden-sm" href="/">Home</a>
                            <a className="hidden-xs hidden-sm" href="/hgpro#calculator">Calculator</a>
                            <a className="hidden-xs hidden-sm" href="/hgpro#pricing">Pricing</a>
                            <a className="hidden-xs hidden-sm" href="/hgpro/getting-started" target="_blank">Getting Started</a>
                            <a className="hidden-xs hidden-sm" href="/hgpro/faq" target="_blank">FAQ</a>
                            <a className="hidden-xs hidden-sm" href={REACT_APP_APP_BASE_URL + "/hgpro/results"} target="_blank">Baseline</a>
                            <div className="sm-hide">
                                {this.getDashboardHeaderBtn()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

    async onAddToDashboard(e)
    {
        const strategy_package = e.target.getAttribute('name') + '.v1_0_0';

        // TEMP
        const name = "HG Pro";

        await this.props.createStrategy({
            name: name,
            package: strategy_package
        })

        // let { strategies } = this.state;
        // strategies = await this.props.getStrategiesList();
        // this.setState({ strategies });

        window.location = '/app';
    }
    
    getDashboardHeaderBtn = () =>
    {
        const pkg = 'HolyGrail_Pro';
        const user_id = this.props.getUserId();
        const is_beta_tester = this.props.getIsBetaTester();
        const { strategies } = this.state;
        const { REACT_APP_FRONT_BASE_URL } = process.env;
        
        let dashboard_btn;
        if (!user_id)
        {
            dashboard_btn = (
                <a href={"/login?redirect=" + encodeURIComponent(REACT_APP_FRONT_BASE_URL + "/hgpro")}>

                Login/Sign Up

                </a>
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
                <div id="add_to_dashboard" name={"HolyGrail_Pro"} onClick={this.onAddToDashboard.bind(this)}>
                    <FontAwesomeIcon className='promo header-icon' icon={faPlusCircle} />
                    Add to Dashboard
                </div>
            );
        }
        else
        {
            dashboard_btn = (
                <a href="#pricing">

                    <FontAwesomeIcon className='promo header-icon' icon={faPlusCircle} />
                    Add to Dashboard
                
                </a>
            );
        }

        return dashboard_btn;
    }

}

export default withRouter(HolyGrailPromoNav);
