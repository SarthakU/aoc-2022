const file = await Deno.readTextFile("./inputs/5.txt");
const [_stacks, _directions] = file.split("\n\n");

const stacks: string[][] = [];

for (const stack of _stacks.split("\n").slice(0, -1)) {
  let idx = 0;
  let col = 1;
  while (true) {
    if (!stack[col]) {
      break;
    }

    if (stack[col].trim()) {
      stacks[idx] = [...(stacks[idx] || []), stack[col]];
    }

    col += 4;
    idx += 1;
  }
}

const directions = _directions
  .replaceAll("move", "")
  .replaceAll("from", "")
  .replaceAll("to", "")
  .split("\n")
  .map((x) => x.trim())
  .map((x) => x.split("  "))
  .map((x) => x.map((y) => parseInt(y)));

for (const dir of directions) {
  try {
    console.log(stacks);
    const toMove = stacks[dir[1] + -1].slice(0, dir[0]);
    stacks[dir[2] - 1] = [...toMove, ...stacks[dir[2] - 1]];
    stacks[dir[1] - 1].splice(0, dir[0]);
  } catch {
    break;
  }
}

console.log(stacks.map((x) => x[0]).join(""));
