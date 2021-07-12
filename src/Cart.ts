export default class Cart {
    items: Array<Object> = [];
    totalPrice: number = 0;
    itemMap: Map<string,number> = new Map;

    addItem(itemName: string, itemPrice: number) {
        try {
            let dictionary = {
                "itemName": itemName,
                "itemPrice": itemPrice
            }
            this.items.push(dictionary);
            this.totalPrice+= itemPrice;
        } catch (error) {
            throw new Error(error);
        }
    }





    // items: Array<string> = [];
    // totalPrice = 0;
    // itemsWithPrices: Map<string,number>=new Map;
    // itemList: Array<string> = [];
    // addItem(itemName: string, itemPrice:number) {
    //     this.items.push(itemName);
    //     this.totalPrice+=itemPrice;
    //     this.itemsWithPrices.set(itemName,itemPrice);
    // }

    // printList(){
    //     this.itemsWithPrices.forEach((price, item)=> {
    //         this.itemList.push("[item:"+item+", Price:"+price+"]")
    //     });
    // }
    
}
