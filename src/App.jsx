import React from "react";
import Menu from './assets/menu';
import Banner from './assets/banner';
import Footer from './assets/footer';
import Skills from './assets/skills';
import Card from './assets/card';
import Experiencia from './assets/experiencia';
import confetti from 'canvas-confetti';

function App() {
  const canvas = document.querySelector(".confetti");
  try {
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      particleCount: 100,
      spread: 160,
    });
  } catch (error) {
    console.log(error);
  }


  return (
    <>
    <Menu/>
    <Banner/>
    <Skills/>
    <Experiencia/>
    <Card/>
    <div className="counter">
      <canvas className="confetti" />
    </div>
    <Footer/>
    


</>  );
}

export default App
