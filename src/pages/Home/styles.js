import styled from 'styled-components';

export const HomeColors = styled.h1`
    color: #00BFFF; 
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
`;

export const MessageError = styled.h2`
    color: #00BFFF; 
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    button {
        background: transparent;
        border-color: transparent;
    }

    p {
        color: gold;
    }
`;

export const PersonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: black;
    grid-gap: 1rem;
    list-style: none;
    text-align: center;
    margin-top: 100px;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 20px
    }

    h3 {
        color: #111111;
        font-weight: bold
    }

    button {
        background: #00BFFF;
        color: #ffffff;
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
`; 