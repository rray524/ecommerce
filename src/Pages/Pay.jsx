import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';


const Pay = () => {
    const KEY = "pk_test_51HtIWYCoNre9C6cglw9RLOxJoJd5wORsQGQFTZ2P0GGRi1n6cK2eTRHqBfdpvPMa86SaY1kzrI3zFJoCwl5a1y7G00gjB1DVTN";
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const onToken = (token) => {
        setStripeToken(token);
    };
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
                history.push('/success')
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken, history])
    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {
                stripeToken ? (<span>Processing. Please wait...</span>) : (
                    <StripeCheckout
                        name="E-Zonex"
                        description="your total is $20"
                        image="https://avatars.githubusercontent.com/u/1486366?v=4"
                        billingAddress
                        shippingAddress
                        amount={2000} // cents
                        currency="USD"
                        stripeKey={KEY}
                        token={onToken}
                    >
                        <button style={{ border: 'none', width: 120, borderRadius: 5, padding: '20px', backgroundColor: 'black', color: 'white', fontWeight: '600', cursor: 'pointer' }}>Pay</button>
                    </StripeCheckout>
                )
            }
        </div>
    );
};

export default Pay;