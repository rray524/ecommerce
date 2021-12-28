import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color:white;
    font-size: 14px;
    font-weight:500;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Announcement = () => {
    return (
        <Container>
            <p>Super Deal! Free delivery on order over $50</p>
        </Container>
    );
};

export default Announcement;