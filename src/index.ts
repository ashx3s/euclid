// imports
import { generateLabelList } from "./generateLabelList";

interface point {
  label: string;
  x: number;
  y: number;
}

// generate list of possible labels
const allLabels = generateLabelList();

let pointList = [];

// let labelList = []; // when called it should return a label that can be added to a point

function setLabel(
  x: number,
  y: number
): { label: string; coordinates: [x: number, y: number] } {
  pointList.push(allLabels.slice(0, 1).toString());
  const outputLabel = allLabels.slice(0, 1).toString();

  return { label: outputLabel, coordinates: [x, y] };
}

// return a point that has x,y coords and a label value
function setPoint(x: number, y: number, label: string): point {
  // check if a label has been passed and assign one if not

  // verify that the coordinate points are in the viewbox
  return { x: x, y: y, label: label };
}

export { setPoint, setLabel };
