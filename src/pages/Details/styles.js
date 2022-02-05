import styled from 'styled-components';

export const DetailsColors = styled.h3`
    text-align: center;
    color: #00BFFF;
    font-size: 50px;
    font-weight: bold;
`;

export const DetailsPerson = styled.ul`
    display: flex;
    justify-content: center;
    background: gold;
    padding: 50px;
    border-radius: 5px;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 20px
    }
    h2 {
        font-weight: bold;
        text-align: center;

    }
`;