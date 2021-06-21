import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import rapid from 'eway-rapid';

class EwayTest extends Component
{

    async componentDidMount()
    {
        // const client = rapid.createClient(EWAY_KEY, EWAY_PASSWORD, EWAY_ENDPOINT);
        // console.log(client);
        // client.createTransaction(rapid.Enum.Method.RESPONSIVE_SHARED, {
        //     "Payment": {
        //         "TotalAmount": 100
        //     },
        //     "RedirectUrl": "http://127.0.0.1:3005/eway",
        //     "RedirectUrl": "http://127.0.0.1:3005/eway",
        //     "TransactionType": "Purchase"
        // })
        // .then((res) => {
        //     if (res.getErrors().length == 0)
        //     {
        //         console.log("SUCCESS");
        //         const redirectUrl = res.get('SharedPaymentUrl');
        //         console.log("REDIRECT URL: " + redirectUrl)
        //     }
        //     else
        //     {
        //         res.getErrors().forEach((err) => {
        //             console.log("Response Messages: " + rapid.getMessage(err, "en"));
        //         });
        //     }
        // })
        // .catch((reason) => {
        //     reason.getErrors().forEach((err) => {
        //         console.log("Response Messages: " + rapid.getMessage(err, "en"));
        //     });
        // });

        const encodedString = Buffer.from(EWAY_KEY + ":" + EWAY_PASSWORD).toString('base64');
        console.log(encodedString);
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Basic ' + encodedString
            },
            credentials: 'include',
            body: JSON.stringify({
                "Payment": {
                    "TotalAmount": 100
                },
                "RedirectUrl": "http://127.0.0.1:3005/",
                "CancelUrl": "http://127.0.0.1:3005/",
                "Method": "ProcessPayment",
                "TransactionType": "Purchase"
            })
        };

        const res = await fetch("https://api.sandbox.ewaypayments.com/AccessCodesShared", requestOptions);
        console.log('DONE');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        if (res.status === 200)
        {
            
        }
    }

    render()
    {
        return (
            <div className="home body">
                
                <Navigation2 
                    getUserId={this.props.getUserId}
                    getFirstName={this.props.getFirstName}
                />
                
                eWay
            </div>
        );
    }

}

const EWAY_KEY = "60CF3CeIMzDqQgopwbmIWZLEhwXLMl/HBZbSXUwFPhPts1tHn6R2KNMoWHx1iTD8roXYXW";
const EWAY_PASSWORD = 'NobPusYc';
const EWAY_ENDPOINT = 'Sandbox';

export default withRouter(EwayTest);
