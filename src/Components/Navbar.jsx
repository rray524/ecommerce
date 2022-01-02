import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 40px;
    ${mobile({ height: 'auto' })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
${mobile({ justifyContent: 'center' })}
`
const Center = styled.div`
flex: 1;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: 0 })}
`
const Input = styled.input`
    border: none;
    &:focus{
        outline: none;
        box-shadow: none;
    }
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
    ${mobile({ justifyContent: 'center' })}
    
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 24px;
`
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center><Link to="/" style={{ textDecoration: 'none', color: '#282c34' }}><Logo>E-ZONEX.</Logo></Link></Center>
                <Right>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;