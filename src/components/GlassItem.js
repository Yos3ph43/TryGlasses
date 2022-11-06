import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    const item = this.props.item;
    const setSelectedItem = this.props.select;
    return (
      <div
        className="p-2 border"
        onClick={() => {
          setSelectedItem(item);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={item.url} alt="" className="img-fluid" />
      </div>
    );
  }
}
