import { Link } from 'react-router-dom';
import styled from 'styled-components';
import card from './../../assets/all-star-wars.jpg';

export const DetailsDescription = styled.h1`
    text-align: center;
    color: var(--black);
    text-shadow: 2px 2px var(--yellow);
    font-size: 3rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const DetailsPerson = styled.ul`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    color: black;
    grid-gap: 1rem;
    list-style: none;
    text-align: center;
    margin: 2rem 2rem 1rem;

    @media (max-width: 1680px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    li {
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 20px;
        position: relative;
        z-index: 5;

        &:hover {
            box-shadow: 0 0 0.5em var(--blue);
        }
        
        div {
            background-image: url(${card});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 1rem;
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
        }

        h2 {
            color: var(--black);
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        p {
            font-size: 1.25rem;
            font-weight: bold;
            line-height: 1.5rem;
            text-align: center;
        }
        
        a {
            font-size: 1.25rem;
            font-weight: bold;
            line-height: 1.5rem;
            text-align: center;
    
            &:hover {
                text-decoration: underline;
            }
        }

        span {
            display: flex;
            align-items: center;
            color: var(--black);
            text-shadow: 2px 2px var(--yellow);
            font-size: 2rem;
            font-weight: bold;
            line-height: 1.5rem;
            text-align: center;
            padding: 2rem;
        }
    }
`;

export const ReturnButtonDetails = styled(Link)`
    background: var(--blue);
    border-radius: 1rem;
    color: var(--white);
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    margin: 4rem auto;
    padding: 0.5rem 0;
    text-decoration: none;
    transition: filter 0.2s;
    width: 300px;

    &:hover {
        filter: brightness(0.8);
    }
`;