const viewCustomersBtn = document.getElementById('view-customers-btn');
const customersContainer = document.getElementById('customers-container');

viewCustomersBtn.addEventListener('click', () => {
  fetch('get-customers.php')
    .then(response => response.json())
    .then(customers => {
      let customersHtml = '';
      customers.forEach(customer => {
        customersHtml += `
          <div class="customer">
            <h3>${customer.name}</h3>
            <p>Email: ${customer.email}</p>
            <p>Current Balance: ${customer.balance}</p>
          </div>
        `;
      });
      customersContainer.innerHTML = customersHtml;
      customersContainer.style.display = 'block';
    })
    .catch(error => {
      console.log(error);
    });
});
