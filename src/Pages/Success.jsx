import React from 'react';
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import { userRequest } from "../requestMethods";


const Success = () => {
    const location = useLocation();
    console.log(location);
    // //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    // const data = location.state.stripeData;
    // const cart = location.state.cart;
    // const currentUser = useSelector((state) => state.user.currentUser);
    // const [orderId, setOrderId] = useState(null);

    // useEffect(() => {
    //     const createOrder = async () => {
    //         try {
    //             const res = await userRequest.post("/orders", {
    //                 userId: currentUser._id,
    //                 products: cart.products.map((item) => ({
    //                     productId: item._id,
    //                     quantity: item._quantity,
    //                 })),
    //                 amount: cart.total,
    //                 address: data.billing_details.address,
    //             });
    //             setOrderId(res.data._id);
    //         } catch { }
    //     };
    //     data && createOrder();
    // }, [cart, data, currentUser]);
    const Container = styled.div``;
    return (
        <Container>
            <Navbar />
            <div style={{ padding: '10px 0' }}></div>
            <Announcement />
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successful. Your order is being prepared...`}
            <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button> */}
                <h2>Successful</h2>
                <p>You order is being prepared. Thanks for choosing E-ZONEX</p>

            </div>
            <Footer />
        </Container>

    );
};

export default Success;