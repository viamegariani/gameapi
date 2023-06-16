// src/database.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.game,
  host: 'game',
  database: process.env.game,
  password: process.env.game,
  port: 5432, // Replace with the appropriate port for your database
});

export const submitScore = async (name: string, score: number) => {
  const client = await pool.connect();

  try {
    // Execute the database query to insert the score
    await client.query('INSERT INTO scores (name, score) VALUES ($1, $2)', [name, score]);
  } finally {
    client.release();
  }
};

export const getLeaderboard = async () => {
  const client = await pool.connect();

  try {
    // Execute the database query to retrieve the leaderboard
    const result = await client.query('SELECT name, score FROM scores ORDER BY score DESC LIMIT 10');
    return result.rows;
  } finally {
    client.release();
  }
};
