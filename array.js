let myarr = [ 'apple', 35476, 46.45, false, Math ];

// console.log(myarr);

let movies = [ 'Pathaan', 'KGF', 'Farzi', 'Zero', 'Vedha', 'Fan' ];

console.log( movies[3] );

console.log(movies.length);

// console.log( movies[movies.length-2] );

console.log( movies.at(2) );

console.log( movies.slice( 1, 4 ) );

console.log( movies.slice(2) );
console.log( movies.slice(2, 50) );

// adding elements
movies.push('Flashpoint');  //adds element to end

console.log(movies);

movies.unshift('Antman');  //adds element to start

console.log(movies);

console.log( ['batman' , ...movies, 'inception'] );
// movies = ['batman' , ...movies, 'inception'];
console.log([...movies.slice(0, 4), 'Jersey', ...movies.slice(5) ]);

console.log(movies);

// removing elements

movies.pop() // removes the last element

console.log(movies);

movies.shift() // removes the first element

console.log(movies);

movies.splice(3, 2);

console.log(movies);