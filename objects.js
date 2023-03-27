const userData = { 
    name : 'Raju', 
    email : 'raju@mail.com', 
    password : '6436',
    'phone-no' : '8763654884'
};

console.log( userData.name );

console.log( userData['password'] );

console.log(userData['phone-no']);

userData.address = 'Lucknow';

console.log(userData);

userData.password = '@raju111';
console.log(userData);

const smartphone = {
    brand: 'Samsung',
    model : 's22',
    price : 62400,
    color : 'black'
}

console.log(smartphone);
// change the price
smartphone.price = 70000;
console.log(smartphone);

smartphone.color = ['black', 'blue', 'white'];
console.log(smartphone);

console.log(smartphone.color[1]);
smartphone.color[1] = 'rose gold';
console.log(smartphone);

