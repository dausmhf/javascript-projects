const cartCount = document.getElementById("cart-count");
const btn = document.getElementById("btn");

let count = 0;

btn.addEventListener("click", () => {
  if (count < 99) {
     count++;
     cartCount.textContent = count;
  }
  else {
    cartCount.textContent = "99+";
  }
   
});