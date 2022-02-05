import { useEffect, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdRemoveRedEye } from 'react-icons/md';
import Api from "../../services/Api";
import { HomeColors, MessageError, Pagination, PersonList } from './styles';
import card from './../../assets/capa.jpg';
import { useNavigate } from "react-router-dom";
import { useViewDetails } from "../../hooks/useViewDetails"
import { toast } from "react-toastify";

function Home() {
    const navigate = useNavigate();
    const { setPersonSelected } = useViewDetails();

    const [currentPosition, setCurrentPosition] = useState(1);
    const [totalByPages, setTotalByPages] = useState(0);
    const [isChangePage, setIsChangePage] = useState(false);
    const [personStarWars, setPersonStarWars] = useState([]);
    const numberPerPageDefault = 10;

    useEffect(() => {
        async function getPerson() {
            try {
                const { data } = await Api.get(`/people/?page=${currentPosition}`);
                setTotalByPages(Math.ceil(data.count / numberPerPageDefault));
                setPersonStarWars(data.results);
            } catch (err) {
                console.error(err);
            }
        }

        getPerson()
    }, [])

    async function nextPage() {
        setIsChangePage(true);
        
        if (currentPosition < totalByPages) {
            const newPosition = currentPosition + 1;
            setCurrentPosition(newPosition);
            try {
                const { data } = await Api.get(`/people/?page=${newPosition}`);
                setPersonStarWars(data.results);
                setIsChangePage(false);
            } catch (err) {
                console.error(err);
                setIsChangePage(false);
            }
        } else {
            setIsChangePage(false);
            toast.error('aqui bb');
        }
        
    }

    async function previousPage() {
        setIsChangePage(true);

        if (currentPosition > 1) {
            const newPosition = currentPosition - 1;
            setCurrentPosition(newPosition);
            try {
                const { data } = await Api.get(`/people/?page=${newPosition}`);
                setPersonStarWars(data.results);
                setIsChangePage(false);
            } catch (err) {
                console.error(err);
                setIsChangePage(false);
            }
        } else {
            setIsChangePage(false);
            toast.error('aqui bb');
        }
    }

    function viewDetails(person) {
        localStorage.setItem('@SW:personSelected', JSON.stringify(person));
        setPersonSelected(person);
        navigate('/details');
    }

    //Falta a lógica para buscar o produto e paginação para o mesmo
    // async function findPerson() {
    //     try {
    //         const { data } = await Api.get('/people/?search=vader');
    //         setPersonStarWars(data.results);
    //         toast.success('Usuários encontrados com sucesso');

    //     } catch (err) {
    //         console.error(err);
    //         toast.error('Erro ao pesquisar por usuários');
    //     }
    // }

    return(
        <>
            <HomeColors>
                Lista de Personagens
            </HomeColors>

            <PersonList>
                {!!personStarWars.length && personStarWars.map(person => (
                    <li key={person.name} style={{backgroundImage: `url(${card})`, backgroundPosition: 'center', backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
                        <h3>Nome: {person.name || ''}</h3>
                        <h3>Nascimento: {person.birth_year || ''}</h3>
                        <h3>Altura: {person.height || ''} cm</h3>
                        <h3>Cor dos Olhos: {person.eye_color || ''}</h3>
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
                    <button onClick={previousPage} disabled={isChangePage}>
                        <MdKeyboardArrowLeft size={50} style={{color: 'gold'}} />
                    </button>
                    <p>{currentPosition} de {totalByPages}</p>
                    <button onClick={nextPage} disabled={isChangePage}>
                        <MdKeyboardArrowRight size={50} style={{color: 'gold'}} />
                    </button>
                </Pagination>
            )}
        </>
    )
}

export default Home