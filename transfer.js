// Get the selected customer ID from localStorage
const selectedCustomerId = localStorage.getItem("selectedCustomerId");

// Get the customer data from the server
fetch(`https://api.example.com/customers/${selectedCustomerId}`)
  .then(response => response.json())
  .then(customer => {
    // Display the customer data on the page
    const customerNameElement = document.querySelector("#customer-name");
    const customerEmailElement = document.querySelector("#customer-email");
    const customerBalanceElement = document.querySelector("#customer-balance");

    customerNameElement.textContent = customer.name;
    customerEmailElement.textContent = customer.email;
    customerBalanceElement.textContent = `$${customer.balance.toFixed(2)}`;
  });

// Add a click event listener to the "Transfer Money" button
const transferButton = document.querySelector("#transfer-button");
transferButton.addEventListener("click", function(event) {
  // Prevent the default button behavior
  event.preventDefault();

  // Redirect to the transfer page
  window.location.href = "transfer.html";
});
