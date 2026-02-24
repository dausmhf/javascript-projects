const cartCount = document.getElementById("cart-count");
const btn = document.getElementById("btn");

let count = 0;

btn.addEventListener("click", () => {
  count++;
  cartCount.textContent = count;
});