import { generateLabelList } from "./generateLabelList";
// this function simply returns a value from a generated list of Labels
// it checks to make sure the value isn't in the current pointList
function generateLabel(pointList: string[]) {
  let labelList = generateLabelList();
  const availableLabels = labelList.filter((value) =>
    pointList.includes(value)
  );
  return availableLabels[0];
}

export { generateLabel };
