"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPoint = void 0;
let allLabels = Array.from(Array(26)).map((_, num) => String.fromCharCode(num + 97));
let pointList = [];
let labelList = [];
function setLabel(x, y) {
    pointList.push(allLabels.slice(0, 1).toString());
    const outputLabel = allLabels.slice(0, 1).toString();
    return { label: outputLabel };
}
function setPoint(x, y, label) {
    return { x: x, y: y, label: label };
}
exports.setPoint = setPoint;
