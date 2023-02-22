let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(schedule) {
  for (let prop in schedule){
    return  false;
  }
  return true;

}