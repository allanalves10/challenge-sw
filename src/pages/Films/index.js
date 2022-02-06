import React, { useEffect, useState } from 'react';
import { useViewFilms } from '../../hooks/useViewFilms';

import { DetailsColors, DetailsFilms } from './styles';

function Films() {
    const { filmSelected } = useViewFilms();
    const [film, setFilm] = useState();

    useEffect(() => {
        if (filmSelected) {
            setFilm(filmSelected);
        }
    }, [filmSelected]);

    return (
        <>
            <DetailsColors>
                Detalhes do Filme
            </DetailsColors>
            <DetailsFilms>
                {film && (
                    <li key={film.title}>
                        <h3>Nome: {film.title}</h3>
                        {/* <h3>Data de Nascimento: {films.birth_year !== 'unknown'? films.birth_year : 'Não Informado'}</h3>
                        <h3>Gênero: {films.gender !== 'n/a' ? films.gender : 'Não Informado'}</h3>
                        <h3>Altura: {films.height}cm</h3>
                        <h3>Peso: {films.mass}Kg</h3>
                        <h3>Cor do Cabelo: {films.hair_color !== 'n/a' ? films.hair_color : 'Não Informado'}</h3>
                        <h3>Cor dos Olhos: {films.eye_color !== 'n/a' ? films.eye_color : 'Não Informado'}</h3>
                        <h3>Cor da Pele: {films.skin_color !== 'n/a' ? films.skin_color : 'Não Informado'}</h3> */}
                    </li>
                )}
            </DetailsFilms>
        </>
    );
}

export default Films;
