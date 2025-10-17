const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();  // <-- add this

const app = express();
const port = 3000;

app.use(express.json());


// Middleware
app.use(cors());
app.use(bodyParser.json());            // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded


// Open (or create) SQLite database
const db = new sqlite3.Database('./messages.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    reason TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// POST route to save messages
app.post('/submit-message', (req, res) => {
  const { name, email, reason, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = `INSERT INTO messages (name, email, reason, message) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, email, reason, message], function(err) {
    if (err) {
      console.error('Error inserting message:', err.message);
      return res.status(500).json({ error: 'Failed to save message' });
    }

    res.json({ message: 'Message received and saved!', id: this.lastID });
  });
});

// GET route to fetch all messages
app.get('/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching messages:', err.message);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }

    res.json(rows);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/message-count', (req, res) => {
  db.get('SELECT COUNT(*) as count FROM messages', (err, row) => {
    if (err) {
      console.error('Error counting messages:', err.message);
      return res.status(500).json({ error: 'Failed to get message count' });
    }
    res.json({ count: row.count });
  });
});

