// book 1 definition 1
function createPoint({ label, coordinate: { x, y } }: Point): Point {
  return { label, coordinate: { x, y } };
}

export { createPoint };
