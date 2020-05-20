function outer() {
  let hero = 'Black Panther';

  function inner() {
    return hero;
  }
  return inner();
}

const exe = outer();
console.log(exe);
