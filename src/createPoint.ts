// purpose create a point variable
function createPoint({ label, coordinate: { x, y } }: Point): Point {
  return { label, coordinate: { x, y } };
}

export { createPoint };
