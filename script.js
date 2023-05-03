// Function to show the customer details for a selected customer
function showCustomerDetails() {
  const selectElement = document.querySelector("#customer");
  const selectedValue = selectElement.value;
  const customerDetailsSection = document.querySelector("#customer-details");
  const customerName = customerDetailsSection.querySelector("h3");
  const customerEmail = customerDetailsSection.querySelector("p:first-of-type");
  const customerBalance = customerDetailsSection.querySelector("p:last-of-type");
  customerName.textContent = selectedValue;
  customerEmail.textContent = "Email: " + selectedValue.replace("-", ".") + "@example.com";
  customerBalance.textContent = "Current Balance: $1000.00";
  customerDetailsSection.style.display = "block";
}

// Function to show the transfer form for a selected customer
function showTransferForm() {
  const selectElement = document.querySelector("#sender");
  const selectedValue = selectElement.value;
  const transferSection = document.querySelector("#transfer");
  const senderLabel = transferSection.querySelector("label[for=sender]");
  senderLabel.textContent = "Sender: " + selectedValue;
  transferSection.style.display = "block";
}

// Attach event listeners to the customer selection form and transfer form
const selectCustomerForm = document.querySelector("#select-customer form");
selectCustomerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showCustomerDetails();
});

const customerDetailsSection = document.querySelector("#customer-details");
const transferButton = customerDetailsSection.querySelector("button");
transferButton.addEventListener("click", function () {
  showTransferForm();
});

const transferForm = document.querySelector("#transfer form");
transferForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Transfer successful!");
});
