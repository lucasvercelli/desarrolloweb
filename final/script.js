document.addEventListener("DOMContentLoaded", () => {
  const cart = [];
  const cartPanel = document.getElementById("cart-panel");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const cartCountElement = document.getElementById("cart-count");
  const closeCartButton = document.getElementById("close-cart");
  const clearCartButton = document.getElementById("clear-cart");
  const checkoutButton = document.getElementById("checkout-button");
  
  document.querySelector(".cart-icon-container").addEventListener("click", () => {
    cartPanel.classList.add("active");
  });
  
  document.getElementById("close-cart").addEventListener("click", () => {
    cartPanel.classList.remove("active");
  });
  
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button class="remove-item" data-index="${index}">X</button>
      `;
      cartItemsContainer.appendChild(li);
      total += item.price;
    });
  
    totalPriceElement.textContent = total.toFixed(2);
    cartCountElement.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productCard = button.parentElement;
      const name = productCard.querySelector("h3").textContent;
      const price = parseFloat(
        productCard.querySelector(".price").textContent.replace("$", "")
      );
  
      cart.push({ name, price });
      updateCart();
    });
  });
  
  document.getElementById("clear-cart").addEventListener("click", () => {
    cart.length = 0;
    updateCart();
  });
  
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      updateCart();
    }
  });
  
  checkoutButton.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
  
  let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  setInterval(showNextSlide, 4000);
  
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("active");
  });
  
  document.addEventListener("click", (e) => {
    if (!dropdownToggle.parentElement.contains(e.target)) {
      dropdownMenu.classList.remove("active");
    }
  });
});
