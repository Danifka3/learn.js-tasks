let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalariesOptions(salaries){
  let sum = 0;
  for (let prop in salaries) {
    sum += salaries[prop];
  }
  return sum;
}

alert(sumSalariesOptions(salaries));