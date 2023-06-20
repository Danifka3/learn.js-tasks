function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = () => { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);


  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5