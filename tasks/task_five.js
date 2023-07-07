// Create multiple objects with different properties.
const arsenal = { 
    aplayer1: 'xhaka',
    aplayer2: 'pepe',
    aplayer3: 'jesus',
};
const chelsea = {
    cplayer1: 'mason',
    cplayer2: 'jorginho',
    cplayer3: 'mudric', 
};
// Use the Object.assign() method to merge the objects into a single object.
const arsChel = Object.assign({}, arsenal, chelsea);
// Log the merged object to the console.
console.log(arsChel)