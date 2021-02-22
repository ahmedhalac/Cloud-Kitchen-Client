import "../../assets/css/HomeComponent.css";
import Email from "./Email";
import logoPic from "../../assets/img/logo.png";
import React from "react";

// get our fontawesome imports
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeComponent = (props) => {
  const loginLogout = () => {
    if (props.user) {
      return (
        <a
          className="nav-link login js-scroll-trigger mr-2"
          href="/"
          onClick={props.logOut}
        >
          Odjavi se
        </a>
      );
    } else {
      return (
        <a className="nav-link login js-scroll-trigger mr-2" href="/login">
          Prijavi se
        </a>
      );
    }
  };

  return (
    <div id="page-top">
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <img className="navbar-brand logo" src={logoPic} alt="logo" />
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item d-flex">
                <a
                  className="nav-link order js-scroll-trigger mr-2"
                  href="/order"
                >
                  Naruči online
                </a>
                {loginLogout()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead */}
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            {/*<h1 className="mx-auto my-0 text-uppercase">Online hrana</h1>**/}
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              <strong>Gladni?</strong>
              <br />
              Pronađite hranu i naručite online
            </h2>
          </div>
        </div>
      </header>
      {/* About */}
      <section className="about-section text-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <FontAwesomeIcon
                icon={faHamburger}
                style={{ color: "white" }}
                size={"5x"}
              />
              <h3 className="text-white mb-4 font-weight-bold">O nama</h3>
              <p className="text-white-50">
                Online restoran Cloud Kitchen nudi izvrsne obroke vrhunske
                kvalitete.
                <br />
                Ključ našeg uspjeha je jednostavan: pružanje kvalitetne hrane
                koja svaki put ima izvrstan ukus.
                <br />
                <br />
                Pronađite hranu za vas, odaberite piće. Ali najviše od svega
                opustite se!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="group-menu text-center" id="group-menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-white mb-4 font-weight-bold">
                Grupni meniji
              </h3>
              <p className="text-white-50">
                Grupni jelovnici (meniji) za porodične ručkove i večere vikendom
              </p>
            </div>
          </div>

          <a href="/group-menu">
            <button className="btn btn-primary group-menu-btn mt-5">
              GRUPNI MENI
            </button>
          </a>
        </div>
      </section>
      <div className="contact-us">
        <Email />
      </div>
      {/* Projects 
      <section className="projects-section bg-light" id="projects">
        <div className="container">
         Featured Project Row 
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="../assets/img/bg-masthead.jpg"
                alt=""
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p className="text-black-50 mb-0">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download
                  it, customize it, and publish your website!
                </p>
              </div>
            </div>
          </div>
          Project one row 
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="../assets/img/regular_pic.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white-50">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project two row 
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src="../assets/img/test.jpg" alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well, try this theme on a small screen!
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <footer className="page-footer font-small mdb-color pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Cloud Kitchen
              </h6>
              <p>
                Cloud Kitchen je web aplikacija za naručivanje i dostavu hrane.
                Nudimo hranu vrhunskog kvaliteta, stoga Vas pozivamo da
                isprobate nešto iz naše ponude.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                KORISNI LINKOVI
              </h6>
              <p>
                <a href="/login">Prijavi se</a>
              </p>
              <p>
                <a href="/register">Registruj se</a>
              </p>
              <p>
                <a href="/order">Naruči hranu</a>
              </p>
              <p>
                <a href="/group-menu">Grupni meniji</a>
              </p>
              <p>
                <a href="/">Početna</a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Kontakt</h6>
              <p>
                <i className="fa fa-home mr-3"></i> Bardakčije br.1, 71000
                Sarajevo
              </p>
              <p>
                <i className="fa fa-envelope mr-3"></i>{" "}
                <a href="mailto:ahmed19halac@gmail.com">
                  ahmed19halac@gmail.com
                </a>
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i> +38761970545
              </p>
            </div>
          </div>

          <hr />
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2021 Copyright: Ahmed Halač
              </p>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.facebook.com/ahmedhalac"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://github.com/ahmedhalac"
                      target="_blank"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.linkedin.com/in/ahmedhalac/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.instagram.com/_ahmedhalac/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
