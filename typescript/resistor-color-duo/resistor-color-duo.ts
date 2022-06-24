enum Color {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9
}

export function decodedValue(colorBands: string[]) {
  const firstColorBand = colorBands[0];
  const secondColorBand = colorBands[1];
  return Color[firstColorBand as keyof typeof Color] * 10 + Color[secondColorBand as keyof typeof Color];
}
