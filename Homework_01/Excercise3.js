const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200

}
function applyCoupon(item){
    return function(discount){
        item.price = item.price - (discount * item.price / 100);
        return item.price;
    }
}
console.log(applyCoupon(item)(10)=== 180);
