const file = await Deno.readTextFile("./inputs/2.txt");
const lines = file.split("\n");

// x, a --> rock
// y, b --> paper
// z, c --> scissor
const chosewinner = (p1: string, p2: string) => {
  if (p1 === "a") {
    if (p2 === "x") {
      return 3;
    } else if (p2 === "y") {
      return 6;
    } else if (p2 === "z") {
      return 0;
    }
  } else if (p1 === "b") {
    if (p2 === "x") {
      return 0;
    } else if (p2 === "y") {
      return 3;
    } else if (p2 === "z") {
      return 6;
    }
  } else if (p1 === "c") {
    if (p2 === "x") {
      return 6;
    } else if (p2 === "y") {
      return 0;
    } else if (p2 === "z") {
      return 3;
    }
  }
};

const getvalue = (p: string) => {
  switch (p) {
    case "x":
      return 1;
    case "y":
      return 2;
    case "z":
      return 3;
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
  }
};

let sum = 0;
for (const line of lines) {
  const [p1, p2] = line.split(" ");
  const winner = chosewinner(p1, p2);
  const p1value = getvalue(p2);
  if (!p1value || !winner) {
    throw new Error("invalid input");
  }
  const tempsum = winner + p1value;
  sum += tempsum || 0;
}

console.log(sum);
