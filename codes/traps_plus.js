console.log(   1 + 2   ); // 3
console.log( "3" + "4" ); // "34"
// 2
console.log(   1 + "3" );
console.log( "3" + 1   );
// 3
console.log( 1 + null      );
console.log( 1 + undefined );
console.log( 1 + NaN       );
// 4
console.log( "3" + null      );
console.log( "3" + undefined );
console.log( "3" + NaN       );
// 5
console.log( 1 + {} );
console.log( 1 + [] );
// 6
console.log( "3" + {} );
console.log( "3" + [] );