let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
  for (let prop in menu){
    if (typeof menu[prop] === 'number') {
      menu[prop] *= 2;
    }
  }
}

alert(menu.width);
alert(menu.height);