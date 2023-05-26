console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (!isFull()) {
        basket.push(item);
        console.log('item added to basket:', item);
        return true;
    } else {
        console.log('cart is full, item not added to basket:');
        return false;    
    }
}

function empty(array) {
    array = []
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




console.log('\tTEST ONE');
// test if item was added, should return true, and add an item to the array
console.log('Currently basket is:', basket);
console.log('should return "true" and add and item to the array:', addItem('mushrooms'));
console.log('should contain "mushrooms":', basket);

console.log('\tTEST TWO');
// console.log('should return "true":', addItem('item'));
// test if item was not added
console.log('should return "undefined" and not add an item to the array:', addItem());
console.log('array should be the same as before:', basket);

console.log('--------------');
console.log('\tTEST THREE');
// random array tests
arrayTestOne = [1,2,3,4]
arrayTestTwo = [1,2,3,4,5]
arrayTestThree = [1,2,3,4,5,6]

console.log(arrayTestOne);
console.log('Should be not full, returns false:', isFull(arrayTestOne));
console.log(arrayTestTwo);
console.log('Should be full, returns true:', isFull(arrayTestTwo));
console.log(arrayTestThree);
console.log('Should be full, returns true:', isFull(arrayTestThree));

//tests with basket array
console.log('basket is:', basket, '\nshould return false:', isFull(basket));

//fill basket
console.log('Test filled basket');
basket = ['item1', 2, 3, 4, 5, 6];
console.log('filled basket, it now has', basket.length, 'items');
console.log('basket is:', basket, '\nshould return false:', isFull(basket));

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