document.addEventListener('DOMContentLoaded', function() {
    const dummyLinks = document.querySelectorAll('.dummy-link');
    const dummyMessage = document.getElementById('dummy-message');
    const closeDummyMessage = document.getElementById('close-dummy-message');

    dummyLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the link from navigating
            dummyMessage.style.display = 'block'; // Show the message
        });
    });

    closeDummyMessage.addEventListener('click', function() {
        dummyMessage.style.display = 'none'; // Hide the message
    });
});