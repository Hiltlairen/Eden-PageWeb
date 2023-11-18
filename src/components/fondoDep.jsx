import React from "react";
import { tituloDep } from "../assets/titulosDep";
import '../styles/fondoDep.css'
function FondoDep(){
    const fondo=tituloDep[0].fondo;
    return(
        <>
            <img src={fondo} alt="Imagen de fondo" className="fondo-imagen" />

        </>
    )
}
export default FondoDep;