interface Coordinate {
  x: number;
  y: number;
}
interface Point {
  label: string;
  coordinate: Coordinate;
}
type viewBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};
