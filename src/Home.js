import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import State from "./State";
import District from "./District";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
          <div className="container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-lg-auto">
                <div className="nav-item nav-link active">
                  <NavLink
                    to="/state"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    States
                  </NavLink>
                </div>
                <div className="nav-item nav-link active">
                  <NavLink
                    to="/district"
                    style={({ isActive }) => ({
                      color: isActive ? "greenyellow" : "white",
                    })}
                  >
                    District
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/1920x1080/?data"
                style={{ height: "740px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1920x1080/?computor"
                style={{ height: "740px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1920x1080/?technology"
                style={{ height: "740px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/state" element={<State />} />
          <Route exact path="/district" element={<District />} />
        </Routes>
        <p className="text-center">© 2022 Copyright: Sumanta Das</p>
      </BrowserRouter>
    </>
  );
};

export default Home;
