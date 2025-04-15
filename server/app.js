const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Felhasználóadatok
const users = require('./users.json');

// Middleware
app.use(express.json());
app.use(express.static('../'));

// Fájl feltöltés
const upload = multer({ dest: '../uploads/' });

app.post('/login', (req, res) => {
  const { username } = req.body;
  if (users.includes(username)) {
    res.status(200).send('Bejelentkezés sikeres');
  } else {
    res.status(401).send('Érvénytelen felhasználónév');
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send('Fájl feltöltve');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
