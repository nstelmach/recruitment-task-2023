import * as React from "react";
import "../../styles/style.css";
// HorizontalSplitter as HorizontalSplitterProps used to avoid duplication of names
import { HorizontalSplitter as HorizontalSplitterProps } from "../../types/model";
import { ComponentMap } from "../../constants/constants";

export default function HorizontalSplitter({
  elementKey,
  elements,
}: HorizontalSplitterProps) {
  return (
    <div id={elementKey} className="horizontal">
      {elements.map((element) => {
        // map elements from array, return component that matches type from db.json using component map
        const Component = ComponentMap[element.type];
        //@ts-ignore
        // typescript creates an intersection which is not valid that's why I use ts-ignore
        // pass props from a given component
        return <Component key={element.elementKey} {...element} />;
      })}
    </div>
  );
}
