import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Img/logo.png'
import ImgVar from './Img/bg.jpg';
class App extends Component {
  render() {
    const bg = {
      /* Set rules to fill background */
      minHeight: "100%",
      minWidth: "1024px",

      /* Set up proportionate scaling */
      width: "100%",
      height: "auto",

      /* Set up positioning */
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -1
  };




  const masthead = {

      paddingTop: "8rem",
      paddingBottom: "12rem",
  };

  const searchButton = {
      width: "70px",
      alignItems: "center",
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      background: "transparent",
      border: 0,
      padding: 0,
      cursor: "pointer",
      display: "flex",
      border: "none",
      outline: "none",
      justifyContent: "center"

  }
    return (
      <div className="container" >
      <nav className="navbar  navbar-expand-lg navbar-light" style={{ float: "right" }}>

          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav" >
              <ul className="navbar-nav " >
                

              </ul>
          </div>
      </nav>
      <img src={ImgVar} style={bg} />

      <header className=" text-white text-center" style={masthead}>

          <div className="container">
              <div className="row">
                  <div className="col-xl-9 mx-auto">
                    

                  </div>
                

                  <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                      <form>
                          <div className="form-row">
                              <div className="col-xl-9 mx-auto">
                                  <input type="text" className="form-control form-control-lg" style={{ borderRadius: "2rem" }} placeholder="Example : Hyderabad" />
                                  <button type="submit" class="searchButton" style={searchButton}>
                                      <i class="fa fa-search"></i>
                                  </button>
                              </div>

                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </header>
  </div>
    );
  }
}

export default App;
