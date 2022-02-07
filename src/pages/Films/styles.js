import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsPerPerson = styled.ul`
    display: flex;
    justify-content: center;
    background: var(--yellow);
    padding: 3rem;
    margin-top: 2rem;

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 5px;
        padding: 20px;
    }

    p {
        line-height: 1.5rem;
        font-size: 1.25rem;
        text-align: justify;
        width: 400px;

        @media (max-width: 768px) {
            padding: 0 1rem;
        }
    }
`;

export const ReturnButton = styled(Link)`
    background: var(--yellow);
    border: 1px solid var(--black);
    border-radius: 1rem;
    color: var(--black);
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    margin-top: 2rem;
    padding: 0.5rem 0;
    text-decoration: none;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`;