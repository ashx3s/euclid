// generate list of possible labels
let labelRange = Array.from(Array(26)).map((_, num) =>
  String.fromCharCode(num + 97)
);

function setLabel(text: string): { label: string } {
  return { label: text };
}
