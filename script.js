let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    // Adiciona produto ao carrinho
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    // Atualiza o número de itens no carrinho
    document.getElementById('cartCount').textContent = cart.length;

    // Atualiza o carrinho modal
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Limpa a lista de itens

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.productName} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Atualiza o total
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function openCart() {
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
    closeCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Carrinho vazio! Adicione produtos antes de finalizar.");
    } else {
        alert(`Compra finalizada! Total: R$ ${totalPrice.toFixed(2)}`);
        clearCart();
    }
}

// Conectar botão de carrinho
document.getElementById('cartButton').addEventListener('click', openCart);
