import { useEffect, useState } from "react"
import { 
    MdKeyboardArrowLeft, 
    MdKeyboardArrowRight,
    MdOutlineClear,
    MdRemoveRedEye 
} from 'react-icons/md';
import Api from "../../services/Api";
import { ContainerSearch, HomeColors, MessageError, Pagination, PersonList } from './styles';
import card from './../../assets/capa.jpg';
import { useNavigate } from "react-router-dom";
import { useViewDetails } from "../../hooks/useViewDetails"
import { toast } from "react-toastify";

function Home() {
    const navigate = useNavigate();
    const { setPersonSelected } = useViewDetails();

    const [currentPosition, setCurrentPosition] = useState(1);
    const [inputNamePerson, setInputNamePerson] = useState('');
    const [isChangePagePrevious, setIsChangePagePrevious] = useState(true);
    const [isChangePageNext, setIsChangePageNext] = useState(false);
    const [personStarWars, setPersonStarWars] = useState([]);
    const [typeSearchOrNormalPagination, setTypeSearchOrNormalPagination] = useState('normal');
    const [totalByPages, setTotalByPages] = useState(0);

    const numberPerPageDefault = 10;

    useEffect(() => {
        getPerson();
    }, [])

    async function getPerson() {
        try {
            const { data } = await Api.get(`/people/?page=${currentPosition}`);
            setTotalByPages(Math.ceil(data.count / numberPerPageDefault));
            setPersonStarWars(data.results);
        } catch (err) {
            console.error(err);
        }
    }

    async function nextPage() {
        setIsChangePageNext(true);
        
        if (currentPosition < totalByPages) {
            const newPosition = currentPosition + 1;
            let routeToRequisition = `/people/?page=${newPosition}`;
            setCurrentPosition(newPosition);

            if (typeSearchOrNormalPagination === 'search') {
                routeToRequisition = `/people/?search=${inputNamePerson.trim()}&page=${newPosition}`;
            }
            
            try {
                const { data } = await Api.get(routeToRequisition);
                setPersonStarWars(data.results);

            } catch (err) {
                console.error(err);

            } finally {
                if (newPosition !== totalByPages) {
                    setIsChangePageNext(false);

                }

                setIsChangePagePrevious(false);

            }
        } else {
            setIsChangePagePrevious(false);
        }
        
    }

    async function previousPage() {
        setIsChangePagePrevious(true);

        if (currentPosition > 1) {
            const newPosition = currentPosition - 1;
            let routeToRequisition = `/people/?page=${newPosition}`;
            setCurrentPosition(newPosition);

            if (typeSearchOrNormalPagination === 'search') {
                routeToRequisition = `/people/?search=${inputNamePerson.trim()}&page=${newPosition}`;
            }

            try {
                const { data } = await Api.get(routeToRequisition);
                setPersonStarWars(data.results);

            } catch (err) {
                console.error(err);

            } finally {
                if (newPosition !== 1) {
                    setIsChangePagePrevious(false);

                }

                setIsChangePageNext(false);

            }
        } else {
            setIsChangePageNext(false);
        }
    }

    function viewDetails(person) {
        localStorage.setItem('@SW:personSelected', JSON.stringify(person));
        setPersonSelected(person);
        navigate('/details');
    }

    async function searchPerson() {
        const termToSearchWithoutSpaceBegnningAndEnd = inputNamePerson.trim();

        if (termToSearchWithoutSpaceBegnningAndEnd.length === 0) {
            return toast.error('Insira um nome válido.');
        }

        try {
            const { data } = await Api.get(`/people/?search=${termToSearchWithoutSpaceBegnningAndEnd}&page=1`);
            setCurrentPosition(1);
            setTypeSearchOrNormalPagination('search');
            setPersonStarWars(data.results);
            setTotalByPages(Math.ceil(data.count / numberPerPageDefault));
            toast.success(`${data.count} usuário(s) encontrados com sucesso.`);

        } catch (err) {
            console.error(err);
            toast.error('Erro ao pesquisar por usuário(s).');
        }
    }

    function clearSearchPerson() {
        setInputNamePerson('');
        setCurrentPosition(1);
        setTypeSearchOrNormalPagination('normal');
        getPerson();
    }

    return(
        <>
            <HomeColors>
                Lista de Personagens
            </HomeColors>

            <ContainerSearch>
                <input 
                    onChange={(e) => setInputNamePerson(e.target.value)} 
                    placeholder="Insira o nome do personagem"
                    value={inputNamePerson} 
                />
                {typeSearchOrNormalPagination === 'search' && <button id="clearButton" onClick={clearSearchPerson}><MdOutlineClear size={20}/></button>}
                <button onClick={searchPerson}>Buscar</button>
            </ContainerSearch>

            <PersonList>
                {!!personStarWars.length && personStarWars.map(person => (
                    <li key={person.name} style={{backgroundImage: `url(${card})`, backgroundPosition: 'center', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
                        <h3>Nome: {person.name || ''}</h3>
                        <h3>Nascimento: {person.birth_year || ''}</h3>
                        <h3>Altura: {person.height || ''} cm</h3>
                        <h3>Cor dos Olhos: {person.eye_color || ''}</h3>
                        <br/>
                        <button type="button" onClick={() => viewDetails(person)}>
                            <div>
                                <MdRemoveRedEye size={30} style={{color: 'gold'}}/>
                            </div>
                            <span>Detalhes</span>                   
                        </button>
                    </li>        
                ))}
            </PersonList>

            {!personStarWars.length && <MessageError>Nenhum personagem foi encontrado!</MessageError>}
            
            {totalByPages > 0 && (
                <Pagination>
                    <button onClick={previousPage} disabled={isChangePagePrevious}>
                        <MdKeyboardArrowLeft size={50} style={{color: !isChangePagePrevious ? '#00BFFF' : 'gray'}} />
                    </button>
                    <p>{currentPosition} de {totalByPages}</p>
                    <button onClick={nextPage} disabled={isChangePageNext}>
                        <MdKeyboardArrowRight size={50} style={{color: !isChangePageNext ? '#00BFFF' : 'gray'}} />
                    </button>
                </Pagination>
            )}
        </>
    )
}

export default Home