const cartItemsContainer = document.getElementById("cartItems");
const totalPriceDisplay = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const price = 100;
    const subtotal = price * item.quantity;
    total += subtotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
          <span>${item.name}</span>
          <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)" />
          <span>$${subtotal}</span>
          <button onclick="removeItem(${index})">刪除</button>
        `;
    cartItemsContainer.appendChild(itemDiv);
  });

  totalPriceDisplay.textContent = `總金額：$${total}`;
}

function updateQuantity(index, newQty) {
  cart[index].quantity = parseInt(newQty);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("結帳成功!");
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();
