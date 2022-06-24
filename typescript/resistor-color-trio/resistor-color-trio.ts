function createColorCodeMap() {
  const colorCodeMap = new Map<string, number>();
  colorCodeMap.set("black", 0);
  colorCodeMap.set("brown", 1);
  colorCodeMap.set("red", 2);
  colorCodeMap.set("orange", 3);
  colorCodeMap.set("yellow", 4);
  colorCodeMap.set("green", 5);
  colorCodeMap.set("blue", 6);
  colorCodeMap.set("violet", 7);
  colorCodeMap.set("grey", 8);
  colorCodeMap.set("white", 9);
  return colorCodeMap;
}

function isResistanceValueInKilos(resistanceValue: number) {
  return resistanceValue > 1000;
}

function calculateResistanceValue(colorCodeMap: Map<string, number>, firstColor: string, secondColor: string, thirdColor: string) {
  const digits = colorCodeMap.get(firstColor)! * 10 + colorCodeMap.get(secondColor)! * 1;
  const multiplier = Math.pow(10, colorCodeMap.get(thirdColor)!);
  return digits * multiplier;
}

export function decodedResistorValue(colorCode: string[]) {
  const firstColor = colorCode[0];
  const secondColor = colorCode[1];
  const thirdColor = colorCode[2];

  const colorCodeMap = createColorCodeMap();

  let resistanceValue = calculateResistanceValue(colorCodeMap, firstColor, secondColor, thirdColor);
  let unit = "ohms";
  if (isResistanceValueInKilos(resistanceValue)) {
    unit = "kiloohms";
    resistanceValue = resistanceValue/1000;
  }
  return `${resistanceValue} ${unit}`;
}

