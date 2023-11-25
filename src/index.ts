interface point {
  x: number;
  y: number;
  label: string;
}
// generate list of possible labels
let allLabels = Array.from(Array(26)).map((_, num) =>
  String.fromCharCode(num + 97)
);

// update pointList with point objects (label, x, y)

let pointList = [];

let labelList = []; // when called it should return a label that can be added to a point

function setLabel(x: number, y: number): { label: string } {
  pointList.push(allLabels.slice(0, 1).toString());
  const outputLabel = allLabels.slice(0, 1).toString();

  return { label: outputLabel };
}

/*
TYPES OF INPUTS
1. a set of coordinates to create a new point
*/

// return a point that has x,y coords and a label value
function setPoint(x: number, y: number, label: string): point {
  // check if a label has been passed and assign one if not

  // verify that the coordinate points are in the viewbox
  return { x: x, y: y, label: label };
}

export { setPoint };
