import React from 'react';
import Timeline from './timeline';
import Lottie  from "lottie-react";
import animacion from "./img/animacion.json";
import Styles from '../../src/seccion.module.css';
import { useRef } from 'react';

export default function experiencia() {
 
    return (
        <section className={Styles.seccion}>
            <div className={Styles.cont}>
           <Lottie  animationData={animacion} className={Styles.seccionImg}/>
            <div className={Styles.time}>
            <Timeline/>
            </div>
            </div>
        </section>
     
    );
}