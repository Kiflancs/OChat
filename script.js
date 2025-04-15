// Példa felhasználók adatbázisa
const users = ["Daniel", "Anna", "Petra", "Balázs"];

// Bejelentkezési funkció
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Felhasználónév lekérése
  const username = document.getElementById("username").value;

  // Ellenőrzés, hogy szerepel-e az adatbázisban
  if (users.includes(username)) {
    // Bejelentkezés sikeres: login képernyő elrejtése
    document.getElementById("login-screen").style.display = "none";
    // Chat képernyő megjelenítése
    document.getElementById("chat-screen").style.display = "block";
  } else {
    // Hibaüzenet
    alert("A megadott felhasználónév nem található az adatbázisban!");
  }
});

// Üzenetküldés funkció
document.getElementById("message-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Üzenet lekérése
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value;

  // Üzenet megjelenítése a chatablakban
  if (messageText.trim() !== "") {
    const message = document.createElement("div");
    message.textContent = messageText;
    message.className = "message sent"; // Küldött üzenet stílusa
    document.getElementById("messages").appendChild(message);
  }

  // Üzenetmező törlése
  messageInput.value = "";
});

// Fájl kiválasztási értesítés
document.getElementById("file-upload").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    alert(`Fájl kiválasztva: ${file.name}`);
  }
});

// Példa kereső funkció a felhasználók listájában
document.getElementById("search-bar").addEventListener("input", function(event) {
  const query = event.target.value.toLowerCase();
  const filteredUsers = users.filter(user => user.toLowerCase().includes(query));
  
  const userList = document.getElementById("user-list");
  userList.innerHTML = filteredUsers.map(user => `<li>${user}</li>`).join("");
});
