document.addEventListener('DOMContentLoaded', function() {
    const authorizedUserPhoneNumberInput = document.getElementById('authorizedUserPhoneNumber');
    const addAuthorizedUserButton = document.getElementById('addAuthorizedUser');
    const authorizedUserNumberInput = document.getElementById('authorizedUserNumber');
    const deleteAuthorizedUserButton = document.getElementById('deleteAuthorizedUser');
    const authorizedUsersList = document.getElementById('authorizedUsersList');

    addAuthorizedUserButton.addEventListener('click', function() {
        const phoneNumber = authorizedUserPhoneNumberInput.value;
        addAuthorizedUser(phoneNumber);
    });

    deleteAuthorizedUserButton.addEventListener('click', function() {
        const userNumber = authorizedUserNumberInput.value;
        deleteAuthorizedUser(userNumber);
    });

    function addAuthorizedUser(phoneNumber) {
        const password = localStorage.getItem('gsmPassword') || 'defaultPassword';
        const phoneNumber = localStorage.getItem('gsmPhoneNumber') || 'defaultPhoneNumber';
        const addCommand = `sms:${phoneNumber}?body=${password}A001#${phoneNumber}#`;
        window.location.href = addCommand;
        updateAuthorizedUsersList(phoneNumber);
    }

    function deleteAuthorizedUser(userNumber) {
        const password = localStorage.getItem('gsmPassword') || 'defaultPassword';
        const phoneNumber = localStorage.getItem('gsmPhoneNumber') || 'defaultPhoneNumber';
        const deleteCommand = `sms:${phoneNumber}?body=${password}A${userNumber}##`;
        window.location.href = deleteCommand;
        removeAuthorizedUserFromList(userNumber);
    }

    function updateAuthorizedUsersList(phoneNumber) {
        let authorizedUsers = JSON.parse(localStorage.getItem('authorizedUsers')) || [];
        authorizedUsers.push(phoneNumber);
        localStorage.setItem('authorizedUsers', JSON.stringify(authorizedUsers));
        displayAuthorizedUsers();
    }

    function removeAuthorizedUserFromList(userNumber) {
        let authorizedUsers = JSON.parse(localStorage.getItem('authorizedUsers')) || [];
        authorizedUsers = authorizedUsers.filter((user, index) => index !== parseInt(userNumber) - 1);
        localStorage.setItem('authorizedUsers', JSON.stringify(authorizedUsers));
        displayAuthorizedUsers();
    }

    function displayAuthorizedUsers() {
        let authorizedUsers = JSON.parse(localStorage.getItem('authorizedUsers')) || [];
        authorizedUsersList.innerHTML = '';
        authorizedUsers.forEach((user, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `User ${index + 1}: ${user}`;
            authorizedUsersList.appendChild(listItem);
        });
    }

    displayAuthorizedUsers();
});
