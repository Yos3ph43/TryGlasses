import React, { Component } from "react";
import model from "../assets/img/model.jpg";

export default class Model extends Component {
  render() {
    const item = this.props.item;

    return (
      <div className="model position-relative rounded overflow-hidden">
        <img
          src={model}
          alt=""
          className="img-fluid mx-auto text-center d-block "
        />
        <div
          style={{
            position: "absolute",
            top: "24%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "57%",
            opacity: "90%",
          }}
        >
          <img src={item.url} alt="" className="img-fluid" />
        </div>
        <div
          className="px-2 bottom-0 position-absolute"
          style={{
            background: "#ff9800",
            opacity: "60%",
          }}
        >
          <h1 className="fs-2" style={{ color: "#6700ff" }}>
            {item.name}
          </h1>
          <p className="fw-bold text-light">{item.desc}</p>
        </div>
      </div>
    );
  }
}
