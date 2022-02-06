import styled from 'styled-components';

export const DetailsColors = styled.h1`
    text-align: center;
    color: var(--black);
    text-shadow: 2px 2px var(--yellow);
    font-size: 3rem;
    font-weight: bold;
`;

export const DetailsPerson = styled.ul`
    display: flex;
    justify-content: center;
    background: gold;
    padding: 3rem;
    margin-top: 2rem;
    border-radius: 5px;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 20px
    }

    h3 {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
    }
    
    a {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;

        &:hover {
            text-decoration: underline;
        }
    }
`;