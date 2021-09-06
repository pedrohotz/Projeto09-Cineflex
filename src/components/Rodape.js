


export default function Rodape(props){

    if(props.dia === undefined || props.hora === undefined){
        return(
            <div className="rodape">
            <div className="imgFilme">
                    <img src={props.imgURL}></img>
            </div>
            <h1>{props.title}</h1>
        </div>
        );
    }
    else{
        return(   
            <div className="rodape">
       <div className="imgFilme">
               <img src={props.imgURL}></img>
       </div>
       <h1>{props.title}<p>{props.dia}-{props.hora}</p></h1>
       
   </div>)
    }
}

