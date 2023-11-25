function generateLabelList(
  uppercase: boolean = false,
  quantityOfLabels: number = 26
): string[] {
  const startCode = uppercase ? 65 : 97;
  const labelLength = quantityOfLabels;
  try {
    return Array.from({ length: labelLength }, (_, index) =>
      String.fromCharCode(startCode + index)
    );
  } catch (err) {
    console.error(err);
    return [];
  }
}

export { generateLabelList };
