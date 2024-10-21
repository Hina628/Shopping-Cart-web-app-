
var price_1 = parseFloat(prompt("Enter the price of item 1: ", "650"));
var quantity_Item_1 = parseInt(prompt("Enter the quantity of item 1: ", "3"));
var price_2 = parseFloat(prompt("Enter the price of item 2: ", "100"));
var quantity_Item_2 = parseInt(prompt("Enter the quantity of item 2: ", "7"));
var shipping_Charges = parseFloat(prompt("Enter shipping charges: ", "100"));


var total_Cost = (price_1 * quantity_Item_1) + (price_2 * quantity_Item_2) + shipping_Charges;


document.getElementById("cart-details").innerHTML = `
    <p>Price of item 1: <span class="highlight">${price_1}</span></p>
    <p>Quantity of item 1: <span class="highlight">${quantity_Item_1}</span></p>
    <p>Price of item 2: <span class="highlight">${price_2}</span></p>
    <p>Quantity of item 2: <span class="highlight">${quantity_Item_2}</span></p>
    <p>Shipping Charges: <span class="highlight">${shipping_Charges}</span></p>
    <p>Total cost of your order is: <span class="highlight">${total_Cost}</span></p>
`;
