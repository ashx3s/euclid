// check that a label doesn't already exis, and assign new label based on generaed list

import { addLabel } from "./addLabel";
function createLabel(
  label: string,
  labelList: string[],
  usedLabels: string[]
): string {
  let newLabel: string = label;
  // filter label list to remove usedLabels
  let filteredLabelList = labelList.filter((label) =>
    usedLabels.indexOf(label)
  );
  while (usedLabels.includes(newLabel)) {
    newLabel = addLabel(label, filteredLabelList);
  }
  return newLabel;
}

export { createLabel };
