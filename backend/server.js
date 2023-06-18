import express from 'express'; 
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

//console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId', 'Content-Range', 'X-Content-Range'],
//     'origin': '*',
//     'methods': 'GET,POST',
//     'preflightContinue': false,
//     'credentials': true
// }));
app.use(express.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://5000-raim-devtasks-ous4rqluvau.ws-eu100.gitpod.io/.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'whatsup...',
    })
    console.log("the get route...");
});

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        console.log("ya");

        res.status(200).send({
            bot: response.data.choices[0].text
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ error });
        console.log("oops, something went wrong...");
    }
})

// console.log(prompt);

app.listen(5000, () => console.log('server is running on port http://localhost:5000'));
