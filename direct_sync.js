const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const dotenv = require('dotenv');

dotenv.config();

const sql = neon(process.env.NEON_DATABASE_URL);

async function syncLeadsTable() {
  console.log('Connecting to database...');
  try {
    await sql(`
      CREATE TABLE IF NOT EXISTS "leads" (
        "id" serial PRIMARY KEY NOT NULL,
        "first_name" text NOT NULL,
        "last_name" text NOT NULL,
        "mobile" text NOT NULL,
        "email" text NOT NULL,
        "city" text NOT NULL,
        "state" text NOT NULL,
        "model_of_interest" text NOT NULL,
        "zip_code" text,
        "comments" text NOT NULL,
        "created_at" timestamp DEFAULT now()
      );
    `);
    console.log('Table "leads" ensured in database.');
  } catch (error) {
    console.error('Failed to create/sync "leads" table:', error);
  }
}

syncLeadsTable();
