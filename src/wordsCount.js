const R = require('ramda');

const text = `
'have no fear of this mess,'
said the cat in the hat.
and so...
'i always pick up all my playthings
i will show you another
good trick that i know!'

then we saw him pick up all the things that were down.
he picked up the cake,
and the rake, and the gown,
and the milk, and the strings,
and the books, and the dish,
and the fan, and the cup,
and the ship, and the fish.
and he put them away.
then he said, 'that is that.'
and then he was gone
with a tip of his hat.

then our mother came in
and she said to us two,
'did you have any fun?
tell me.  what did you do?'

and sally and i did not know
what to say.
should we tell her
the things that went on there that day?

should we tell her about it?
now, what SHOULD we do?
well...
what would YOU do
if your mother asked YOU?`

//console.clear();
//count words in a string with ramda's countBy invert

// var raceResultsByFirstName = {
//   first: 'alice',
//   second: 'jake',
//   third: 'alice',
// };
// const testResult = R.invert(raceResultsByFirstName);
// console.log(testResult);

const matchwords = R.match(/\w+/g);
const countwords = R.countBy(R.toLower);
const sortObjectProp = R.map(R.sortBy(R.identity));

//const result = countwords(matchwords(text));
const result = R.compose(sortObjectProp, R.invert, countwords, matchwords)(text);
console.log(result);
