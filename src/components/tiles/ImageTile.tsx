import * as React from "react";
// ImageTile as ImageTileProps used to avoid duplication of names
import { ImageTile as ImageTileProps } from "../../types/model";
import "../../styles/style.css";

export default function ImageTile({
  elementKey,
  title,
  source,
}: ImageTileProps) {
  return <img className="image" id={elementKey} src={source} alt={title} />;
}
