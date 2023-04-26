import * as React from "react";

import "../styles/style.css";
import { ComponentMap } from "../constants/constants";
import { Layout } from "../types/model";

type ContentProps = {
  data: Layout;
};

// data is the data from db.json
// Compononet is first element of rootElement selected by type using map of components

export default function Content({ data }: ContentProps) {
  const Component = ComponentMap[data.rootElement.type];
  //@ts-ignore
  // typescript creates an intersection which is not valid that's why I use ts-ignore

  // render selected Component with its props
  return <Component {...data.rootElement} />;
}
