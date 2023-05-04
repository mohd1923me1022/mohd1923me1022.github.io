// view all costumers
const customerTable = document.getElementById('customer-table');

// Function to fetch all customers from server
function fetchAllCustomers() {
  fetch('/api/customers')
    .then(response => response.json())
    .then(customers => {
      // Create HTML table rows for each customer
      const rows = customers.map(customer => {
        return `<tr>
                  <td>${customer.id}</td>
                  <td>${customer.name}</td>
                  <td>${customer.email}</td>
                  <td>$${customer.balance.toFixed(2)}</td>
                </tr>`;
      });
      // Append rows to the table body
      customerTable.innerHTML = rows.join('');
    })
    .catch(error => console.error(error));
}

// Call fetchAllCustomers function when page loads
window.addEventListener('load', fetchAllCustomers);
