import { createHash } from "node:crypto";
import { getRandomRange } from "./get-random-range";
import { getShuffledArray } from "./get-shuffled-array";

function sha256(content: string) {
  return createHash("sha256").update(content).digest("hex");
}

function getEmojis(coverChars: string[], seed: string) {
  const REPEAT_COUNT = 20;

  const chars = coverChars.flatMap((char) => {
    const str = char.repeat(REPEAT_COUNT);
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return [...segmenter.segment(str)].map(({ segment }) => segment);
  });
  const shuffledChars = getShuffledArray(chars, seed);
  let text = "";

  shuffledChars.forEach((char, index) => {
    const depth = Math.ceil((index + 1) / (shuffledChars.length / 5)) * 2;
    text += `<text
        style="transform: translate(${getRandomRange(
          0,
          1600,
          sha256(seed).at(index + 2) || ""
        )}px, ${getRandomRange(
      0,
      450,
      sha256(seed).at((index + 7) * -1) || ""
    )}px) rotate(${getRandomRange(-120, 120, sha256(seed)[index + 1])}deg);
          font-size: ${depth + 1}rem;
          filter: blur(${depth % 10}px)
        "
      >
        ${char}
      </text>`;
  });

  return text;
}

export async function getCoverImage(coverChars: string[], seed: string) {
  console.log({ seed });
  return `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1600 450"
  width="1600"
  height="450"
  class="cover"
  preserveAspectRatio="xMidYMid slice"
  role="presentation">${getEmojis(coverChars, seed)}</svg>`;
}
