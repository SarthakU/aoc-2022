const results = await Deno.readTextFile("./inputs/1.txt");
const calories = results.split("\n");

let prev: number[] = [];

let curr = 0;

for (const i of calories) {
  if (i) {
    curr += parseInt(i);
  } else {
    prev = [curr, ...prev].sort();
    curr = 0;
  }
}
prev = [curr, ...prev].sort();
prev = sortNumArray(prev).reverse();

console.log(prev[0]);

function sortNumArray(arr: number[]) {
  return arr.sort((a, b) => a - b);
}
