DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_name VARCHAR(255) NOT NULL,
  is_private BOOLEAN DEFAULT false,
  quiz_url VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
  );
