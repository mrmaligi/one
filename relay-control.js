document.addEventListener('DOMContentLoaded', function() {
    const turnOnButton = document.getElementById('turnOn');
    const turnOffButton = document.getElementById('turnOff');
    const setLatchTimeButton = document.getElementById('setLatchTime');

    turnOnButton.addEventListener('click', function() {
        sendSMSCommand('GON##');
    });

    turnOffButton.addEventListener('click', function() {
        sendSMSCommand('GOFF##');
    });

    setLatchTimeButton.addEventListener('click', function() {
        sendSMSCommand('GOT030#');
    });

    function sendSMSCommand(command) {
        const password = localStorage.getItem('gsmPassword') || 'defaultPassword';
        const phoneNumber = localStorage.getItem('gsmPhoneNumber') || 'defaultPhoneNumber';
        const smsCommand = `sms:${phoneNumber}?body=${password}${command}`;
        window.location.href = smsCommand;
    }
});
