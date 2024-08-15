let carrito = [];

function agregarAlCarrito(idProducto) {
    // Simulación de agregar un producto al carrito
    const producto = { id: idProducto, nombre: 'Balón de fútbol', precio: 25.99, cantidad: 1 };
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const itemsCarrito = document.getElementById('items-carrito');
    itemsCarrito.innerHTML = '';
    carrito.forEach(item => {
        itemsCarrito.innerHTML += `
            <p>${item.nombre} - $${item.precio} x ${item.cantidad}</p>
        `;
    });
}

function finalizarCompra() {
    alert('Compra finalizada');
    carrito = [];
    mostrarCarrito();
}
