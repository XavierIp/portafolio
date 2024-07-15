import React,{useEffect,useRef } from "react";
import Styles from '../../src/App.module.css';
import imgBanner from "./img/banner.png";
import pdf from "./img/CV_IBARRA.pdf";
import TypeIt from "typeit";
export default function banner() {
  const top=()=>{
window.scrollTo(0,0)
  };
  const typeItRef = useRef(null);

  useEffect(() => {
    if (!typeItRef.current) {
      typeItRef.current = new TypeIt("#textoType", {
        strings: "",
        speed: 200,
        loop: true
      }).go();

      typeItRef.current.type("Hola, Soy Xavier").pause(1000).delete(16).type("Ingeniero de Software").pause(1000).delete(21);
    } 

    return () => {
      if (typeItRef.current) {
        typeItRef.current.destroy();
      }
    };
  }, []);
  return (
    <>
  <section className={Styles.contenedor} id="inicio">
     <div className={Styles.contenido}>
    <h1 className={Styles.titulo}><span id="textoType"></span></h1>
    <p className={Styles.descripcion}>Apasionado por la tecnología y el desarrollo de aplicaciones. A lo largo de mi trayectoria académica, he tenido la oportunidad de participar en diversos proyectos y prácticas que me han permitido desarrollar sólidas habilidades técnicas y de resolución de problemas.</p>
  <div className={Styles.botones}>
  <a href="https://wa.me/51947757081" className={Styles.contacto}>Contactame</a> {" "}
  <a href={pdf} download="Cv_ibarra.pdf" className={Styles.descarga}>Descargar CV</a>
  </div>
    </div>
    <img src={imgBanner} alt="xavier" className={Styles.imgbanner} />
 
  </section>
    
    <button onClick={top} className={Styles.top}>↟</button></>
  );
}
