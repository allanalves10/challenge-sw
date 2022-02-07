import React, { useEffect, useState } from 'react';
import { useViewVehicles } from '../../hooks/useViewVehicles';
import { DetailsDescription } from '../Details/styles';
import { DetailsPerPerson, ReturnButton } from '../Films/styles';

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
            <DetailsDescription>
                Detalhes do Veículo
            </DetailsDescription>
            <DetailsPerPerson>
                {vehicle && (
                    <li key={vehicle.name}>
                        <p><b>Nome:</b> {vehicle.name || '-'}</p>
                        <p><b>Modelo:</b> {vehicle.model || '-'}</p>
                        <p><b>Custo em Créditos:</b> {vehicle.cost_in_credits || '-'}</p>
                        <p><b>Comprimento:</b> {vehicle.length || '-'}</p>
                        <p><b>Velocidade Máxima na Atmosfera:</b> {vehicle.max_atmosphering_speed || '-'}</p>
                        <p><b>Classe:</b> {vehicle.vehicle_class || '-'}</p>

                        <ReturnButton to='/details'>Voltar</ReturnButton>
                    </li>
                )}
            </DetailsPerPerson>
        </>
    );
}

export default Vehicles;
