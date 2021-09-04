
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default function ContentMovies(){
    const [filmes,setFilmes] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

		requisicao.then(resposta => {
			setFilmes([...resposta.data]);
            
		});
	}, []);

    console.log(filmes);
    return(
        <div className="filmes">
            <h1 className="titulo">Selecione o filme</h1>
            <div className="contentMovies">
                {filmes.map((filme) => 
                <Link to={`/sessoes/${filme.id}`}>
                    <div className="filme">
                      <img src={filme.posterURL} alt=""></img>
                    </div>
                </Link>
                )}
          
            </div>
        </div>
    );
}