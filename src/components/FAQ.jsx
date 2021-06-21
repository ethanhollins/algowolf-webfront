import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class FAQ extends Component
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
                        FAQ
                    </div>
                </div>

                <div className="general-info body" id="faq-contents">
                    <div className="general-info item">
                        <h1 className="general-info header">Contents</h1>
                        <ul>
                            <li><a href="#getting-started-faq">Getting Started</a></li>
                            <li><a href="#broker-faq">Strategies</a></li>
                            <li><a href="#broker-faq">Setting up my Broker</a></li>
                            <li><a href="#trading-live-faq">Trading Live</a></li>
                            <li><a href="#trading-live-faq">Holy Grail</a></li>
                            <li><a href="#general-faq">General</a></li>
                        </ul>
                    </div>
                </div>

                <section id="faq-body" className="se-section section">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">Getting Started FAQs</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading1-12">
                                            <h6 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse1-12" aria-expanded="false" aria-controls="collapse1-12" className="trans collapsed">Can I use Accordion for simple FAQ? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse1-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading2-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse2-12" aria-expanded="false" aria-controls="collapse2-12">Is this your second question? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse2-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading3-12">
                                            <h6 className="panel-title"><a className="trans" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse3-12" aria-expanded="true" aria-controls="collapse3-12">Are you looking for something more in this? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse3-12" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading3-12" aria-expanded="true">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading4-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse4-12" aria-expanded="false" aria-controls="collapse4-12">Is this you second question? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse4-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="broker-faq">
                                <h4 className="underline">Setting up my Broker FAQs</h4>
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

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree-12">
                                            <h6 className="panel-title"><a className="trans" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapseThree-12" aria-expanded="true" aria-controls="collapseThree-12">Are you looking for something more in this? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapseThree-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-12" aria-expanded="false">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="trading-live-faq">
                                <h4 className="underline">Trading Live FAQs</h4>
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

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree-12">
                                            <h6 className="panel-title"><a className="trans" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapseThree-12" aria-expanded="true" aria-controls="collapseThree-12">Are you looking for something more in this? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapseThree-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-12" aria-expanded="true">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                                on it squid single-origin coffee nulla assumenda shoreditch et.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 text-center" id="general-faq">
                                <h4 className="underline">General FAQs</h4>
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

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree-12">
                                            <h6 className="panel-title"><a className="trans" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapseThree-12" aria-expanded="true" aria-controls="collapseThree-12">Are you looking for something more in this? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapseThree-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree-12" aria-expanded="true">
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

                
                
            </div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(FAQ);
