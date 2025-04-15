
// Példa felhasználók
const users = ['Daniel', 'Sorin', 'Péter', 'Kristóf'];

// Dinamikus felhasználói lista
const userList = document.getElementById('user-list');
users.forEach(user => {
  const li = document.createElement('li');
  li.textContent = user;
  userList.appendChild(li);
});

// Üzenetküldés
const form = document.getElementById('chat-form');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById('message-input');
  const message = document.createElement('div');
  message.textContent = input.value;
  message.className = 'message sent'; // Alapértelmezett "küldött" üzenet
  messages.appendChild(message);
  input.value = '';
});
