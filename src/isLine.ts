import { isPoint } from "./isPoint";
// book 1 definition 2
function isLine(path: { x: number; y: number }[]) {
  // check for two sets of points
  let pathOrigin = path[0];
  let pathEnd = path[1];
  /* validate using M,m,L,l,H,h,V,v,Z,z https://css-tricks.com/svg-path-syntax-illustrated-guide/  */
  // iterate through array points
  // if there are two sets of points that a line (noted by the above listed commands in the d attribute)
  if (isPoint(pathOrigin) && isPoint(pathEnd)) {
    // return true
    return true;
  }
  // otherwise return false
  return false;
}

export { isLine };
