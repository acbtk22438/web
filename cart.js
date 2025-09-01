const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  alert("請先登入才能查看購物車");
  window.location.href = "sign in.html";
}

const cartContainer = document.getElementById("cart-items");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>購物車是空的。</p>";
} else {
  cart.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
          <div class="product-image" style="background-image: url('images/product1.jpg');"></div>
          <div class="product-content">
            <h3>${item.name}</h3>
            <p>數量：${item.quantity}</p>
            <button onclick="removeItem('${item.name}')">移除</button>
          </div>
        `;
    cartContainer.appendChild(card);
  });
}

function removeItem(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.name !== name);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
