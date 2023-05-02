
```javascript
// Customers data
const customers = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        balance: 1000
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        balance: 500
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        balance: 2000
    },
    {
        id: 4,
        name: 'Alice Williams',
        email: 'alice.williams@example.com',
        balance: 1500
    },
    {
        id: 5,
        name: 'Mike Brown',
        email: 'mike.brown@example.com',
        balance: 3000
    },
    {
        id: 6,
        name: 'Karen Davis',
        email: 'karen.davis@example.com',
        balance: 2500
    },
    {
        id: 7,
        name: 'David Wilson',
        email: 'david.wilson@example.com',
        balance: 4000
    },
    {
        id: 8,
        name: 'Sarah Thompson',
        email: 'sarah.thompson@example.com',
        balance: 3500
    },
    {
        id: 9,
        name: 'Tom Lee',
        email: 'tom.lee@example.com',
        balance: 1800
    },
    {
        id: 10,
        name: 'Amy Garcia',
        email: 'amy.garcia@example.com',
        balance: 2200
    }
];

// Populate customer list
const customerList = document.getElementById('customerList');

customers.forEach(customer => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${customer.id}</td>
        <td>${
customer.name}</td>
<td>${customer.email}</td>
<td>$${customer.balance.toFixed(2)}</td>
<td><a href="#" onclick="viewCustomer(${customer.id})">View</a></td>
`;
customerList.appendChild(row);
});

// View customer function
function viewCustomer(id) {
// Get selected customer
const customer = customers.find(customer => customer.id === id);
// Populate customer info
const customerName = document.getElementById('customerName');
const customerEmail = document.getElementById('customerEmail');
const customerBalance = document.getElementById('customerBalance');

customerName.textContent = customer.name;
customerEmail.textContent = customer.email;
customerBalance.textContent = `$${customer.balance.toFixed(2)}`;

// Set selected customer id
const transferFrom = document.getElementById('transferFrom');
transferFrom.value = customer.id;

// Populate customer list for transfer
const transferTo = document.getElementById('transferTo');

// Clear previous options
transferTo.innerHTML = '';

// Add all customers except the selected one
customers.forEach(c => {
    if (c.id !== customer.id) {
        const option = document.createElement('option');
        option.value = c.id;
        option.textContent = c.name;
        transferTo.appendChild(option);
    }
});

// Show transfer form
document.getElementById('transferForm').style.display = 'block';
}

// Handle transfer form submission
const transferForm = document.getElementById('transferForm');

transferForm.addEventListener('submit', e => {
e.preventDefault();
// Get form values
const transferFrom = parseInt(document.getElementById('transferFrom').value);
const transferTo = parseInt(document.getElementById('transferTo').value);
const transferAmount = parseFloat(document.getElementById('transferAmount').value);

// Get selected customers
const sender = customers.find(customer => customer.id === transferFrom);
const receiver = customers.find(customer => customer.id === transferTo);

// Check if sender has sufficient balance
if (sender.balance < transferAmount) {
alert('Insufficient balance!');
return;
}
// Update balances
sender.balance -= transferAmount;
receiver.balance += transferAmount;

// Add transaction record
const transaction = {
    sender: sender.name,
    receiver: receiver.name,
    amount: transferAmount,
    date: new Date().toLocaleString()
};

transactions.unshift(transaction);

// Refresh customer and transaction lists
showCustomers(customers);
showTransactions(transactions);

// Hide transfer form
document.getElementById('transferForm').style.display = 'none';

// Show transaction confirmation
const confirmationMessage = `Transfer of $${transferAmount.toFixed(2)} from ${sender.name} to ${receiver.name} successful!`;
alert(confirmationMessage);
});

// Show transaction history
function showTransactions(transactions) {
const transactionList = document.getElementById('transactionList');
transactionList.innerHTML = '';
transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${transaction.sender}</td>
        <td>${transaction.receiver}</td>
        <td>$${transaction.amount.toFixed(2)}</td>
        <td>${transaction.date}</td>
    `;
    transactionList.appendChild(row);
});
}

// Initialize customer and transaction lists
showCustomers(customers);
showTransactions(transactions);
</script>
    </body>
</html>