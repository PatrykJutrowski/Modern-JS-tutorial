const meJSON = `{
    "name": "JOHN",
    "age": 20,
    "graduated": true,
    "favoriteColors":["blue", "green"]
}
`;

const me = JSON.parse(meJSON);

console.log(me);


const json = JSON.stringify({
    answer: { toJSON: () => 42 }
});

console.log(json); // {"answer":42}