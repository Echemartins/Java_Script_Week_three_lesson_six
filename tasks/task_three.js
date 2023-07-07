// Create an object with multiple properties.
let martins = {
    bestFood: 'rice',
    hobby: 'football',
    maritalStatus: 'married',
};
// Use a loop (such as for...in) to iterate over the object properties.
for(const key in martins){
    console.log(key + ' : ' + martins[key])
};
// Perform an action on each property, such as logging its key and value to the console.
console.log(martins.bestFood)
