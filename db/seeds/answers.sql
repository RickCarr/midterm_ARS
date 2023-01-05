-- answers table seeds here (Example)

-- for Question 1
INSERT INTO answers (question_id, question) VALUES (1, 'Green');
INSERT INTO answers (question_id, question) VALUES (1, 'Purple');
INSERT INTO answers (question_id, question, is_correct) VALUES (1, 'White', true);
INSERT INTO answers (question_id, question) VALUES (1, 'Brown');

INSERT INTO answers (question_id, question) VALUES (2, 'Green');
INSERT INTO answers (question_id, question) VALUES (2, 'Purple');
INSERT INTO answers (question_id, question, is_correct) VALUES (2, 'White', true);
INSERT INTO answers (question_id, question) VALUES (2, 'Brown');

INSERT INTO answers (question_id, question) VALUES (3, 'Green');
INSERT INTO answers (question_id, question) VALUES (3, 'Purple');
INSERT INTO answers (question_id, question, is_correct) VALUES (3, 'Red', true);
INSERT INTO answers (question_id, question) VALUES (3, 'Brown');

INSERT INTO answers (question_id, question) VALUES (4, 'Bert & Ernie');
INSERT INTO answers (question_id, question) VALUES (4, 'Jack & Jill');
INSERT INTO answers (question_id, question, is_correct) VALUES (4, 'Tweedledee & Tweedledum', true);
INSERT INTO answers (question_id, question) VALUES (4, 'Danny DeVito & Arnold Schwarzenegger');

-- for Question 2
INSERT INTO answers (question_id, question) VALUES (1, 'Fire');
INSERT INTO answers (question_id, question) VALUES (1, 'Water');
INSERT INTO answers (question_id, question, is_correct) VALUES (1, 'Ice', true);
INSERT INTO answers (question_id, question) VALUES (1, 'Toaster');

INSERT INTO answers (question_id, question) VALUES (2, 'The Matix');
INSERT INTO answers (question_id, question) VALUES (2, 'Avengers');
INSERT INTO answers (question_id, question, is_correct) VALUES (2, 'Dangerous Minds', true);
INSERT INTO answers (question_id, question) VALUES (2, 'Frozen');

INSERT INTO answers (question_id, question) VALUES (3, '0° Kelvin');
INSERT INTO answers (question_id, question) VALUES (3, '0° Fahrenheit');
INSERT INTO answers (question_id, question, is_correct) VALUES (3, '0° Celcius', true);
INSERT INTO answers (question_id, question) VALUES (3, '32° Celcius');

-- how do we make sure the answers match to the question on the correct quiz
-- how to update postgres to reflect these dbs.
-- how to implement into index
