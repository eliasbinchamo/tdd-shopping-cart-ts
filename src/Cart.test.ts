import Cart from './Cart';

describe('Cart', () => {
    test('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
    })
});
// Given I have an empty cart, when I add an Item, 
// then I expect the price to reflect the sum of all the Items in my cart.
describe('Cart', () => {
    test('should add items to the cart', () => {
        const cart = new Cart();
        cart.addItem("Soda",12);

        expect(cart.items).toEqual([{"itemName": "Soda", "itemPrice": 12}]);
        expect(cart.totalPrice).toEqual(12);
    })
});























// describe('Add Item', () => {
//     test('Should add an Item to the cart', () => {
//         const cart2 = new Cart();
//         cart2.addItem("Milk", 32);
//         expect(cart2.items).toEqual(["Milk"]);
//         expect(cart2.totalPrice).toEqual(32);
//     })
// });

// describe('List Items', () => {
//     test('Should list Items in the cart with prices', () => {
//         const cart2 = new Cart();
//         cart2.addItem("Milk", 32);
//         cart2.addItem("Water", 32);
//         expect(cart2.items).toEqual(["Milk","Water"]);
//         expect(cart2.totalPrice).toEqual(128);
//         cart2.printList();
//     })
// });

