console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    // treat falsy item input as invalid
    if (!isFull() && item) {
        basket.push(item);
        console.log(`${item} was added to your cart.`);
        return true; // if basket is not full
    } 
    console.log('Your basket is full');
    return false; // if item is full
}

function empty() {
    basket = []
}

function isFull() {
    if (basket.length < maxItems){
        return false;
    } else {
        return true;
    }
}

function listItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}




console.log('\tTEST ONE: Adding item to basket');
// test if item was added, should return true, and add an item to the array
console.log('Currently basket is:', basket);
console.log('should return "true" after adding item to array:', addItem('mushrooms'));
console.log('basket should contain "mushrooms":', basket);

console.log('\tTEST TWO: addItem parameter is empty');
// test if item was not added
console.log('should return "false" and not add an item to the array.\naddItem returns:', addItem());
console.log('array should be the same as before:', basket);


console.log('\tTEST THREE: checking isFull function');

console.log('basket is currently:', basket);


console.log('adding another item, should return true:', addItem('spinach'));
console.log('adding another item, should return true:', addItem('peppers'));
console.log('adding another item, should return true:', addItem('onion'));
console.log('adding another item, should return true:', addItem('eggs')); 
// all these items above should be added to the cart and return true.

console.log('test - basket length should be 5:', basket.length);
console.log('basket is currently:', basket);

// adding another item should give a cart full message and return false
console.log('adding another item, should return false:', addItem('milk')); 


empty() // resets basket 

console.log('basket should now be empty:',basket);

console.log('--------------');













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