// Interactividad básica: menú, carrito, año actual
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  const cartCount = document.getElementById('cart-count');
  const yearEl = document.getElementById('year');

  // Menú móvil
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Carrito simple
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      let count = parseInt(cartCount.textContent || '0', 10);
      count += 1;
      cartCount.textContent = count;
      btn.textContent = '✓ Añadido';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Añadir al carrito';
        btn.disabled = false;
      }, 1400);
    });
  });

  // Año actual
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
