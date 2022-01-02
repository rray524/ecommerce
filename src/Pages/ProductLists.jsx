
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductLists = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,

        });

    };
    console.log(filters);
    return (
        <Container>
            <Navbar />
            <div style={{ padding: '10px 0' }}></div>
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (Low - High)</Option>
                        <Option value="desc">Price (Hight - Low)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} key={cat.id} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductLists;