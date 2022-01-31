import React from "react";
import zapp2 from "../assets/Zapp2.jpg";

interface Section {
  title: string;
  desc: React.ReactNode;
  right?: boolean;
}

const Section = (props: Section) => {
  return (
    <>
      <div className="col-md-11 mt-5">
        <div
          className={`display-4 border-bottom ${
            props.right ? "text-right" : ""
          }`}
        >
          {props.title}
        </div>
      </div>
      <div className="col-md-11 mt-3">
        <div className={`${props.right ? "text-right" : ""}`}>{props.desc}</div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="container-fluid row d-flex justify-content-center mx-0 px-0 py-5">
      <div className="col row d-flex justify-content-center align-items-center ">
        <div
          className="col  d-flex justify-content-center align-items-center flex-column"
          // style={styles.zapote}

          // style={{position: 'relative'}}
        >
          <div
            // style={{position: 'absolute'}}
            className="display-4 text-center my-2"
          >
            Donde la nutrición y la naturaleza se juntan.
          </div>
          <img alt="NutriZanac" src={zapp2} className="img-fluid" />
        </div>

        <Section
          title="¿Quiénes somos?"
          desc="Somos estudiantes del Tecnológico de Veracruz, de la carrera de Ingeniería Mecatrónica"
        />

        <Section
          right
          title="¿Qué es?"
          desc={
            <div>
              <b>NutriZanac</b> es un suplemento nutritivo artesanal, ideado
              para personas que padecen diabetes y condiciones similares, sin
              mermar su salud; aunque cualquiera, desde niños hasta personas de
              avanzada edad, pueden consumirlo. Existen presentaciones en
              barritas y muffins en diferentes tamaños.
            </div>
          }
        />

        <Section
          title="¿Qué contiene?"
          desc={
            <div>
              El ingrediente principal de NutriZanac es el zapote negro, fruta
              mexicana de gran sabor y tradición popular. Además, NutriZanac
              está elaborado con:
              <ul className="row mt-4 d-flex justify-content-center align-items-center px-0">
                <li className="list-group-item text-center m-1 border col-md-3 ">
                  Nuez
                </li>
                <li className="list-group-item text-center m-1 border col-md-3 ">
                  Avena
                </li>
                <li className="list-group-item text-center m-1 border col-md-3 ">
                  Arándanos secos
                </li>
                <li className="list-group-item text-center m-1 border col-md-3 ">
                  Aceite de coco
                </li>
                <li className="list-group-item text-center m-1 border col-md-3 ">
                  Harina sin blanquear
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Home;
