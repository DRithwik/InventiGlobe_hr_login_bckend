import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();

const PORT = 5000;


app.use(cors());
app.use(express.json());

app.get('/api/employees', async (req, res) => {
  try {
  const query = "SELECT * FROM employees";
    const [rows] = await db.query(query);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 