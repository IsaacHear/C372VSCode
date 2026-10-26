const payments = [
    {petname: 'Chester', amount: 50, status: 'APPROVED'},
    {petname: 'Mochi', amount: 80, status: 'PENDING'},
    {petname: 'Mira', amount: 40, status: 'DECLINED'}
];
// code to display mochi's payment status
const mochiPayment = payments.find(payment => payment.petname === 'Mochi');

// Method 1: Using if-else statements
if (mochiPayment.status === "APPROVED") {
    console.log("Mochi's payment is approved.");
}

// Method 2: Using switch statement
switch (mochiPayment.status) {
    case "APPROVED":
        console.log("Mochi's payment is approved.");
        break;
    case "PENDING":
        console.log("Mochi's payment is pending.");
        break;
    case "DECLINED":
        console.log("Mochi's payment is declined.");
        break;
    default:
        console.log("Unknown payment status for Mochi.");
}

// loop to display the payment details for each pet
for (const payment of payments) {
    console.log(`Pet Name: ${payment.petname}, Amount: $${payment.amount}, Status: ${payment.status}`);
}
