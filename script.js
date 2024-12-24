document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    handleFormSubmission();
});

// Event List (Simulated)
const events = [
    { name: "Tech Conference 2024", date: "2024-10-01", organizer: "John Doe" },
    { name: "Networking Meetup", date: "2024-09-15", organizer: "Jane Smith" },
    { name: "Startup Workshop", date: "2024-08-20", organizer: "Startup Hub" }
];

// Load Events to the Event Section
function loadEvents() {
    const eventContainer = document.getElementById('eventContainer');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Organizer: ${event.organizer}</p>
        `;
        eventContainer.appendChild(eventCard);
    });
}

// Handle User Registration/Login
function handleFormSubmission() {
    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const role = document.getElementById('role').value;
        alert(`Welcome, ${username}! You are logged in as ${role}.`);
        userForm.reset();
    });
}

// Chat Functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value;
    const chatMessages = document.getElementById('chatMessages');
    if (message.trim()) {
        const newMessage = document.createElement('p');
        newMessage.textContent = `You: ${message}`;
        chatMessages.appendChild(newMessage);
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
