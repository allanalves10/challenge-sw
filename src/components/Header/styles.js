import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
        background: #fff;
        
        button {
            color: orange;
            padding: 20px;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.8)
            }
        }

        p {
            font-size: 20px;
            color: red;
        }

    }
`;