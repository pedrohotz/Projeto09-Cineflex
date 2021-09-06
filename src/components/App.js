
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Top from "./Top";
import ContentMovies from "./ContentMovies";
import SessionScreen from "./SessionScreen";
import Chairs from "./Chairs";
import Succes from "./Sucess";
import "../css/reset.css";
import "../css/style.css";

export default function App(){  
    const[compra,setCompra] = useState({});
    const[sessao,setSessao] = useState({});
    const [arrayAssento, setAssento] = useState([]);
    return(
    <>
        <Top />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <ContentMovies />
                </Route>
                <Route path="/sessoes/:idFilme" exact>
                    <SessionScreen />
                </Route>
                <Route path="/assentos/:idSessao" exact>
                    <Chairs compra={compra} setCompra={setCompra} setSessao={setSessao} setAssento={setAssento} arrayAssento={arrayAssento} />
                </Route>
                <Route path="/sucesso" exact>
                    <Succes sessao={sessao} compra={compra} arrayAssento={arrayAssento}/>
                </Route>
            </Switch>
        </BrowserRouter>
      
    </>
    );
}