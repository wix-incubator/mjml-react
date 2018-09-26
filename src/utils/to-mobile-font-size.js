export function toMobileFontSize(sizeWithUnit) {
  const size = parseInt(sizeWithUnit, 10) || 12;
  if (size < 12) {
    return 12;
  }
  if (size < 26) {
    return size;
  }
  if (size > 100) {
    return 50;
  }
  return 26 + Math.floor((size - 26) / 3);
}
