import React from "react";
import logoHeader from '../images/logoHeader.png'

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div className="container_logo_name">
          <img src={logoHeader} alt="logo-mustace" width={75} href="#page-top"/>
          <a className="navbar-brand page-scroll" href="#page-top">
            Café Mustache
          </a>{" "}
          </div>
          
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
        
            <li>
              <a href="#team" className="page-scroll">
                Equipo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
