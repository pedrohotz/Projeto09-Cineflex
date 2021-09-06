
import { useParams, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import  axios from 'axios';
import Rodape from './Rodape';

export default function Chairs({compra,setCompra,setSessao,arrayAssento,setAssento}){
    
    let history = useHistory();
    const params = useParams();
    const id = params.idSessao;
    const [assentos,setAssentos] = useState([]);
    const[arraySelecionado,setArrSelecionado] = useState([]);
    const [nomeComprador,setNome] = useState("");
    const [cpfComprador, setCPF] = useState("");
    const [nome,setTitle ]= useState("");
    const [dia,setDia] = useState("");
    const [url,setURL] = useState("");
    const [hora,setHora] = useState("");
    
   
    function Succes(){
        history.push("/sucesso");
    }

    useEffect(() => { 
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`);
		requisicao.then(resposta => {

			setAssentos(resposta.data.seats);
            setSessao({filme:resposta.data.movie.title,data:resposta.data.day.date,hora:resposta.data.name});
            setTitle(resposta.data.movie.title);
            setDia(resposta.data.day.weekday);
            setURL(resposta.data.movie.posterURL);
            setHora(resposta.data.name);
            setCompra({ids:arraySelecionado,name:nomeComprador,cpf:cpfComprador})
		});
	}, []); 


    
    function Reservar(){
        setCompra({ids:arraySelecionado,name:nomeComprador,cpf:cpfComprador})
        if(!!nomeComprador && !!cpfComprador && arraySelecionado.length > 0){
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",compra);
        promisse.then(Succes);
        }
    
    }

    
return(
    <div className="chairs">
            <h1 className="titulo">Seleciona o(s) assento(s)</h1>
            <div className="assentos">
                {assentos.map((assento,index) =><Assento key={index} id={assento.id} name={assento.name} arraySelecionado={arraySelecionado} setArrSelecionado={setArrSelecionado} disponivel={assento.isAvailable} setAssento={setAssento} arrayAssento={arrayAssento} />)}
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
            <input type="text" placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)}></input>
            </div>
           <div className="form">
           <label>CPF do comprador:</label>
            <input type="text" placeholder="Digite seu CPF..." onChange={e => setCPF(e.target.value)}></input>
           </div>
        </div>
        <button className="reserva" onClick={Reservar}>Reservar assento(s)</button>
        <Rodape title={nome} imgURL={url} dia={dia} hora={hora} />
    </div>
)
}


function Assento({id,name,arraySelecionado,setArrSelecionado,disponivel,setAssento,arrayAssento}){

    const [selecionado,setSelecionado] = useState("");

    const assentoClass = `assento ${disponivel ? selecionado : "indisponivel"} `
    function Selecionar(){
        if (!disponivel) {
            alert('Assento ocupado')
        } else if (selecionado === "") {
            setSelecionado('selecionado');
            setArrSelecionado([...arraySelecionado, id]);
            setAssento([...arrayAssento,name]);
        } else {
            setSelecionado('');
            arraySelecionado.splice(arraySelecionado.indexOf(id), 1);
            arrayAssento.splice(arrayAssento.indexOf(name),1);
            setArrSelecionado([...arraySelecionado])
            setAssento([...arrayAssento]);
        }
    
    }

    return(
        <button className={assentoClass} key={id} onClick={Selecionar}>{name}</button>
    )

}




