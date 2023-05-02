-- Create Customers table
CREATE TABLE Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    balance DECIMAL(10,2)
);

-- Create Transfers table
CREATE TABLE Transfers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    amount DECIMAL(10,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES Customers(id),
    FOREIGN KEY (receiver_id) REFERENCES Customers(id)
);

-- Insert dummy data for 10 customers
INSERT INTO Customers (name, email, balance)
VALUES ('John Doe', 'john.doe@example.com', 1000.00),
       ('Jane Smith', 'jane.smith@example.com', 5000.00),
       ('David Lee', 'david.lee@example.com', 2000.00),
       ('Sarah Johnson', 'sarah.johnson@example.com', 3000.00),
       ('Michael Brown', 'michael.brown@example.com', 4000.00),
       ('Emily Davis', 'emily.davis@example.com', 1500.00),
       ('Daniel Wilson', 'daniel.wilson@example.com', 2500.00),
       ('Jessica Jones', 'jessica.jones@example.com', 3500.00),
       ('Brian Taylor', 'brian.taylor@example.com', 4500.00),
       ('Laura Martinez', 'laura.martinez@example.com', 5000.00);
