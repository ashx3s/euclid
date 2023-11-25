// generate list of possible labels
let allLabels = Array.from(Array(26)).map((_, num) =>
  String.fromCharCode(num + 97)
);

// update pointList with point objects (label, x, y)

let pointList = [];

// when called it should return a label that can be added to a point

function setLabel(x: number, y: number): { label: string } {
  pointList.push(allLabels.slice(0, 1).toString());
  const outputLabel = allLabels.slice(0, 1).toString();

  return { label: outputLabel };
}
