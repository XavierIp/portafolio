import { Container } from 'postcss';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import '../../src/skill.css';
import meter1 from "./img/meter1.svg";
import colorSharp from "./img/color-sharp.png";
export default function skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <div className="containerskill" >
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className='h2skil' >Mi Experiencia</h2>
              <p> Me apasiona aprender nuevas tecnologías y mejorar continuamente mis habilidades.<br></br> Mi trayectoria incluye:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className="item">
                <div className="radial-progress" style={{ "--value": 80,"--size": "11.5rem","--thickness": "1.3rem"}} role="progressbar">
                  80%
                </div>
                  <h5 className='h5'>Java</h5>
                </div>
                <div className="item">
                <div className="radial-progress " style={{ "--value": 60,"--size": "11.5rem","--thickness": "1.3rem"}} role="progressbar">
                  60%
                </div>
                  <h5 className='h5'>Python</h5>
                </div>
                <div className="item">
                <div className="radial-progress" style={{ "--value": 90,"--size": "11.5rem","--thickness": "1.3rem"}} role="progressbar">
                  90%
                </div>
                  <h5 className='h5'>JavaScript</h5>
                </div>
                <div className="item">
                <div className="radial-progress " style={{ "--value": 65,"--size": "11.5rem","--thickness": "1.3rem"}} role="progressbar">
                  65%
                </div>
                  <h5 className='h5'>Laravel</h5>
                </div>
                <div className="item">
                <div className="radial-progress " style={{ "--value": 75,"--size": "11.5rem","--thickness": "1.3rem"}} role="progressbar">
                  75%
                </div>
                  <h5 className='h5'>React</h5>
                </div>
                <div className="item">
                <div className="radial-progress " style={{ "--value": 90,"--size": "11.5rem","--thickness": "1.3rem"}} role="progressbar">
                  90%
                </div>
                  <h5 className='h5'>Sql</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}