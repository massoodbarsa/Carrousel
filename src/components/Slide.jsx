import React, { useState, useEffect, useRef } from "react";
import SlideContent from "./SlideContent";
import "../css/Slide.scss";

const getWidth = window.innerWidth;

function Slide({ data }) {
  const [slide, setSlide] = useState({
    activeSlide: 0,
  });

  const slideContent = {
    transform: `translateX(${-slide.activeSlide * getWidth}px)`,
    width: `${getWidth}px`,
    transition: "transform 1s ease-in-out",
  };

  const handleClick = (item) => {
    setSlide({
      activeSlide: item - 1,
    });
  };

  const autoPlay = () => {
    if (slide.activeSlide === data.length - 1)
      return setSlide({
        activeSlide: 0,
      });
    setSlide({
      activeSlide: slide.activeSlide + 1,
    });
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = autoPlay;
  });

  useEffect(() => {
    const autPlay = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(autPlay, 7000);
  }, []);

  const info = data.map((item) => {
    return (
      <div key={item.id} className="container">
        <SlideContent
          id={item.id}
          title={item.title}
          background={item.background}
          description={item.description}
          file={item.file}
          type={item.type}
          width={getWidth}
          temperature={item.temperature}
          activeSlide={slide.activeSlide}
          height="70vh"
        />
      </div>
    );
  });

  const navButtons = data.map((item) => {
    const hoverClass =
      item.id - 1 === slide.activeSlide ? "navigation_hover" : null;

    const arrow = item.id - 1 === slide.activeSlide ? "navigation_arrow" : null;

    return (
      <div
        key={item.id}
        className="navigation-items "
        id={hoverClass}
        value={item.id}
        onClick={() => handleClick(item.id)}
      >
        <div id={arrow}></div>
        <SlideContent
          id={item.id}
          // title={item.title}
          background={item.background}
          // description={item.description}
          file={item.file}
          type={item.type}
          width={getWidth / 6}
          temperature={item.temperature}
          activeSlide={slide.activeSlide}
          height="10vh"
        />
      </div>
    );
  });

  return (
    <div className="slide-container">
      <div className="slide" style={slideContent}>
        {info}
      </div>

      <div className="navigation">{navButtons}</div>
    </div>
  );
}
export default Slide;
