import React from "react";
import "../css/SlideContent.scss";

export default function SlideContent(props) {
  const imageContainer = {
    width: `${props.width}px`,
    height: `${props.height}`,
  };

  const images = () => {
    if (props.type !== "WEATHER") {
      return (
        <div className="images-container" style={imageContainer}>
          <img
            className="image"
            src={
              props.background === "dark"
                ? require(`./../images/dark-wood.jpg`)
                : require(`./../images/light-wood.png`)
            }
            alt="Img"
          />
          <div className="image-text">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <img
            className="image"
            src={
              props.file
                ? require(`./../images/${props.file}`)
                : require(`./../images/sunny-background.jpg`)
            }
            alt="Img"
          />
        </div>
      );
    } else {
      return (
        <div className="images-container" style={imageContainer}>
          <img
            style={{ width: "100%" }}
            className="image"
            src={require(`./../images/sunny-background.jpg`)}
            alt="Img"
          />
          <div className="weather">
            <h2>Weather today</h2>
            <h1>{props.temperature}'C</h1>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="slide-content">
      <div>{images()}</div>
    </div>
  );
}
