
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./Top";
import ContentMovies from "./ContentMovies";
import SessionScreen from "./SessionScreen";
import Chairs from "./Chairs";
import Succes from "./Sucess";
import "../css/reset.css";
import "../css/style.css";

export default function App(){
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
                    <Chairs />
                </Route>
                <Route path="/sucesso" exact>
                    <Succes/>
                </Route>
            </Switch>
        </BrowserRouter>
      
    </>
    );
}