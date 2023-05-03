// Get the table body element
const tableBody = document.querySelector('#customer-table tbody');

// Fetch the customer data from the server
fetch('http://localhost:8080/customers')
  .then(response => response.json())
  .then(customers => {
    // Loop through each customer and add a table row with their data
    customers.forEach(customer => {
      const row = tableBody.insertRow();

      const nameCell = row.insertCell();
      nameCell.textContent = customer.name;

      const emailCell = row.insertCell();
      emailCell.textContent = customer.email;

      const balanceCell = row.insertCell();
      balanceCell.textContent = customer.balance;

      const viewCell = row.insertCell();
      const viewLink = document.createElement('a');
      viewLink.textContent = 'View';
      viewLink.href = `customer.html?id=${customer.id}`;
      viewCell.appendChild(viewLink);
    });
  })
  .catch(error => {
    console.error('Error fetching customers:', error);
  });
