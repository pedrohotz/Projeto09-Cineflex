import { useParams, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  axios from 'axios';
import Rodape from './Rodape';
export default function SessionScreen(){

    const params = useParams();
    const id = params.idFilme;
    const [filme,setFilme] = useState([]);
    const [dados,setDados] = useState([]);

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`);

		requisicao.then(resposta => {
			setFilme(resposta.data.days);
            setDados(resposta.data)
		});
	}, []);

    console.log(dados);
    return(
        <div className="session">
            <h1 className="titulo">Selecione o horário</h1>
            {filme.map((sessao)=>
                        <div className="dia">
                        <h2>{sessao.weekday} {sessao.date}</h2>
                            <div className="horarios">                        
                                {sessao.showtimes.map((hora)=>
                                <Link to={`/assentos/${hora.id}`}>
                                    <button>{hora.name}</button>
                                </Link>
                                            )
                                 }
                            </div>
                        </div>
            )}
        <Rodape imgUrl={dados.posterURL} title={dados.title} />
        </div>
    );
}