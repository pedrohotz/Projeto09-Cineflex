export default function SessionScreen(){
    return(
        <div className="session">
            <h1 className="titulo">Selecione o horário</h1>
            <div className="dia">
                <h2>Quinta-feira - 24/06/2021</h2>
                <div className="horarios">
                    <button>15:00</button>
                    <button>16:00</button>
                </div>
            </div>
            <div className="dia">
                <h2>Sexta-feira - 25/06/2021</h2>
                <div className="horarios">
                    <button>15:00</button>
                    <button>19:00</button>
                </div>
            </div>
        </div>
    );
}