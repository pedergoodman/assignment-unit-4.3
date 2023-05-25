console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    if (item) {
        basket.push(item);
        return true;    
    }
}

function empty(array) {
    array = []
}

function listItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
console.log(`Basket is ${basket}`);
console.log('\tTEST ONE');
// test if item was added, should return true, and add an item to the array
console.log(`Currently basket is: ${basket}`);
//
console.log('should return "true" and add and item to the array:', addItem('mushrooms'));
console.log('should contain "mushrooms":', basket);

console.log('--------------');
// console.log('should return "true":', addItem('item'));
// test if item was not added
console.log('should return "undefined" and not add an item to the array:', addItem());


console.log('--------------');

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);



console.log(listItems(basket));
















/*
// Previous attempts at addItem function

function addItem(item) {
    basket.push(item);
    return true;
}
// Didn't work, returned true no matter what and added an undefined 
// item into the array if the function parameter was empty.

function addItem(item) {
    basket.push(item);
    //check if Item was added
    for (let i of basket) {
        if (i === item) {
            return true;    
        }
        return false;
    }
}
// also didn't work, it returned true if it did find the added item in 
// the array, but it was still adding 'undefined' to the array, and 
// counting that as a 'false' add. 


*/
   








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}