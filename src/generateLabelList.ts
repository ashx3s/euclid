const generateLabelList = (uppercase: boolean = false): string[] => {
  const startCode = uppercase ? 65 : 97;
  try {
    if (uppercase) {
      let upperAlpha = Array.from(Array(26)).map((_, num) =>
        String.fromCharCode(num + 65)
      );
      return upperAlpha;
    } else {
      let lowerAlpha = Array.from(Array(26)).map((_, num) =>
        String.fromCharCode(num + 97)
      );
      return lowerAlpha;
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};

export { generateLabelList };
