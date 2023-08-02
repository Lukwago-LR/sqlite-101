--create the table DDL (database definition language)
CREATE TABLE greetings(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    language TEXT,
    greeting TEXT
);

INSERT INTO greetings(language, greeting)
VALUES('English', 'Hello');


INSERT INTO greetings(language, greeting)
VALUES('Zulu', 'Sawubona');

INSERT INTO greetings(language, greeting)
VALUES('Sepedi', 'Molo');

INSERT INTO greetings(language, greeting)
VALUES('Luganda', 'Olyotya');

INSERT INTO greetings(language, greeting)
VALUES('German', 'Wie ghets');

--DDL (database manipulation)
SELECT *
FROM greetings
