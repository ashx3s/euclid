import { generateSvgViewBox } from "./generateSvgViewBox";

function generateSvg(
  viewBox: viewBox = { x: 0, y: 0, width: 100, height: 100 },
  height: number = 100,
  width: number = 100
) {
  const xmlns: string = "http://www.w3.org/2000/svg";
  const viewBoxAttribute = generateSvgViewBox(viewBox);
  if (!viewBoxAttribute) {
    throw new Error("Error generating viewBox attribute");
  }

  return `<svg viewBox="${viewBoxAttribute}(
    viewBox
  )}" xmlns="${xmlns}" height="${height}px" width="${width}px"></svg>`;
}

export { generateSvg };
