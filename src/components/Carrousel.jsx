import React, { useState } from "react";
import Slide from "./Slide";
import "../css/Carrousel.scss";
import Data from "../data.json";
function Carrousel() {
  const [state, setstate] = useState(Data);

  return (
    <div className="carrousol-container">
      <Slide data={state} />
    </div>
  );
}
export default Carrousel;
