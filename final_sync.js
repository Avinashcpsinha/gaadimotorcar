const { neon } = require('@neondatabase/serverless');
const fs = require('fs');

async function run() {
  const envContent = fs.readFileSync('.env', 'utf8');
  const match = envContent.match(/NEON_DATABASE_URL=(.+)/);
  if (!match) throw new Error('NEON_DATABASE_URL not found in .env');
  const url = match[1].trim();

  const sql = neon(url);
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id serial PRIMARY KEY NOT NULL,
        first_name text NOT NULL,
        last_name text NOT NULL,
        mobile text NOT NULL,
        email text NOT NULL,
        city text NOT NULL,
        state text NOT NULL,
        model_of_interest text NOT NULL,
        zip_code text,
        comments text NOT NULL,
        created_at timestamp DEFAULT now()
      );
    `;
    console.log('SUCCESS: Table "leads" created or already exists.');
  } catch (error) {
    console.error('ERROR:', error);
  }
}

run();
