interface point {
  x: number;
  y: number;
  label: string;
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
