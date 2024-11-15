const password = localStorage.getItem("password") || "1234";
const adminPhoneNumber = localStorage.getItem("adminPhoneNumber") || "Not Set";

const sendSMS = (phoneNumber, message) => {
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
};

document.getElementById("turnOnButton").addEventListener("click", () => sendSMS(adminPhoneNumber, `${password}GON##`));
document.getElementById("holdOpenButton").addEventListener("click", () => sendSMS(adminPhoneNumber, `${password}GOT999#`));
document.getElementById("turnOffButton").addEventListener("click", () => sendSMS(adminPhoneNumber, `${password}GOFF##`));

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
