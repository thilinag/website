import seedrandom from "seedrandom";

export function getRandomRange(min: number, max: number, seed: string) {
  const rng = seedrandom(seed);

  return Math.ceil(rng() * (max - min) + min);
}
