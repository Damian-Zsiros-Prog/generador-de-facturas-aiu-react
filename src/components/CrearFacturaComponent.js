import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CrearFacturaComponent.css";

const CrearFacturaComponent = () => {
    const { infoEmpresas } = useLocation().state;
    const [Impuestos, setImpuestos] = useState([
        {
            nameImpuesto: "IVA",
            porcentajeImpuesto: 19,
            valorImpuesto: 0
        },

        {
            nameImpuesto: "Retefuente",
            porcentajeImpuesto: 2,
            valorImpuesto: 0
        }
    ]);
    const [Especificaciones, setEspecificaciones] = useState([]);
    const [Especificacion, setEspecificacion] = useState({
        nameEspecificacion: "",
        descripcionEspecificacion: "",
        precioEspecificacion: Number(0),
        cantidadEspecificacion: Number(0)
    });
    const [Factura, setFactura] = useState({
        subtotal: 0,
        AUI: 0,
        percentAUI: 5,
        impuestos: [],
        totalImpuestos: 0,
        totalFactura: 0,
        especificaciones: []
    });

    const [Impuesto, setImpuesto] = useState({
        nameImpuesto: "",
        porcentajeImpuesto: 0,
        valorImpuesto: 0
    });

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Detalle Factura - " + prevTitle;
    }, []);

    useEffect(() => {
        Factura.totalFactura =
            Factura.subtotal - Factura.totalImpuestos + Factura.AUI;
    }, [Especificaciones, Impuestos, Factura, Impuesto, Especificacion]);
    const addImpuestoSubmit = (e) => {
        e.preventDefault();
        const NewImpuestos = Impuestos;
        Impuesto.valorImpuesto =
            Factura.subtotal * (Impuesto.porcentajeImpuesto / 100);
        NewImpuestos.push(Impuesto);
        const NewFactura = Factura;
        NewFactura.AUI = Factura.subtotal * (Factura.percentAUI / 100);
        Impuestos[0].valorImpuesto =
            Factura.subtotal * (Impuestos[0].porcentajeImpuesto / 100);
        Impuestos[1].valorImpuesto =
            Factura.subtotal * (Impuestos[1].porcentajeImpuesto / 100);

        NewFactura.totalImpuestos =
            Impuestos[0].valorImpuesto + Impuestos[1].valorImpuesto;
        NewFactura.totalImpuestos +=
            Factura.subtotal * (Impuesto.porcentajeImpuesto / 100);
        NewFactura.impuestos = NewImpuestos;
        NewFactura.totalFactura =
            Factura.subtotal - Factura.totalImpuestos + Factura.AUI;
        setImpuestos(NewImpuestos);
        setFactura(NewFactura);
    };

    const handleInputImpuestoAddChange = (e) => {
        setImpuesto({
            ...Impuesto,
            [e.target.name]: e.target.value
        });
    };

    const addEspecificacionSubmit = (e) => {
        e.preventDefault();
        const NewEspecificaciones = Especificaciones;
        NewEspecificaciones.push(Especificacion);
        setEspecificaciones(NewEspecificaciones);
        const NewFactura = Factura;
        NewFactura.subtotal +=
            Especificacion.precioEspecificacion *
            Especificacion.cantidadEspecificacion;
        Impuestos[0].valorImpuesto =
            Factura.subtotal * (Impuestos[0].porcentajeImpuesto / 100);
        Impuestos[1].valorImpuesto =
            Factura.subtotal * (Impuestos[1].porcentajeImpuesto / 100);

        NewFactura.totalImpuestos =
            Impuestos[0].valorImpuesto + Impuestos[1].valorImpuesto;
        NewFactura.especificaciones = Especificaciones;
        NewFactura.AUI = NewFactura.subtotal * (NewFactura.percentAUI / 100);
        NewFactura.totalFactura =
            Factura.subtotal - Factura.totalImpuestos + Factura.AUI;
        setFactura(NewFactura);
        e.target.reset();
    };

    const handleInputEspecificacionAddChange = (e) => {
        setEspecificacion({
            ...Especificacion,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mt-3 mb-3">
            <div className="card ">
                <div className="card-body">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-6">
                                <h3>Informacion de empresa emisora</h3>
                                <div className="row">
                                    <div className="form-group col-md-6 mr-3">
                                        <label htmlFor="razonSocialEmisora">
                                            Razon social:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="razonSocialEmisora"
                                            value={
                                                infoEmpresas.razonSocialEmisora
                                            }
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="NITEmpresaEmisora">
                                            NIT:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="NITEmpresaEmisora"
                                            value={
                                                infoEmpresas.NITEmpresaEmisora
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="DireccionEmpresaEmisora">
                                            Direccion:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="DireccionEmpresaEmisora"
                                            value={
                                                infoEmpresas.DireccionEmpresaEmisora
                                            }
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="EmailEmpresaEmisora">
                                            Correo electronico:{" "}
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="EmailEmpresaEmisora"
                                            value={
                                                infoEmpresas.EmailEmpresaEmisora
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <h3>Informacion de empresa cliente</h3>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="razonSocialCliente">
                                            Razon social:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="razonSocialCliente"
                                            value={
                                                infoEmpresas.razonSocialCliente
                                            }
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="NITEmpresaCliente">
                                            NIT:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="NITEmpresaCliente"
                                            value={
                                                infoEmpresas.NITEmpresaCliente
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="DireccionEmpresaCliente">
                                            Direccion:{" "}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="DireccionEmpresaCliente"
                                            value={
                                                infoEmpresas.DireccionEmpresaCliente
                                            }
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="EmailEmpresaCliente">
                                            Correo electronico:{" "}
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="EmailEmpresaCliente"
                                            value={
                                                infoEmpresas.EmailEmpresaCliente
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 card card-body">
                <h3>Añadir producto o servicio</h3>
                <form onSubmit={addEspecificacionSubmit}>
                    <table className="table table-hover">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nameEspecificacion"
                                    placeholder="Ejemplo: Factura con formato AIU"
                                    onChange={
                                        handleInputEspecificacionAddChange
                                    }
                                    value={Especificacion.nameEspecificacion}
                                    required
                                />
                            </td>
                            <td>
                                <textarea
                                    class="form-control"
                                    name="descripcionEspecificacion"
                                    placeholder="Ejemplo: Factura con todas las especificaciones e impuestos necesarios"
                                    onChange={
                                        handleInputEspecificacionAddChange
                                    }
                                    value={
                                        Especificacion.descripcionEspecificacion
                                    }
                                    rows="1"
                                    required
                                ></textarea>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="precioEspecificacion"
                                    placeholder="Ejemplo: 1000.00"
                                    value={Especificacion.precioEspecificacion}
                                    onChange={
                                        handleInputEspecificacionAddChange
                                    }
                                    step="0.01"
                                    required
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="cantidadEspecificacion"
                                    placeholder="Ejemplo: 1"
                                    onChange={
                                        handleInputEspecificacionAddChange
                                    }
                                    value={
                                        Especificacion.cantidadEspecificacion
                                    }
                                    required
                                />
                            </td>
                            <button
                                className="btn btn-primary"
                                title="Agregar especificacion"
                                type="submit"
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                        </tr>
                    </table>
                </form>
            </div>
            <form onSubmit={addImpuestoSubmit}>
                <div className="mt-3 card card-body">
                    <h3>Añadir impuesto</h3>
                    <table className="table table-hover">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Porcentaje</th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nameImpuesto"
                                    placeholder="Ejemplo: Retefuente"
                                    onChange={handleInputImpuestoAddChange}
                                    required
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="porcentajeImpuesto"
                                    placeholder="Ejemplo: 2.5%"
                                    step="0.01"
                                    onChange={handleInputImpuestoAddChange}
                                    required
                                />
                            </td>

                            <button
                                className="btn btn-primary"
                                title="Agregar impuesto"
                                type="submit"
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                        </tr>
                    </table>
                </div>
            </form>

            <div className="card card-body table-responsive mt-3">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Precio Unit</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Valor total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Especificaciones?.map((especificacion, i) => (
                            <tr key={i}>
                                <td>{especificacion.nameEspecificacion}</td>
                                <td>
                                    {especificacion.descripcionEspecificacion}
                                </td>
                                <td>
                                    {especificacion.precioEspecificacion} COP
                                </td>
                                <td>{especificacion.cantidadEspecificacion}</td>
                                <td>
                                    {especificacion.precioEspecificacion *
                                        especificacion.cantidadEspecificacion}{" "}
                                    COP
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        title="Eliminar especificacion"
                                        type="submit"
                                        onClick={() => {
                                            Factura.subtotal -=
                                                Factura.especificaciones[i]
                                                    .precioEspecificacion *
                                                Factura.especificaciones[i]
                                                    .cantidadEspecificacion;

                                            Impuestos[0].valorImpuesto -=
                                                Factura.subtotal *
                                                (Impuestos[0]
                                                    .porcentajeImpuesto /
                                                    100);
                                            Impuestos[1].valorImpuesto -=
                                                Factura.subtotal *
                                                (Impuestos[1]
                                                    .porcentajeImpuesto /
                                                    100);

                                            Factura.AUI -=
                                                Factura.subtotal *
                                                (Factura.percentAUI / 100);
                                            Factura.totalFactura -=
                                                Factura.especificaciones[i]
                                                    .precioEspecificacion *
                                                Factura.especificaciones[i]
                                                    .cantidadEspecificacion;
                                            Factura.especificaciones.splice(
                                                i,
                                                1
                                            );
                                        }}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="table-dark">
                            <td></td>
                            <td></td>
                            <th></th>
                            <th>Costo total</th>
                            <td>{Factura?.subtotal} COP</td>
                            <td></td>
                        </tr>
                        <tr className="table-dark">
                            <td></td>
                            <td></td>
                            <th></th>
                            <th>A.I.U ({Factura?.percentAUI}%)</th>
                            <td>{Factura?.AUI} COP</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <th></th>
                            <th>Impuesto (Porcentaje%)</th>
                            <th>Valor total</th>
                            <td></td>
                        </tr>
                        {Impuestos?.map((impuesto, i) => (
                            <tr key={i}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>
                                    {impuesto.nameImpuesto}(
                                    {impuesto.porcentajeImpuesto}%)
                                </th>
                                <td>{impuesto.valorImpuesto} COP</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        title="Eliminar impuesto"
                                        type="submit"
                                        onClick={() => {
                                            Factura.totalImpuestos -=
                                                Factura.impuestos[
                                                    i
                                                ].valorImpuesto;
                                            Factura.totalFactura +=
                                                Factura.impuestos[
                                                    i
                                                ].valorImpuesto;

                                            Impuestos[0].valorImpuesto -=
                                                Factura.subtotal *
                                                (Impuestos[0]
                                                    .porcentajeImpuesto /
                                                    100);
                                            Impuestos[1].valorImpuesto -=
                                                Factura.subtotal *
                                                (Impuestos[1]
                                                    .porcentajeImpuesto /
                                                    100);

                                            Factura.impuestos.splice(i, 1);
                                        }}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="table-dark">
                            <td></td>
                            <td></td>
                            <th></th>
                            <th>Total impuestos</th>
                            <td>{Factura?.totalImpuestos} COP</td>
                            <td></td>
                        </tr>
                        <tr className="table-dark">
                            <td></td>
                            <td></td>
                            <th></th>
                            <th>Valor total</th>
                            <td>{Factura?.totalFactura} COP</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CrearFacturaComponent;
