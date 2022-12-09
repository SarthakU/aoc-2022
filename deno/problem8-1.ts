const results = await Deno.readTextFile("./inputs/8.txt");
const commands = results
  .split("\n")
  .slice(0, -1)
  .map((line) => line.split("").map((c) => parseInt(c)));

let visibleCount = 0;
let y = 0;

for (let i = 0; i < commands.length; i++) {
  let x = 0;
  for (let j = 0; j < commands[i].length; j++) {
    // if (
    //   x === 0 ||
    //   y === 0 ||
    //   x === commands.length - 1 ||
    //   y === commands.length - 1
    // ) {
    //   visibleCount++;

    if (
      !(
        x === 0 ||
        y === 0 ||
        x === commands.length - 1 ||
        y === commands.length - 1
      )
    ) {
      console.log(
        "x",
        x,
        "y",
        y,
        "value",
        commands[y][x],
        checkIfVisible(x, y, commands)
      );
    }
    if (checkIfVisible(x, y, commands)) {
      visibleCount++;
    }
    x++;
  }

  y++;
}

console.log(visibleCount);

function checkIfVisible(x, y, tree) {
  const value = tree[y][x];
  if (x === 0 || y === 0 || x === tree[0].length - 1 || y === tree.length - 1) {
    return true;
  }

  // check up
  for (let i = y - 1; i >= 0; i--) {
    if (tree[i][x] >= value) {
      break;
    }
    if (i === 0) {
      return true;
    }
  }

  // check left
  for (let i = x - 1; i >= 0; i--) {
    if (tree[y][i] >= value) {
      break;
    }
    if (i === 0) {
      return true;
    }
  }

  // check right
  for (let i = x + 1; i < tree[y].length; i++) {
    if (tree[y][i] >= value) {
      break;
    }
    if (i === tree[y].length - 1) {
      return true;
    }
  }

  // check down
  for (let i = y + 1; i < tree.length; i++) {
    if (tree[i][x] >= value) {
      break;
    }
    if (i === tree.length - 1) {
      return true;
    }
  }

  return false;
}
