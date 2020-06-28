import React, { useState, useEffect } from "react";
import SlideContent from "./SlideContent";
import "../css/Slide.scss";
function Slide({ data }) {
  const getWidth = window.innerWidth;

  console.log(data);

  const [slide, setSlide] = useState({
    counter: 0,
  });

  const slideContent = {
    transform: `translateX(${-slide.counter * getWidth}px)`,
    width: `${getWidth}px`,
    transition: "transform 1s ease-in-out",
  };

  const handleClick = (item) => {
    setSlide({
      counter: item - 1,
    });
  };



  // const tickMin = () => {
  //   setSlide({
  //     activeSlide: slide.activeSlide--,
  //   });
  // };

  // const tickPos = () => {
  //   setInterval(() => activeSlideChange(), 3000);

  //   setSlide({
  //     activeSlide: slide.activeSlide++,
  //   });

  // };

  // const activeSlideChange = () => {
  //   tickPos()

  // };

  // const handleActive = () => {
  //   clearInterval(tickPos)

  // };

  // useEffect(()=>{
  //   tickPos()

  // })
  // setTimeout(function(){ handleActive(); }, 3000);

  // setInterval(function(){ handleActive(); }, 3000);

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
    return (
      <div
        key={item.id}
        className="navigation-items"
        value={item.id}
        onClick={() => handleClick(item.id)}
      >
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

      <div className="navigation">
        {navButtons}
        {/* <div id="left">
          <button onClick={minCounter}>Left</button>
        </div>
        <div id="right">
          <button onClick={addCounter}>Right</button>
        </div> */}
      </div>
    </div>
  );
}
export default Slide;
