function generateSvgViewBox({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
}: viewBox): string {
  // use arguments to check if all argus are numbers
  if (isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height)) {
    throw new Error("Invalid input. All parameters must be numbers");
  }
  const viewBoxAttribute = `${x} ${y} ${width} ${height}`;
  return viewBoxAttribute;
}

export { generateSvgViewBox };
