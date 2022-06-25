
export function isPangram(input: string) {
  const lowercaseInput = input.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every(c => lowercaseInput.includes(c))
}
