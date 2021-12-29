
import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import Category from './Category';
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })};
`
const Categories = () => {
    return (
        <Container>
            {
                categories.map((item) => <Category item={item}></Category>)
            }
        </Container>
    );
};

export default Categories;