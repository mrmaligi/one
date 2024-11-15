const sendSMS = (phoneNumber, message) => {
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
};

const gsmPhoneNumber = localStorage.getItem("gsmPhoneNumber") || "Not Set";
document.getElementById("gsmPhoneNumber").innerText = gsmPhoneNumber;

document.getElementById("turnOnButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, "1234GON##"));
document.getElementById("holdOpenButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, "1234GOT999#"));
document.getElementById("turnOffButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, "1234GOFF##"));

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
