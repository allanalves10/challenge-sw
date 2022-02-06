import React, { useEffect, useState } from 'react';
import { useViewVehicles } from '../../hooks/useViewVehicles';

import { DetailsColors, DetailsVehicles } from './styles';

function Vehicles() {
    const { vehicleSelected } = useViewVehicles();
    const [vehicle, setVehicle] = useState();

    useEffect(() => {
        if (vehicleSelected) {
            setVehicle(vehicleSelected);
        }
    }, [vehicleSelected]);

    return (
        <>
            <DetailsColors>
                Detalhes do Veículo
            </DetailsColors>
            <DetailsVehicles>
                {vehicle && (
                    <li key={vehicle.name}>
                        <h3>Nome: {vehicle.name}</h3>
                        {/* <h3>Data de Nascimento: {vehicles.birth_year !== 'unknown'? vehicles.birth_year : 'Não Informado'}</h3>
                        <h3>Gênero: {vehicles.gender !== 'n/a' ? vehicles.gender : 'Não Informado'}</h3>
                        <h3>Altura: {vehicles.height}cm</h3>
                        <h3>Peso: {vehicles.mass}Kg</h3>
                        <h3>Cor do Cabelo: {vehicles.hair_color !== 'n/a' ? vehicles.hair_color : 'Não Informado'}</h3>
                        <h3>Cor dos Olhos: {vehicles.eye_color !== 'n/a' ? vehicles.eye_color : 'Não Informado'}</h3>
                        <h3>Cor da Pele: {vehicles.skin_color !== 'n/a' ? vehicles.skin_color : 'Não Informado'}</h3> */}
                    </li>
                )}
            </DetailsVehicles>
            {/* Falta um Botão de Voltar */}
        </>
    );
}

export default Vehicles;
