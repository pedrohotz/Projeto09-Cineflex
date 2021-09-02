
export default function Chairs(){
    return(
    <div className="chairs">
            <h1 className="titulo">Seleciona o(s) assento(s)</h1>
            <div className="assentos">
            <Assento />
            <Assento />
            <Assento />
            <Assento />
            <Assento />
            <Assento />
            <Assento />
            <Assento />
            <Assento />
            <Assento /> 
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


function Assento(){
    return(
        <button className="assento">1</button>
    );
}