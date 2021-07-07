import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./EnterpriseInfo.css";

const EnterpriseInfo = () => {
    const [EmpresasInfo, setEmpresasInfo] = useState({});
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        return history.push("/detail-factura", {
            infoEmpresas: EmpresasInfo
        });
    };

    const handleInputChange = (event) => {
        setEmpresasInfo({
            ...EmpresasInfo,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        document.title = "Generador de facturas A.I.U";
    }, []);

    return (
        <>
            <form
                onSubmit={onSubmit}
                style={{
                    width: "100%",
                    minHeight: "80vh",
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    padding: "15px",
                    alignItems: "center"
                }}
            >
                <div className="row">
                    <div className="col-6">
                        <h1>Informacion de la empresa emisora</h1>
                        <div className="row">
                            <div className="col">
                                <label
                                    className="form-label"
                                    htmlFor="razonSocialEmisora"
                                >
                                    Razon Social:
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Razon social "
                                    aria-label="Razon social de la empresa emisora"
                                    name="razonSocialEmisora"
                                    id="razonSocialEmisora"
                                    required
                                />
                            </div>
                            <div className="col">
                                <label
                                    className="form-label"
                                    htmlFor="NITEmpresaEmisora"
                                >
                                    NIT:
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="NIT"
                                    aria-label="NIT de empresa emisora"
                                    name="NITEmpresaEmisora"
                                    id="NITEmpresaEmisora"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-3 mb-3">
                            <label
                                className="form-label"
                                htmlFor="DireccionEmpresaEmisora"
                            >
                                Direccion:
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                placeholder="Direccion"
                                aria-label="Direccion de empresa emisora"
                                name="DireccionEmpresaEmisora"
                                id="DireccionEmpresaEmisora"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="EmailEmpresaEmisora"
                            >
                                E-mail:
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                className="form-control"
                                placeholder="E-mail"
                                aria-label="E-mail de empresa emisora"
                                name="EmailEmpresaEmisora"
                                id="EmailEmpresaEmisora"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h1>Informacion de la empresa cliente</h1>
                            <div className="row">
                                <div className="col">
                                    <label
                                        className="form-label"
                                        htmlFor="razonSocialCliente"
                                    >
                                        Razon Social:
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Razon social "
                                        aria-label="Razon social de la empresa cliente"
                                        name="razonSocialCliente"
                                        id="razonSocialCliente"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        className="form-label"
                                        htmlFor="NITEmpresaCliente"
                                    >
                                        NIT:
                                    </label>
                                    <input
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="NIT"
                                        aria-label="NIT de empresa cliente"
                                        name="NITEmpresaCliente"
                                        id="NITEmpresaCliente"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-3 mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="DireccionEmpresaCliente"
                                >
                                    Direccion:
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Direccion"
                                    aria-label="Direccion de empresa cliente"
                                    name="DireccionEmpresaCliente"
                                    id="DireccionEmpresaCliente"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                    htmlFor="EmailEmpresaCliente"
                                >
                                    E-mail:
                                </label>
                                <input
                                    type="text"
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="E-mail"
                                    aria-label="E-mail de empresa cliente"
                                    name="EmailEmpresaCliente"
                                    id="EmailEmpresaCliente"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" d-grid ">
                        <button type="submit" class="btn btn-primary">
                            Crear factura
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EnterpriseInfo;
