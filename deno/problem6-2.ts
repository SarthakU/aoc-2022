const file = await Deno.readTextFile("./inputs/6.txt");

let signal: string[] = [];
let idx = 0;

for (const char of file) {
  idx += 1;
  if (signal.includes(char)) {
    const wrong = signal.indexOf(char);
    signal = signal.slice(wrong + 1);
    signal.push(char);
  } else {
    signal.push(char);
  }
  if (signal.length === 4) {
    break;
  }
}

console.log(idx);
