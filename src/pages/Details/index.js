import React, { useState } from 'react';
import { useViewDetails } from '../../hooks/useViewDetails';

import { DetailsColors, DetailsPerson } from './styles';

function Details () {
    const { personSelected } = useViewDetails()

    const [personStarWars, setPersonStarWars] = useState(personSelected);

    return (
        <>
            <DetailsColors>
                Lista de Detalhes do Personagem
            </DetailsColors>
            <DetailsPerson>
                <li key={personStarWars.name}>
                    <h2>Nome: {personStarWars.name}</h2>
                    <h2>Data de Nascimento: {personStarWars.birth_year !== 'unknown'? personStarWars.birth_year : 'Não Informado'}</h2>
                    <h2>Gênero: {personStarWars.gender !== 'n/a' ? personStarWars.gender : 'Não Informado'}</h2>
                    <h2>Altura: {personStarWars.height}cm</h2>
                    <h2>Peso: {personStarWars.mass}Kg</h2>
                    <h2>Cor do Cabelo: {personStarWars.hair_color !== 'n/a' ? personStarWars.hair_color : 'Não Informado'}</h2>
                    <h2>Cor dos Olhos: {personStarWars.eye_color !== 'n/a' ? personStarWars.eye_color : 'Não Informado'}</h2>
                    <h2>Cor da Pele: {personStarWars.skin_color !== 'n/a' ? personStarWars.skin_color : 'Não Informado'}</h2>
                </li>
            </DetailsPerson>
            {/* Falta um Botão de Voltar */}
        </>
    );
}

export default Details;
