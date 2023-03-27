age = 18;

if(age >= 18){
    console.log('you are eligible for DL');
    console.log('you can apply online');

    myvar = "this should be global";
    var x = "function scoped";
    let y = "block scoped";
    pi = 5.32;
}else{
    console.log('Not eligible for DL');
}

console.log(myvar);
console.log(x);
// console.log(y);


num = 45;
console.log( num%2==0 ? 'even' : 'odd' );

// WAP to check if a number is perfect square
// n = 37;
// root = n**(0.5);

// console.log(root);
// if( root == parseInt(root) ){
//     console.log('perfect square');
    
// }else{
//     console.log('not a perfect square');
// }