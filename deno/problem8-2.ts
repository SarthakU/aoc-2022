const results = await Deno.readTextFile("./inputs/8.txt");
const commands = results
  .split("\n")
  .slice(0, -1)
  .map((line) => line.split("").map((c) => parseInt(c)));

let y = 0;
let maxScore = 0;
for (let i = 0; i < commands.length; i++) {
  let x = 0;
  for (let j = 0; j < commands[i].length; j++) {
    // if (
    //   !(
    //     x === 0 ||
    //     y === 0 ||
    //     x === commands.length - 1 ||
    //     y === commands.length - 1
    //   )
    // ) {
    console.log(
      "x",
      x,
      "y",
      y,
      "value",
      commands[y][x],
      getScenicScore(x, y, commands)
    );
    // }
    maxScore = Math.max(maxScore, getScenicScore(x, y, commands));
    x++;
  }
  y++;
}

console.log(maxScore);

function getScenicScore(x, y, tree) {
  let totalScore = 0;
  let score = 0;
  const value = tree[y][x];

  // check up
  for (let i = y - 1; i >= 0; i--) {
    if (tree[i][x] >= value) {
      score++;
      break;
    }
    score++;
  }
  totalScore += score;
  score = 0;

  // check left
  for (let i = x - 1; i >= 0; i--) {
    if (tree[y][i] >= value) {
      score++;
      break;
    }
    score++;
  }
  totalScore = score === 0 ? totalScore : totalScore * score;
  score = 0;

  // check right
  for (let i = x + 1; i < tree[y].length; i++) {
    if (tree[y][i] >= value) {
      score++;
      break;
    }
    score++;
  }

  totalScore = score === 0 ? totalScore : totalScore * score;
  score = 0;

  // check down
  for (let i = y + 1; i < tree.length; i++) {
    if (tree[i][x] >= value) {
      score++;
      break;
    }
    score++;
  }

  totalScore = score === 0 ? totalScore : totalScore * score;

  return totalScore;
}
