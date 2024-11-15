document.addEventListener('DOMContentLoaded', function() {
    const gsmModulePhoneNumberInput = document.getElementById('gsmModulePhoneNumber');
    const adminPhoneNumberInput = document.getElementById('adminPhoneNumber');
    const sendAdminSetupCommandButton = document.getElementById('sendAdminSetupCommand');
    const newPasswordInput = document.getElementById('newPassword');
    const changePasswordButton = document.getElementById('changePassword');

    gsmModulePhoneNumberInput.value = localStorage.getItem('gsmModulePhoneNumber') || '';
    adminPhoneNumberInput.value = localStorage.getItem('adminPhoneNumber') || '';

    sendAdminSetupCommandButton.addEventListener('click', function() {
        const gsmModulePhoneNumber = gsmModulePhoneNumberInput.value;
        const adminPhoneNumber = adminPhoneNumberInput.value;
        localStorage.setItem('gsmModulePhoneNumber', gsmModulePhoneNumber);
        localStorage.setItem('adminPhoneNumber', adminPhoneNumber);
        const adminSetupCommand = `sms:${gsmModulePhoneNumber}?body=1234TEL00614${adminPhoneNumber}#`;
        window.location.href = adminSetupCommand;
    });

    changePasswordButton.addEventListener('click', function() {
        const newPassword = newPasswordInput.value;
        localStorage.setItem('gsmPassword', newPassword);
        const gsmModulePhoneNumber = localStorage.getItem('gsmModulePhoneNumber') || 'defaultPhoneNumber';
        const changePasswordCommand = `sms:${gsmModulePhoneNumber}?body=1234P${newPassword}`;
        window.location.href = changePasswordCommand;
    });
});
