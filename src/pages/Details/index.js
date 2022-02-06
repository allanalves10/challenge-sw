import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useViewDetails } from '../../hooks/useViewDetails';
import { useViewFilms } from '../../hooks/useViewFilms';
import { useViewStarShips } from '../../hooks/useViewStarShips';
import { useViewVehicles } from '../../hooks/useViewVehicles';

import { DetailsColors, DetailsPerson } from './styles';

function Details () {
    const navigate = useNavigate();
    const { personSelected } = useViewDetails();
    const { setFilmSelected } = useViewFilms();
    const { setStarShipSelected } = useViewStarShips();
    const { setVehicleSelected } = useViewVehicles();

    const { films, starships, vehicles } = personSelected;

    const [personStarWars, setPersonStarWars] = useState(personSelected);
    const [listFilms, setListFilms] = useState([]);
    const [listStarShips, setListStarShips] = useState([]);
    const [listVehicles, setListVehicles] = useState([]);

    const [requestsFilms, setRequestsFilms] = useState(() => {
        if (films && !!films.length) return films.map((film) => axios.get(film));
        return [];
    });
    const [requestsStarShips, setRequestsStarShips] = useState(() => {
        if (starships && !!starships.length) return starships.map((starship) => axios.get(starship));
        return null;
    });
    const [requestsVehicles, setRequestsVehicles] = useState(() => {
        if (vehicles && !!vehicles.length) return vehicles.map((vehicle) => axios.get(vehicle));
        return null;
    });

    useEffect(() => {
        if (personSelected) {
            setPersonStarWars(personSelected);
            if (films && !!films.length) setRequestsFilms(films.map((film) => axios.get(film)));
            if (starships &&!!starships.length) setRequestsVehicles(starships.map((starship) => axios.get(starship)));
            if (vehicles && !!vehicles.length) setRequestsStarShips(vehicles.map((vehicle) => axios.get(vehicle)));
        }
    }, [personSelected]);

    useEffect(() => {
        if (requestsFilms) {
            getDataFilms();
        }
    }, [requestsFilms]);
    
    useEffect(() => {
        if (requestsStarShips) {
            getDataStarShips();
        }
    }, [requestsStarShips]);

    useEffect(() => {
        if (requestsVehicles) {
            getDataVehicles();
        }
    }, [requestsVehicles]);

    async function getDataFilms() {
        const resultsPromises = await axios.all(requestsFilms).then((res) => {
            return res.map(obj => obj.data)
        });

        setListFilms(resultsPromises);
    }

    async function getDataStarShips() {
        const resultsPromises = await axios.all(requestsStarShips).then((res) => {
            return res.map(obj => obj.data)
        });

        setListStarShips(resultsPromises);
    }
    
    async function getDataVehicles() {
        const resultsPromises = await axios.all(requestsVehicles).then((res) => {
            return res.map(obj => obj.data)
        });
        
        setListVehicles(resultsPromises);
    }

    function viewFilms(selectedFilm) {
        localStorage.setItem('@SW:filmSelected', JSON.stringify(selectedFilm));
        setFilmSelected(selectedFilm);
        navigate('/film');
    }

    function viewStarShips(selectedStarShip) {
        localStorage.setItem('@SW:starShipSelected', JSON.stringify(selectedStarShip));
        setStarShipSelected(selectedStarShip);
        navigate('/starship');
    }
    function viewVehicle(selectedVehicle) {
        localStorage.setItem('@SW:vehicleSelected', JSON.stringify(selectedVehicle));
        setVehicleSelected(selectedVehicle);
        navigate('/vehicle');
    }

    return (
        <>
            <DetailsColors>
                Detalhes do Personagem
            </DetailsColors>
            <DetailsPerson>
                <li key={personStarWars.name}>
                    <h3>Nome: {personStarWars.name}</h3>
                    <h3>Data de Nascimento: {personStarWars.birth_year !== 'unknown'? personStarWars.birth_year : 'Não Informado'}</h3>
                    <h3>Gênero: {personStarWars.gender !== 'n/a' ? personStarWars.gender : 'Não Informado'}</h3>
                    <h3>Altura: {personStarWars.height}cm</h3>
                    <h3>Peso: {personStarWars.mass}Kg</h3>
                    <h3>Cor do Cabelo: {personStarWars.hair_color !== 'n/a' ? personStarWars.hair_color : 'Não Informado'}</h3>
                    <h3>Cor dos Olhos: {personStarWars.eye_color !== 'n/a' ? personStarWars.eye_color : 'Não Informado'}</h3>
                    <h3>Cor da Pele: {personStarWars.skin_color !== 'n/a' ? personStarWars.skin_color : 'Não Informado'}</h3>
                    {!!listFilms && <h3>Filmes</h3>}
                    {!!listFilms.length && listFilms.map(film => (
                        <a key={film.title} onClick={() => viewFilms(film)} style={{cursor: 'pointer'}}>{film.title}</a>
                    ))}
                    {!!listStarShips && <h3>Naves Espaciais</h3>}
                    {!!listStarShips.length && listStarShips.map(starship => (
                        <a key={starship.name} onClick={() => viewStarShips(starship)} style={{cursor: 'pointer'}}>{starship.name}</a>
                    ))}
                    {!!listVehicles && <h3>Veículos</h3>}
                    {!!listVehicles.length && listVehicles.map(vehicle => (
                        <a key={vehicle.name} onClick={() => viewVehicle(vehicle)} style={{cursor: 'pointer'}}>{vehicle.name}</a>
                    ))}

                </li>
            </DetailsPerson>
            {/* Falta um Botão de Voltar */}
        </>
    );
}

export default Details;
