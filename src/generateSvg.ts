import { generateSvgViewBox } from "./generateSvgViewBox";

function generateSvg(
  viewBox: viewBox,
  height: number = 100,
  width: number = 100,
  xmlns: string = "http://www.w3.org/2000/svg"
) {
  const viewBoxAttribute = generateSvgViewBox(viewBox);
  if (!viewBoxAttribute) {
    throw new Error("Error generating viewBox attribute");
  }

  return `<svg viewBox="${viewBoxAttribute}(
    viewBox
  )}" xmlns="${xmlns}" height="${height}px" width="${width}px"></svg`;
}

export { generateSvg };
