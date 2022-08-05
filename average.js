// 75.25, 65, 80, 35.45, 99.50
// Mathematics, Biology, Chemistry, Physics, and Bangla

var mathMarks = 75.25;
var biologyMarks = 65;
var chemistyMark = 80;
var physicsMark = 35.45;
var banglaMArk = 99.5;

var totalMarks =
  mathMarks + biologyMarks + chemistyMark + physicsMark + banglaMArk;
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
console.log(averageTwoDecimal);
