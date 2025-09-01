function addToCart(productName) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("請先登入才能加入購物車");
    window.location.href = "sign in.html";
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} 已加入購物車`);
}
