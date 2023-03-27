function addNums(a, b) {
  var c = a + b;
  console.log(c);
}

addNums(45, 3598);
// console.log(c);

const fact = function (n) {
  let f = 1;

  for (let i = 2; i <= n; i++) {
    f = f * i;
  }

  console.log(f);
};

fact(8);
fact(9);
fact(12);
fact(5);

const greet = (name, time) => {
  if (time > 4 && time < 12) {
    console.log("Good Morning " + name);
  } else if (time > 12 && time < 16) {
    console.log("Good Afternoon " + name);
  } else if (time > 16 && time < 20) {
    console.log("Good Evening " + name);
  } else {
    console.log("Good Night " + name);
  }
};

greet("Raju", 17);
greet("Pinki", 10);