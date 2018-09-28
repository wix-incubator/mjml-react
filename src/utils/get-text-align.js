const TEXT_ALIGN_VALUES = ['left', 'right', 'center', 'justify', 'inherit'];

export function getTextAlign(value, fallback = 'center') {
  if (value && TEXT_ALIGN_VALUES.includes(value)) {
    return value;
  }
  return fallback;
}
