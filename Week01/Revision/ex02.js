const paymentStatus = "PENDING";
// check the payment status and display the appropriate message.

//Method 1: Using if-else statements
if (paymentStatus === "APPROVED") {
    console.log("Pet-care service confirmed.");
} 

else if (paymentStatus === "PENDING") {
    console.log("Payment is being processed.");
}

else {
    console.log("Payment unsuccessful.");
} 

// Method 2: Using switch statement
switch (paymentStatus) {
    case "APPROVED":
        console.log("Pet-care service confirmed.");
        break;
    case "PENDING":
        console.log("Payment is being processed.");
        break;
    case "DECLINED":
        console.log("Payment unsuccessful.");
        break;
    default:
        console.log("Unknown payment status.");
}

