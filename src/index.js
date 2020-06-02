// console.log(process.argv);
const playerAction = process.argv[process.argv.length - 1];

// console.log(argv);

const num = Math.random() * 3;
if (num < 1) {
  var computerAction = "rock";
} else if (num > 2) {
  var computerAction = "scissor";
} else {
  var computerAction = "paper";
}

if (playerAction == computerAction) {
  console.log("平局");
} else if (
  (playerAction == "paper" && computerAction == "rock") ||
  (playerAction == "scissor" && computerAction == "paper") ||
  (playerAction == "rock" && computerAction == "scissor")
) {
  console.log("你赢了");
} else {
  console.log("你输了");
}
