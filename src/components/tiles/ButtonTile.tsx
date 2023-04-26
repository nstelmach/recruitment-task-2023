import * as React from "react";
// ButtonTile as ButtonTileProps used to avoid duplication of names
import { ButtonTile as ButtonTileProps } from "../../types/model";
import "../../styles/style.css";
import { ColorMap } from "../../constants/constants";

export default function ButtonTile({
  elementKey,
  text,
  action,
}: ButtonTileProps) {
  const handleClick = () => {
    // there is one update action, if there were also others, you would have to modify the solution

    // it is separated into two situations
    // 1. when we want to change the background color
    // 2. when we have to change image src
    // if we wanted to change another property as well, we would have to modify the function

    if (action.value.source) {
      // element is defined twice because typescript complains about type, one must be HTMLElement and the other HTMLImageElement, because src does not exist on HTMLElement
      const element = document.getElementById(
        action.referenceElementKey
      ) as HTMLImageElement | null;
      if (element) {
        element.src = action.value.source;
      }
    } else if (action.value.color) {
      const element = document.getElementById(action.referenceElementKey);
      if (element) {
        // color change using colors map
        element.style.backgroundColor = ColorMap[action.value.color];
      }
    }
  };

  return (
    <button onClick={handleClick} className="button" id={elementKey}>
      {text}
    </button>
  );
}
