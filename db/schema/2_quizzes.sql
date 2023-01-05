DROP TABLE IF EXISTS widgets CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  is_private BOOLEAN DEFAULT false,
  quiz_url VARCHAR(255) NOT NULL,
  user_name INTEGER REFERENCES users(id).name
  );
