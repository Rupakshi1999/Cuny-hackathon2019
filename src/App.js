import React, { Component } from "react";

import "./App.css";

import Card from "./Card";

import data from "./data/data";

import Navbar from "./components/Navbar";

// class component

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,

      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;

    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;

    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container d-flex justify-content-center">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
            style={{
              width: "75%",
              height: "50%",
              alignItems: "center"
            }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="App">
          <button
            className="btn btn-info mt-3"
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length - 1}
          >
            Next
          </button>

          <button
            className="btn btn-info mt-3"
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
          </button>

          <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${property.index *
                      (100 / properties.length)}%)`
                  }}
                >
                  {properties.map(property => (
                    <a key={property._id} href={"/"}>
                      <Card key={property._id} property={property} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
