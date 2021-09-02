

export default function Succes(){
    return(
        <div className="sucess">
            <h1>Pedido feito com sucesso!</h1>
            <div className="dados">
                <div className="data">
                    <h2>Filme e sessão</h2>
                    <span>Enola Holmes</span>
                    <span>24/06/2021 15:00</span>
                </div>
                <div className="data">
                    <h2>Ingressos</h2>
                    <span>Assento 15</span>
                    <span>Assento 16</span>
                </div>
                <div className="data">
                    <h2>Comprador</h2>
                    <span>Nome: João da Silva Sauro</span>
                    <span>CPF:123.456.789-10</span>
                </div>
            </div>
            <button>Voltar para o home</button>
        </div>
    );
}