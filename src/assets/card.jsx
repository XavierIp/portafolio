import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Styles from '../../src/proyecto.module.css';
import py1 from "./img/py1.jpg";
import py2 from "./img/py2.png";
import py3 from "./img/py3.png";
export default function card() {
  const list = [
    {
      title: "Sistema de Reciclaje por Canje",
      img: py1,
   
    },
    {
      title: "Punto de Venta para Restaurantes",
      img: py2,
   
    },
    {
      title: "Sistema de Reservas en Línea para Cafeterías",
      img: py3,
   
    },
    {
      title: "Sistema de Alquiler de Libros en Línea",
      img: "",
   
    },
  
  ];

  return (
    <section className={Styles.seccion} id="proyectos"> 
        <h2 className='h2skil'>Mi Proyectos</h2>
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          
          </CardFooter>
        </Card>
      ))}
    </div>
    </section>
  );
}
