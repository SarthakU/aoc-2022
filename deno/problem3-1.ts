const file = await Deno.readTextFile("./inputs/3.txt");
const lines = file.split("\n");

const getCommon = (h1: string, h2: string) => {
  const s = new Set(h1.split(""));
  return [...new Set(h2.split("").filter((x) => s.has(x)))].join("");
};

const calculateValue = (s: string) => {
  let sum = 0;
  for (const char of s) {
    if (char === "") {
      continue;
    }
    if (char === char.toUpperCase()) {
      sum += char.charCodeAt(0) - 64 + 26;
    } else {
      sum += char.charCodeAt(0) - 96;
    }
  }

  return sum;
};

let sum = 0;
for (const line of lines) {
  const half = Math.floor(line.length / 2);
  const firstHalf = line.slice(0, half);
  const secondHalf = line.slice(half);
  const common = getCommon(firstHalf, secondHalf);
  sum += calculateValue(common.trim());
}

console.log(sum);
