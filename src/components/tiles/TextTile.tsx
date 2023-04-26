import * as React from "react";
// TextTile as TextTileProps used to avoid duplication of names
import { TextTile as TextTileProps } from "../../types/model";
import "../../styles/style.css";
import { ColorMap } from "../../constants/constants";

export default function TextTile({
  elementKey,
  color,
  title,
  text,
}: TextTileProps) {
  return (
    <div
      className="textContainer"
      id={elementKey}
      // background color is color from colors map
      style={{ backgroundColor: ColorMap[color!] }}
    >
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
}
