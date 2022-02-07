import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 3rem 0;
`;

export const LinkStyles = styled(Link)`
    img {
        height: 250px;
        width: 500px;

        @media (max-width: 768px) {
            height: 120px;
            width: 250px;
        }
    }
`