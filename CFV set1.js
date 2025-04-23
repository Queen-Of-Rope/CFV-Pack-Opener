const Common = [
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "C11",
  "C12",
  "C13",
  "C14",
  "C15",
];
const Rare = [
  "R1",
  "R2",
  "R3",
  "R4",
  "R5",
  "R6",
  "R7",
  "R8",
  "R9",
  "R10",
  "R11",
  "R12",
  "R13",
  "R14",
  "R15",
];
const RR = [
  "RR1",
  "RR2",
  "RR3",
  "RR4",
  "RR5",
  "RR6",
  "RR7",
  "RR8",
  "RR9",
  "RR10",
  "RR11",
  "RR12",
  "RR13",
  "RR14",
  "RR15",
];
const RRR = [
  "RRR1",
  "RR2",
  "RRR3",
  "RRR4",
  "RRR5",
  "RRR6",
  "RRR7",
  "RRR8",
  "RRR9",
  "RRR10",
  "RRR11",
  "RRR12",
  "RRR13",
  "RRR14",
  "RRR15",
];
const SP = [
  "SP1",
  "SP2",
  "SP3",
  "SP4",
  "SP5",
  "SP6",
  "SP7",
  "SP8",
  "SP9",
  "SP10",
  "SP11",
  "SP12",
  "SP13",
  "SP14",
  "SP15",
];

let Wild = [];

let cardPool = [];

let cardLoop = {};

function d100() {
  return Math.trunc(Math.random() * 100) + 1;
}

function setWild() {
  let d100A = d100();
  //console.log(d100A);

  if (d100A >= 0 && d100A <= 10) {
    // console.log("RRR");
    //return pullRRR();
    return (Wild = RRR.slice());
  } else if (d100A >= 11 && d100A <= 27) {
    //console.log("RR");
    //return pullRR();
    return (Wild = RR.slice());
  } else if (d100A == 100) {
    //console.log("SP");
    //return pullSP();
    return (Wild = SP.slice());
  } else if (d100A >= 28 && d100A <= 48) {
    //console.log("Rare");
    //return pullRare();
    return (Wild = Rare.slice());
  } else if (d100A >= 49 && d100A <= 99) {
    //console.log("Common");
    return (Wild = Common.slice());
    //return pullCommon();
  } else {
    //console.log("bug :3");
  }
}

function pullCommon() {
  return Math.floor(Math.random() * Common.length);
}

function pullRare() {
  return Math.floor(Math.random() * Rare.length);
}

function pullRR() {
  return Math.floor(Math.random() * RR.length);
}

function pullRRR() {
  return Math.floor(Math.random() * RRR.length);
}

function pullSP() {
  return Math.floor(Math.random() * SP.length);
}

function pullWild() {
  return Math.floor(Math.random() * Wild.length);
}

function OpenPack() {
  setWild();
  let card1 = pullCommon();
  let card2 = pullCommon();
  let card3 = pullCommon();
  let card4 = pullRare();
  let card5 = pullWild();

  cardPool.push(Common[card1]);
  cardPool.push(Common[card2]);
  cardPool.push(Common[card3]);
  cardPool.push(Rare[card4]);
  cardPool.push(Wild[card5]);

  //console.log(
  //  `Common 1: ${Common[card1]}, Common 2: ${Common[card2]}, Common 3: ${Common[card3]}, Rare: ${Rare[card4]}, Wild :${Wild[card5]},`
  //);
}

function showList() {
  //console.log(cardPool);

  cardPool.forEach((ele) => {
    cardLoop[ele] = (cardLoop[ele] || 0) + 1;
  });
  console.log(cardLoop);
}

function BulkOpen(Xpacks) {
  for (let step = 0; step < Xpacks; step++) {
    OpenPack();
  }
  showList();
}

const numberInput = document.getElementById("Packs");
let PackNumber = numberInput.value;

numberInput.addEventListener("change", (event) => {
  PackNumber = event.target.value;
  console.log(PackNumber);
});

function RipPacks() {
  BulkOpen(PackNumber);
  document.getElementById("pulls").innerHTML =
    "Open console for card list sorry";
}
// so then make a function that rolls a random card add its to a list do this X times and after that make it to big list with numbers for each card
// making it ez to see how many of each card u have
