import VerticalSplitter from "../components/splitters/VerticalSplitter";
import HorizontalSplitter from "../components/splitters/HorizontalSplitter";
import ImageTile from "../components/tiles/ImageTile";
import TextTile from "../components/tiles/TextTile";
import ButtonTile from "../components/tiles/ButtonTile";

// component map to render using types from db.json

export const ComponentMap = {
  verticalSplitter: VerticalSplitter,
  horizontalSplitter: HorizontalSplitter,
  imageTile: ImageTile,
  textTile: TextTile,
  buttonTile: ButtonTile,
};

// colors map for different modes

export const ColorMap = {
  dark: "#1b1c2e",
  mid: "#242538",
  light: "#b6b6cc",
};
