
import { useParams, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  axios from 'axios';

export default function Chairs(){
    const params = useParams();
    const id = params.idSessao;
    const [assentos,setAssentos] = useState([]);
    useEffect(() => { 
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`);

		requisicao.then(resposta => {
			setAssentos(resposta.data.seats);
       
		});
	}, []);


    console.log(assentos);

    return(
    <div className="chairs">
            <h1 className="titulo">Seleciona o(s) assento(s)</h1>
            <div className="assentos">
                {assentos.map((assento) => 
                {if(assento.isAvailable === false){
                    return(
                        <button className="assento indisponivel">{assento.id}</button>
                    );
                }
                else{
                    return(
                        <button className="assento">{assento.id}</button>
                    )
                }
                    }
                )}
            </div>
        <div className="botoes">
            <div className="botao">
                <button className="selecionado"></button>
                <span>Selecionado</span>
            </div>
            <div className="botao">
                <button className="disponivel"></button>
                <span>Disponível</span>
            </div>
            <div className="botao">
                <button className="indisponivel"></button>
                <span>Indisponível</span>
            </div>
        </div>
        <div className="comprador">
            <div className="form">
            <label>Nome do comprador:</label>
            <input type="text" placeholder="Digite seu nome..."></input>
            </div>
           <div className="form">
           <label>CPF do comprador:</label>
            <input type="text" placeholder="Digite seu CPF..."></input>
           </div>
        </div>
        <button className="reserva">Reservar assento(s)</button>
    </div>
    );
}

