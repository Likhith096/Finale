// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded',ready);
// }
// else{
//     ready();
// }

// //Making Ready Function
// function ready(){
//     var removeCartButton = document.getElementsByClassName('fa-shopping-cart');
//     for(var i = 0; i< removeCartButton.length ; i++)
//     {
//         var button = removeCartButton[i];
//         button.addEventListener('click',removeCartItem);
//     }
// }

// //Remove Cart Item Function
// function removeCartItem(event){
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
// }

function addToCart() {
    // Retrieve the product information from the "pro" div
    const productName = document.querySelector(".pro .description h5").innerText;
    const price = document.querySelector(".pro .description h4").innerText;

    // Create an object to store the item details
    const item = {
        name: productName,
        price: price,
    };

    // Retrieve the existing cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the new item to the cart
    cartItems.push(item);

    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Retrieve the cart items from local storage and display them
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartList = document.getElementById("cartItems");

cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    cartList.appendChild(li);
});