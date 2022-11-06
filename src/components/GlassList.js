import React, { Component } from "react";
import Model from "./Model";
import GlassItem from "./GlassItem";
import background from "../assets/img/background.jpg";
import model from "../assets/img/model.jpg";

import v1 from "../assets/img/v1.png";
import v2 from "../assets/img/v2.png";
import v3 from "../assets/img/v3.png";
import v4 from "../assets/img/v4.png";
import v5 from "../assets/img/v5.png";
import v6 from "../assets/img/v6.png";
import v7 from "../assets/img/v7.png";
import v8 from "../assets/img/v8.png";
import v9 from "../assets/img/v9.png";

export default class GlassList extends Component {
  glassList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    selectedItem: null,
  };

  setSelectedItem = (childItem) => {
    console.log(childItem);
    this.setState({
      selectedItem: childItem,
    });
  };

  renderGlasses() {
    return this.glassList.map((item) => {
      return (
        <div className="col-2" key={item.id}>
          <GlassItem item={item} select={this.setSelectedItem} />
        </div>
      );
    });
  }
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="position-absolute bg-dark w-100 opacity-75 py-5 ">
          <h2 className="text-light text-center"> TRY GLASSES APP ONLINE</h2>
        </header>
        <div className="py-5" style={{ background: "rgb(0,0,0,0.2)" }}>
          <div className="container py-5 mt-5">
            <div className="mx-auto mt-3 w-25 py-5 ">
              {this.state.selectedItem ? (
                <Model item={this.state.selectedItem} />
              ) : (
                <div>
                  <img
                    src={model}
                    alt=""
                    className="img-fluid mx-auto text-center d-block"
                  />
                </div>
              )}
            </div>
            <div className="row mt-5 mx-auto p-5 position-relative bg-light rounded">
              {this.renderGlasses()}
              <button
                className="btn btn-info position-absolute "
                style={{
                  bottom: "10px",
                  right: "10px",
                  width: 100,
                }}
                onClick={() => {
                  this.setState({
                    selectedItem: null,
                  });
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
