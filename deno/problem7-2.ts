const results = await Deno.readTextFile("./inputs/7.txt");
const commands = results.split("\n");
interface File {
  name: string;
  size: number;
}

interface Dir {
  name: string;
  size: number;
  files: File[];
  dirs: Dir[];
}

const newDir = (d: Dir) => {
  return d;
};

const root = newDir({ name: "/", size: 0, files: [], dirs: [] });
let curr = root;
let prev: Dir[] = [];
// let pwd = root.name;

for (const command of commands) {
  if (command.slice(0, 7) === "$ cd ..") {
    curr = prev.pop() || root;
  } else if (command.slice(0, 6) === "$ cd /") {
    curr = root;
    prev = [];
  } else if (command.slice(0, 4) === "$ cd") {
    const dir = newDir({
      name: command.slice(5),
      size: 0,
      files: [],
      dirs: [],
    });
    curr.dirs.push(dir);
    prev.push(curr);
    curr = dir;
  } else if (command.slice(0, 4) === "$ ls") {
  } else if (command.slice(0, 3) === "dir") {
  } else {
    const [size, name] = command.split(" ");
    if (!size || !name) continue;
    curr.size += parseInt(size);
    curr.files = [...curr.files, { name, size: parseInt(size) }];
  }
}

const dirSums: number[] = [];

const getDirSum = (d: Dir) => {
  let sum = d.size || 0;
  for (const dir of d.dirs) {
    sum += getDirSum(dir).size;
  }
  dirSums.push(sum);
  d.size = sum;
  return d;
};

const foo = getDirSum(root);

const sorted = dirSums.sort((a, b) => a - b);

const free = 70000000 - foo.size;
const toFree = 30000000 - free;

let answer = 0;

for (const size of sorted) {
  if (size >= toFree && (size < answer || answer === 0)) {
    answer = size;
  }
}

console.log(answer);
