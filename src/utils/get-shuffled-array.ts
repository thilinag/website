import seedrandom from "seedrandom";

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export function getShuffledArray(array: string[], seed: string) {
  let currentIndex = array.length,
    randomIndex;

  const rng = seedrandom(seed);

  while (currentIndex != 0) {
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
