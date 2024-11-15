const password = localStorage.getItem("password") || "1234";
const gsmPhoneNumber = localStorage.getItem("gsmPhoneNumber") || "Not Set";

const sendSMS = (phoneNumber, message) => {
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsUrl;
};

// Add User
document.getElementById("addUserButton").addEventListener("click", () => {
    const userPhone = document.getElementById("userPhoneInput").value;
    sendSMS(gsmPhoneNumber, `${password}A001#${userPhone}#`);
});

// Function to list authorized users
const userList = document.getElementById("userList");
const users = JSON.parse(localStorage.getItem("authorizedUsers")) || [];

users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `User: ${user}`;
    userList.appendChild(li);
});

// Add event listener to the back button to navigate to the previous page
document.getElementById("backButton").addEventListener("click", () => {
    window.history.back();
});
