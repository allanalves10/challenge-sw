import React, { useEffect, useState } from 'react';
import { useViewFilms } from '../../hooks/useViewFilms';
import { convertDate } from '../../utils/convertDate';
import { DetailsDescription } from '../Details/styles';
import { DetailsPerPerson, ReturnButton } from './styles';

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
            <DetailsDescription>
                Detalhes do Filme
            </DetailsDescription>
            <DetailsPerPerson>
                {film && (
                    <li key={film.title}>
                        <p><b>Nome:</b> {film.title || ''}</p>
                        <p><b>Abertura:</b> {film.opening_crawl || ''}</p>
                        <p><b>Diretor:</b> {film.director}</p>
                        <p><b>Produtor(a):</b> {film.producer}</p>
                        <p><b>Data de Lançamento:</b> {convertDate(film.release_date)}</p>

                        <ReturnButton to='/details'>Voltar</ReturnButton>
                    </li>
                )}
            </DetailsPerPerson>
        </>
    );
}

export default Films;
