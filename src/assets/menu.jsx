import React from "react";
import ReactDOM from 'react-dom/client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Mdoscuro from './mdoscuro';

export default function menu() {
   

    return (

      <Navbar shouldHideOnScroll>
      <NavbarBrand>
      
        <p className="font-bold text-inherit">Xavier</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#inicio">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#skills" aria-current="page">
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#proyectos">
            Proyecto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
        <Mdoscuro/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>


 

   
    );
  }