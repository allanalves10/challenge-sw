import React, { useEffect, useState } from 'react';
import { useViewStarShips } from '../../hooks/useViewStarShips';

import { DetailsColors, DetailsStarShips } from './styles';

function StarShips() {
    const { starShipSelected } = useViewStarShips();
    const [starShip, setStarShip] = useState();

    useEffect(() => {
        if (starShipSelected) {
            setStarShip(starShipSelected);
        }
    }, [starShipSelected]);

    return (
        <>
            <DetailsColors>
                Detalhes da Nave Espacial
            </DetailsColors>
            <DetailsStarShips>
                {starShip && (
                    <li key={starShip.name}>
                        <h3>Nome: {starShip.name}</h3>
                        {/* <h3>Data de Nascimento: {starShip.birth_year !== 'unknown'? starShip.birth_year : 'Não Informado'}</h3>
                        <h3>Gênero: {starShip.gender !== 'n/a' ? starShip.gender : 'Não Informado'}</h3>
                        <h3>Altura: {starShip.height}cm</h3>
                        <h3>Peso: {starShip.mass}Kg</h3>
                        <h3>Cor do Cabelo: {starShip.hair_color !== 'n/a' ? starShip.hair_color : 'Não Informado'}</h3>
                        <h3>Cor dos Olhos: {starShip.eye_color !== 'n/a' ? starShip.eye_color : 'Não Informado'}</h3>
                        <h3>Cor da Pele: {starShip.skin_color !== 'n/a' ? starShip.skin_color : 'Não Informado'}</h3> */}
                    </li>
                )}
            </DetailsStarShips>
        </>
    );
}

export default StarShips;
