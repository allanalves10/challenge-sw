import React from 'react';

import { Link } from 'react-router-dom';

import { Container, LinkStyles } from './styles';

import logo from './../../assets/star_wars_logo.png'

export default function Header() {
    return(
        <Container>
            <LinkStyles to="/">
                <img src={logo} alt="Star Wars"/>
            </LinkStyles>
        </Container>
    )
}