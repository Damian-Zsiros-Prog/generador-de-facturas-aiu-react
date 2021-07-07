import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import EnterpriseInfo from "./components/EnterpriseInfo";
import Navbar from "./components/Navbar";
import CrearFacturaComponent from "./components/CrearFacturaComponent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/detail-factura">
                        <CrearFacturaComponent />
                    </Route>
                    <Route path="/">
                        <EnterpriseInfo />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
