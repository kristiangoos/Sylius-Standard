// Check if selected quantity is 70

const matchVal = 70;
const quantity = document.getElementById('sylius_add_to_cart_cartItem_quantity');

if (quantity) {
  quantity.addEventListener('change', (e) => {
    (matchVal === parseInt(e.target.value, 10)) ? alert(`${e.target.value} is great choice`) : null;
  });
}
