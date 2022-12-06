const file = await Deno.readTextFile("./inputs/4.txt");
const lines = file.split("\n");

let total = 0;
for (const line of lines) {
  const [a, b] = line.split(",");
  if (!a || !b) continue;
  const [a1, a2] = a.split("-").map((x: string) => parseInt(x));
  const [b1, b2] = b.split("-").map((x: string) => parseInt(x));

  if (a2 < b1 || b2 < a1) {
    continue;
  } else {
    total++;
  }
}

console.log(total);
