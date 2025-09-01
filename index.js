function addToCart(productName, price, quantityInputId) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("請先登入才能加入購物車");
    window.location.href = "sign in.html";
    return;
  }

  const quantityInput = document.getElementById(quantityInputId);
  if (!quantityInput) {
    alert("找不到數量欄位");
    return;
  }

  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 1 || quantity > 9) {
    alert("請選擇有效的數量（1～9）");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name: productName, price, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} 已加入購物車（數量：${quantity}，價格：NT$${price}）`);
}
