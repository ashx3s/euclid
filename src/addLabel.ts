import { generateLabel } from "./generateLabel";
// this function is responsible for adding the label to a point in the pointList
// it works withthe
function addLabel(label: string, pointList: string[]): string {
  // if there is an input label,
  let newLabel: string = "";

  if (label) {
    newLabel = label;
  }
  // validate if the input label is in the pointList
  if (pointList.includes(newLabel)) {
    // if it is, then go to the next one and return that
    newLabel = generateLabel(pointList);
  }
  // if it isn't then return it
  return newLabel;
}

export { addLabel };
