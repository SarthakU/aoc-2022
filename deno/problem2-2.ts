const file = await Deno.readTextFile("./inputs/2.txt");
const lines = file.split("\n");

// x, a --> rock
// y, b --> paper
// z, c --> scissor
const chosewinner = (p1: string, p2: string) => {
  switch (p2) {
    case "X":
      return 0;
    case "Y":
      return 3;
    case "Z":
      return 6;
  }
};

const getvalue = (p1: string, p2: string) => {
  if (p1 === "A") {
    if (p2 === "X") {
      return 3;
    } else if (p2 === "Y") {
      return 1;
    } else if (p2 === "Z") {
      return 2;
    }
  } else if (p1 === "B") {
    if (p2 === "X") {
      return 1;
    } else if (p2 === "Y") {
      return 2;
    } else if (p2 === "Z") {
      return 3;
    }
  } else if (p1 === "C") {
    if (p2 === "X") {
      return 2;
    } else if (p2 === "Y") {
      return 3;
    } else if (p2 === "Z") {
      return 1;
    }
  }
};

let sum = 0;
for (const line of lines) {
  const [p1, p2] = line.split(" ");
  const winner = chosewinner(p1, p2);
  const p1value = getvalue(p1, p2);
  // @ts-ignore guarenteed to be a number as per input
  const tempsum = winner + p1value;
  sum += tempsum || 0;
}

console.log(sum);
