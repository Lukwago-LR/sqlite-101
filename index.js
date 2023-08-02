import express from 'express';
import { getGreetings, addGreeting, deleteGreeting, deleteGreetingbyLanguage, updateGreeting } from './db.js';

const app = express()
app.use(express.json())

console.log('start of the api code')

app.get('/api/greetings', async function (req, res) {
    const greetings = await getGreetings();
    res.json(
        {
            greetings
        }
    );

});

app.post('/api/addGreeting', async function (req, res) {
    const language = req.body.language;
    const greeting = req.body.greeting;
    await addGreeting(language,greeting);
    res.json(
        {
             status: 'Success',
             message: 'Added a new greeting'
        }
    );

});

let PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})