import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await  db.migrate()

export async function addGreeting(language, greeting) {
    const sql = 'INSERT INTO greetings (language, greeting) VALUES (?,?)'
    await db.run(sql, [language, greeting])
}

//call the qury using a promise
export async function getGreetings() {
    const result = await db.all('select * from greetings');
    return result;
}

export async function numberofGreetings() {
    return await db.all('select count(*) as count from greetings');
}


// functions to delete unwanted greetings
export async function deleteGreeting(id) {
    const sql = 'delete from greetings where id=?';
    await db.run(sql, [id]);
}


export async function deleteGreetingbyLanguage(language) {
    const sql = 'delete from greetings where language=?';
    await db.run(sql, [language]);
}

export async function updateGreeting(language, greeting, id) {
    const sql = 'update greetings set language=?, greeting=? where id =?';
    await db.run(sql, [language, greeting, id]);
}

// const result1 = await getGreetings();
// console.log('========================================');

// await updateGreeting('Sepedi', 'Thobela', 3);
// await getGreetings();

// console.log('========================================');

// await deleteGreetingbyLanguage('German');
// await getGreetings();


// const result = await numberofGreetings()
// console.log(result[0]['count'])

// async function numberofGreetings() {
//     db
//         .all('select count(*) as count from greetings')
//         .then(result => {
//             console.log(result)
//         });
// }

