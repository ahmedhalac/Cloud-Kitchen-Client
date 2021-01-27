import "../../assets/css/HomeComponent.css";
//import template from "../../assets/img/logo-test.png";
import logoPic from "../../assets/img/logo.png";
import React from "react";

// get our fontawesome imports
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeComponent = (props) => {
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
              {/*<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">O nama</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Kontakt</a>
                        </li>*/}
              <li className="nav-item">
                <a className="nav-link login js-scroll-trigger" href="/login">
                  Prijavi se
                </a>
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
            <a className="btn btn-primary  js-scroll-trigger" href="#about">
              Get Started
            </a>
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
              <h2 className="text-white mb-4">O nama</h2>
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
      <div className="regular_img"></div>

      {/* Projects */}
      <section className="projects-section bg-light" id="projects">
        <div className="container">
          {/* Featured Project Row */}
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
          {/* Project one row */}
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="../assets/img/demo-image-01.jpg"
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
          {/* Project two row */}
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="../assets/img/demo-image-02.jpg"
                alt=""
              />
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
      </section>
      <footer className="page-footer font-small mdb-color pt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="/#">MDBootstrap</a>
              </p>
              <p>
                <a href="/#">MDWordPress</a>
              </p>
              <p>
                <a href="/#">BrandFlow</a>
              </p>
              <p>
                <a href="/#">Bootstrap Angular</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="/#">Your Account</a>
              </p>
              <p>
                <a href="/#">Become an Affiliate</a>
              </p>
              <p>
                <a href="/#">Shipping Rates</a>
              </p>
              <p>
                <a href="/#">Help</a>
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
                <i className="fa fa-envelope mr-3"></i> ahmed19halac@gmail.com
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
                © 2020 Copyright: Ahmed Halač
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
