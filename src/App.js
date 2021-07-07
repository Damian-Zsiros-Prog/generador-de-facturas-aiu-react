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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
                        <h5 className="navbar-brand text-center">
                            Creado por{" "}
                            <a
                                href="http://www.damian-zsiros.tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Damian Zsiros Dev
                            </a>
                        </h5>
                        <ul className="social-icons-list">
                            <li>
                                <a
                                    class="social-icon social-github"
                                    target="_blank"
                                    href="https://github.com/Damian-Zsiros-Prog"
                                    rel="noreferrer"
                                >
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="social-icon social-instagram"
                                    target="_blank"
                                    href="http://www.damian-zsiros.tech/"
                                    rel="noreferrer"
                                >
                                    <i class="fas fa-globe"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="social-icon social-twitter"
                                    target="_blank"
                                    href="https://twitter.com/ProgDamian"
                                    rel="noreferrer"
                                >
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </BrowserRouter>
        </div>
    );
}

export default App;
