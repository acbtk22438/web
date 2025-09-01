const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  alert("請先登入才能查看購物車");
  window.location.href = "sign in.html";
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalAmountDisplay = document.getElementById("total-amount");
let total = 0;

if (cart.length === 0) {
  cartContainer.innerHTML = "<div class='empty-cart'>購物車是空的。</div>";
  totalAmountDisplay.style.display = "none";
  document.querySelector(".checkout-btn").style.display = "none";
} else {
  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
          <div class="product-image"></div>
          <div class="product-content">
            <h3>${item.name}</h3>
            <p>價格：NT$${item.price}</p>
            <p>數量：${item.quantity}</p>
            <p>小計：NT$${item.price * item.quantity}</p>
            <button onclick="removeItem(${index})">移除</button>
          </div>
        `;
    cartContainer.appendChild(card);
    total += item.price * item.quantity;
  });
  totalAmountDisplay.textContent = `總金額：NT$${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function checkout() {
  alert("感謝您的購買！訂單已成立。");
  localStorage.removeItem("cart");
  location.reload();
}
