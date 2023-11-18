import React from "react";
import '../styles/departTitle.css'
import { tituloDep } from "../assets/titulosDep";
function DepartamentoTitulo(){
    const Titulo=tituloDep[0].departamento;
    const descripcion=tituloDep[0].introduccion;
    return(
        <>
            <div className="contenedor-titulo">
                <h1 className="titulo">{Titulo}</h1>
                <p className="contexto">{descripcion}</p>
                <button className="btn-mas">Más</button>
            </div>
        </>
    )
        
}
export default DepartamentoTitulo;