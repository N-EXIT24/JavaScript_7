let cart = receipt()
let text = "Вы заказали"
let delivery = 9000

for(let key in cart){
    text += ` ${key} ${cart[key].info},`
    delivery += cart[key].price
}

console.log(`${text} | Общая стоимость ${delivery} сумм `);
