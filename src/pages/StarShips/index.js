import React, { useEffect, useState } from 'react';
import { useViewStarShips } from '../../hooks/useViewStarShips';
import { DetailsDescription } from '../Details/styles';
import { DetailsPerPerson, ReturnButton } from '../Films/styles';

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
            <DetailsDescription>
                Detalhes da Nave Espacial
            </DetailsDescription>
            <DetailsPerPerson>
                {starShip && (
                    <li key={starShip.name}>
                        <p><b>Nome:</b> {starShip.name || '-'}</p>
                        <p><b>Modelo:</b> {starShip.model || '-'}</p>
                        <p><b>Custo em Créditos:</b> {starShip.cost_in_credits || '-'}</p>
                        <p><b>Comprimento:</b> {starShip.length || '-'}</p>
                        <p><b>Velocidade Máxima na Atmosfera:</b> {starShip.max_atmosphering_speed || '-'}</p>
                        <p><b>Classe:</b> {starShip.starship_class || '-'}</p>

                        <ReturnButton to='/details'>Voltar</ReturnButton>
                    </li>
                )}
            </DetailsPerPerson>
        </>
    );
}

export default StarShips;
