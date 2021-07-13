import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Banner extends Component
{
    render()
    {

        return (
            <React.Fragment>

            {this.getBannerElem()}

            </React.Fragment>
        );
    }

    getBannerElem()
    {
        const screen_width = this.props.getScreenWidth();

        if (screen_width <= 580)
        {
            // Vertical Banner
            return (
                <div id="hg-banner" className="banner body">
                    <div id="hg-title-group-vert">
                        <div id="hg-title-1-vert">HolyGrail PRO</div>
                        <div id="hg-title-2-vert">OUT NOW!</div>
                    </div>
                    <div id="hg-btn-group-vert">
                        <div id="hg-btn-1-vert">Add to Dashboard</div>
                        <div id="hg-btn-2-vert">See Results</div>
                    </div>
                </div>
            );
        }
        else
        {
            // Horizontal Banner
            return (
                <div id="hg-banner" className="banner body">
                    <div>
                        <div id="hg-title-1">HolyGrail PRO</div>
                        <div id="hg-title-2">OUT NOW!</div>
                    </div>
                    <div id="hg-btn-group">
                        <div id="hg-btn-1">Add to Dashboard</div>
                        <div id="hg-btn-2">See Results</div>
                    </div>
                </div>
            );
        }
    }

}

export default withRouter(Banner);
