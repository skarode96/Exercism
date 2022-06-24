enum OrbitalPeriod {
  earth = 1.0,
  mercury = 0.2408467,
  venus = 0.61519726,
  mars = 1.8808158,
  jupiter = 11.862615,
  saturn = 29.447498,
  neptune = 164.79132,
  uranus = 84.016846,
}

export function age(planet: string, ageInSeconds: number): number {
  const earthOrbitalPeriodInSeconds = 31557600;
  const planetsOrbitalPeriodInSeconds = earthOrbitalPeriodInSeconds * OrbitalPeriod[planet as keyof typeof OrbitalPeriod];
  return Number(Number(ageInSeconds / planetsOrbitalPeriodInSeconds).toFixed(2));
}
