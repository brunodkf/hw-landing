export function setupModalLogic() {
  const modal = document.getElementById('purchaseModal');
  if (!modal) return;

  modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const product = button.getAttribute('data-product');
    document.getElementById('product').value = product;
  });

  const form = document.getElementById('purchaseForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const product = document.getElementById('product').value.trim();

    if (name && email && phone && product) {
      const params = new URLSearchParams({ name, email, phone, product });
      window.location.href = `thankyou.html?${params.toString()}`;
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  });
}
