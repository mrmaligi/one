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
    const users = JSON.parse(localStorage.getItem("authorizedUsers")) || [];
    users.push(userPhone);
    localStorage.setItem("authorizedUsers", JSON.stringify(users));
    renderUserList();
});

// Function to list authorized users
const userList = document.getElementById("userList");
const users = JSON.parse(localStorage.getItem("authorizedUsers")) || [];

const renderUserList = () => {
    userList.innerHTML = "";
    users.forEach((user, index) => {
        const li = document.createElement("li");
        li.textContent = `User: ${user}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            users.splice(index, 1);
            localStorage.setItem("authorizedUsers", JSON.stringify(users));
            renderUserList();
        });
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
};

renderUserList();

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
