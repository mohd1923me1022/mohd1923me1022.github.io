// Get all the customer name links
const customerLinks = document.querySelectorAll(".customer-link");

// Add a click event listener to each link
customerLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the customer ID from the link's href attribute
    const customerId = this.getAttribute("href").substr(1);

    // Set the customer ID in localStorage
    localStorage.setItem("selectedCustomerId", customerId);

    // Redirect to the customer page
    window.location.href = "customer.html";
  });
});
