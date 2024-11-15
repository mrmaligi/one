// Function to send SMS using phone's native SMS app
const sendSMS = (phoneNumber, message) => {
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
};

// Retrieve the GSM module number from local storage
const gsmPhoneNumber = localStorage.getItem("gsmPhoneNumber") || "Not Set";
document.getElementById("gsmPhoneNumber").innerText = gsmPhoneNumber;

// Buttons for relay control
document.getElementById("turnOnButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, "1234GON##"));
document.getElementById("holdOpenButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, "1234GOT999#"));
document.getElementById("turnOffButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, "1234GOFF##"));
