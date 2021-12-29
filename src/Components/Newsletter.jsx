import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: 'auto', padding: '8px 0' })};
`
const Title = styled.h2`
  font-size: 4vw;
  margin-bottom: 20px;
`
const Description = styled.p`
  font-size: 2vw;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })};
`
const InputContainer = styled.div`
width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Don't miss a single update from new offer from our store!</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;