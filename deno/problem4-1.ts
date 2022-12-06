const file = await Deno.readTextFile("./inputs/4.txt");
const lines = file.split("\n");

let total = 0;
for (const line of lines) {
  const [a, b] = line.split(",");
  if (!a || !b) continue;
  const [a1, a2] = a.split("-").map((x) => parseInt(x));
  const [b1, b2] = b.split("-").map((x) => parseInt(x));

  if (a1 >= b1 && a2 <= b2) {
    total++;
  } else if (b1 >= a1 && b2 <= a2) {
    total++;
  }
}

console.log(total);
