import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import Api from "../../services/Api";

function Home() {
    const [allPeople, setAllPeople] = useState([]);

    useEffect(() => {
        getPerson()
    }, [])

    async function getPerson() {
        try {
            const data = await Api.get('/people/?search=vader')
            console.log(data)
            setAllPeople(data)
            toast.success('Usuários encontrados com sucesso')

        } catch (err) {
            console.error(err)
            toast.error('Erro ao pesquisar por usuários')
        }
    }
    return(
        <h1 style={{color: '#fff'}}>Home</h1>
    )
}

export default Home