// Get the sender customer ID from localStorage
const senderCustomerId = localStorage.getItem("selectedCustomerId");

// Get the list of all customers from the server
fetch("https://api.example.com/customers")
  .then(response => response.json())
  .then(customers =>
// Find the sender customer in the list
const senderCustomer = customers.find(customer => customer.id === parseInt(senderCustomerId));

// Display the sender customer's details
const senderNameElement = document.getElementById("sender-name");
senderNameElement.textContent = senderCustomer.name;

const senderEmailElement = document.getElementById("sender-email");
senderEmailElement.textContent = senderCustomer.email;

const senderBalanceElement = document.getElementById("sender-balance");
senderBalanceElement.textContent = "$" + senderCustomer.balance.toFixed(2);

// Populate the list of recipient customers
const recipientListElement = document.getElementById("recipient-list");
customers.forEach(customer => {
// Don't include the sender customer in the recipient list
if (customer.id !== parseInt(senderCustomerId)) {
const listItemElement = document.createElement("li");
const linkElement = document.createElement("a");
linkElement.href = "javascript:void(0)";
linkElement.textContent = customer.name;
linkElement.onclick = () => {
// Store the selected recipient customer ID in localStorage
localStorage.setItem("recipientCustomerId", customer.id);
window.location.href = "transfer_confirm.html";
};
listItemElement.appendChild(linkElement);
recipientListElement.appendChild(listItemElement);
}
});
})
.catch(error => {
console.error("Error fetching customers:", error);
});

// Handle the form submission
const transferForm = document.getElementById("transfer-form");
transferForm.addEventListener("submit", event => {
event.preventDefault();

// Get the selected recipient customer ID from localStorage
const recipientCustomerId = localStorage.getItem("recipientCustomerId");

// Get the transfer amount from the form
const amountInput = document.getElementById("transfer-amount");
const amount = parseFloat(amountInput.value);

// Make the transfer
fetch("https://api.example.com/transfer", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
sender_id: parseInt(senderCustomerId),
recipient_id: parseInt(recipientCustomerId),
amount: amount
})
})
.then(response => response.json())
.then(result => {
// Clear the selected recipient customer ID from localStorage
localStorage.removeItem("recipientCustomerId");
  // Navigate to the transfer success page
window.location.href = "transfer_success.html";})
.catch(error => {
console.error("Error making transfer:", error);
});
});
