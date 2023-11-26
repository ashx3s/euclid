// book 1 definition 1
function isPoint({ x, y }: Coordinate) {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
}

export { isPoint };
