
import { useHistory } from "react-router";
export default function Succes(props){
    let history = useHistory();

    function VoltarHome(){
        history.push("/");
    }
    
    return(
        <div className="sucess">
            <h1>Pedido feito com sucesso!</h1>
            <div className="dados">
                <div className="data">
                    <h2>Filme e sessão</h2>
                    <span>{props.sessao.filme}</span>
                    <span>{props.sessao.data} {props.sessao.hora}</span>
                </div>
                <div className="data">
                    <h2>Ingressos</h2>
                    {props.arrayAssento.map((assento) => <span>Assento {assento}</span>)}
                </div>
                <div className="data">
                    <h2>Comprador</h2>
                    <span>Nome: {props.compra.name}</span>
                    <span>CPF:{props.compra.cpf}</span>
                </div>
            </div>
            <button onClick={VoltarHome}>Voltar para o home</button>
        </div>
    );
}