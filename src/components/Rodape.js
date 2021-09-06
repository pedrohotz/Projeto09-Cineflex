


export default function Rodape(props){

return(
    <div className="rodape">
        <div className="imgFilme">
                <img src={props.imgUrl}></img>
        </div>
        <h1>{props.title}<p>{props.dia}-{props.hora}</p></h1>
        
    </div>
);


}