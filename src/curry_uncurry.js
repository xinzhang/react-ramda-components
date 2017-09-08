const R = require('ramda');

const multiple = (x,y) => x *y;
console.log(multiple(2,5));

const curriedMultiple = R.curry(multiple);
console.log(curriedMultiple(2)(5));
console.log(curriedMultiple(2,5));

// -----------------------------------------

const add = x => y => x + y;
console.log(add(3)(4));

const uncurryAdd = R.uncurryN(2,add);
console.log(uncurryAdd(3, 4));
console.log(uncurryAdd(3)(4));

//----------------------------
