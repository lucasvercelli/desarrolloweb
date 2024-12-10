document.addEventListener("DOMContentLoaded", () => {
    const checkoutCartItems = document.getElementById("checkout-cart-items");
    const checkoutTotalPrice = document.getElementById("checkout-total-price");
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      checkoutCartItems.appendChild(li);
      total += item.price;
    });
  
    checkoutTotalPrice.textContent = total.toFixed(2);
  });
  