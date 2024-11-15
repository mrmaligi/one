const gsmPhoneNumber = localStorage.getItem("gsmPhoneNumber") || "Not Set";

const sendSMS = (phoneNumber, message) => {
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
};

// Set Admin Number
document.getElementById("setAdminButton").addEventListener("click", () => {
    const adminPhone = document.getElementById("adminPhoneInput").value;
    sendSMS(gsmPhoneNumber, `1234TEL${adminPhone}#`);
});

// Change Password
document.getElementById("changePasswordButton").addEventListener("click", () => {
    const newPassword = document.getElementById("newPassword").value;
    sendSMS(gsmPhoneNumber, `1234P${newPassword}`);
    localStorage.setItem("password", newPassword); // Store new password
});

// Inquire Status and IMEI
document.getElementById("inquireStatusButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, `${localStorage.getItem("password") || "1234"}EE`));
document.getElementById("inquireIMEIButton").addEventListener("click", () => sendSMS(gsmPhoneNumber, `${localStorage.getItem("password") || "1234"}IMEI#`));
