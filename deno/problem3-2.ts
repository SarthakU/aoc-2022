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
let idx = 0;
while (true) {
  const slice = lines.slice(idx, idx + 3);
  if (slice.length < 3) {
    break;
  }
  const common = getCommon(slice[0], slice[1]);
  const common2 = getCommon(common, slice[2]);

  sum += calculateValue(common2);
  idx += 3;
  if (idx >= lines.length) {
    break;
  }
}

console.log(sum);
