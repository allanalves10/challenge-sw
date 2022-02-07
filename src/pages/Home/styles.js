import styled from 'styled-components';
import card from './../../assets/capa.jpg';

export const MessageError = styled.h2`
    color: var(--blue); 
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 2rem;

    button {
        background: transparent;
        border-color: transparent;

        &:disabled {
            cursor: not-allowed;
        }
    }

    p {
        color: var(--blue);
        font-weight: bold;
    }
`;

export const PersonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
        background-image: url(${card});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        padding: 20px;
        transition: box-shadow 0.2s;

        &:hover {
            box-shadow: 0 0 0.5em var(--blue);
        }

        p {
            font-size: 1.25rem;
            font-weight: bold;
            line-height: 1.5rem;
            text-align: center;
        }
    
        button {
            background: var(--blue);
            color: var(--white);
            border: 0px;
            border-radius: 5px;
            overflow: hidden;
            margin-top: auto;
    
            display: flex;
            align-items: center;
            transition: filter 0.2s;
    
            &:hover {
                filter: brightness(0.9);
            }
    
            div {
                display: flex;
                align-items: center;
                padding: 12px;
            }
    
            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
                font-size: 20px
            }
        }
    }
`;

export const ContainerSearch = styled.div`
    display: flex; 
    gap: 10px;
    justify-content: right; 
    padding: 2rem 2rem 0 0;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 2rem 0 0 0;
    }

    input {
        border: 1px solid var(--blue);
        border-radius: 0.5rem 0 0 0.5rem;
        height: 3rem;
        font-size: 1.2rem;
        padding-left: 0.5rem;
        width: 300px;

        @media (max-width: 768px) {
            font-size: 1rem;
            width: 250px;
        }

        &:focus {
            outline: none;
        }
    }

    button#clearButton {
        background: var(--red);
        border: none;
        color: var(--white);
        transition: filter 0.2s;
        width: 1.5rem;

        &:hover {
            filter: brightness(0.9);
        }
    }

    button:last-child {
        background: var(--white);
        border: 1px solid var(--blue);
        border-radius: 0 0.5rem 0.5rem 0;
        color: var(--blue);
        font-size: 1.2rem;
        font-weight: bold;
        transition: filter 0.2s;
        width: 5rem;

        @media (max-width: 768px) {
            font-size: 1rem;
            width: 4rem;
        }

        &:hover {
            filter: brightness(0.9)
        }
    }
`;