import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from './../../assets/Star_Wars_Logo.svg'

export default function Header() {
    return(
        <Container>
            <Link to="/">
                <img src={logo} style={{width: '500px', height: '250px'}} alt="Star Wars"/>
            </Link>
        </Container>
    )
}