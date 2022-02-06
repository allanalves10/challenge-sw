import styled from 'styled-components';

export const HomeColors = styled.h1`
    color: var(--black);
    text-shadow: 2px 2px var(--yellow);
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
`;

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
    grid-template-columns: repeat(3, 1fr);
    color: black;
    grid-gap: 1rem;
    list-style: none;
    text-align: center;
    margin: 2rem 2rem 1rem;

    li {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 20px;
        transition: box-shadow 0.2s;

        &:hover {
            box-shadow: 0 0 0.5em var(--blue);
        }

        h3 {
            color: var(--black);
            font-weight: bold;
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
    justify-content: right; 
    margin: 2rem 2rem 0 0;
    gap: 10px;

    input {
        border: 1px solid var(--blue);
        border-radius: 0.5rem 0 0 0.5rem;
        height: 2rem;
        padding-left: 0.5rem;
        width: 200px;

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
        border: none;
        border-radius: 0 0.5rem 0.5rem 0;
        width: 4rem;
        font-weight: bold;
        transition: filter 0.2s;
        background: var(--white);
        color: var(--blue);
        border: 1px solid var(--blue);

        &:hover {
            filter: brightness(0.9)
        }
    }
`;