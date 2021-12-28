import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 40px;

`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex: 1;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 24px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;