// Bejelentkezés
document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  if (response.ok) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('chat-screen').style.display = 'block';
  } else {
    alert('Érvénytelen felhasználónév');
  }
});

// Üzenetküldés
document.getElementById('message-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.className = 'message sent';
  
  document.getElementById('messages').appendChild(messageDiv);
  messageInput.value = '';
});
