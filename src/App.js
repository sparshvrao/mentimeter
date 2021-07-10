import "./styles.css";
import slide from "./images/slide1.jpeg";
import { Component } from "react";

export default function App() {
  function showSlides(slides) {
    var comp = [];
    for (let i = 1; i <= slides; i++) {
      comp.push(<Slide slideNum={i} slideimg={slide} />);
    }
    return comp;
  }

  return (
    <div className="App">
      <div className="sidebar">{showSlides(10)}</div>
      <div className="main">Slides</div>
    </div>
  );
}

function Slide({ slideNum, slideimg }) {
  return (
    <div className="card">
      <span className="slideNum">{slideNum}</span>
      <img className="img-thumbnail" src={slideimg} alt="" />
    </div>
  );
}
