import * as React from "react";
import "../../styles/style.css";
// VerticalSplitter as VerticalSplitterProps used to avoid duplication of names
import { VerticalSplitter as VerticalSplitterProps } from "../../types/model";
import { ComponentMap } from "../../constants/constants";

export default function VerticalSplitter({
  elementKey,
  elements,
}: VerticalSplitterProps) {
  return (
    <div id={elementKey} className="vertical">
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
