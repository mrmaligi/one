const gsmPhoneNumber = localStorage.getItem("gsmPhoneNumber") || "Not Set";
const password = localStorage.getItem("password") || "1234";

const sendSMS = (phoneNumber, message) => {
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
};

// Set Admin Number
document.getElementById("setAdminButton").addEventListener("click", () => {
    const adminPhone = document.getElementById("adminPhoneInput").value;
    sendSMS(gsmPhoneNumber, `${password}TEL${adminPhone}#`);
    localStorage.setItem("adminPhoneNumber", adminPhone); // Store admin phone number
});

// Change Password
document.getElementById("changePasswordButton").addEventListener("click", () => {
    const newPassword = document.getElementById("newPassword").value;
    sendSMS(gsmPhoneNumber, `${password}P${newPassword}`);
    localStorage.setItem("password", newPassword); // Store new password
});

// Inquire Status and IMEI
document.getElementById("inquireStatusButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, `${password}EE`));
document.getElementById("inquireIMEIButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, `${password}IMEI#`));

// Add event listener to the back button to navigate to the previous page
document.getElementById("backButton").addEventListener("click", () => {
    window.history.back();
});

// Check if service worker is registered
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
