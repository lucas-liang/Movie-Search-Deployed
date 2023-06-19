import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.OMDB_API_KEY;
// const URL = 'http://localhost:5000';
const URL = 'https://movie-search-2wfn.onrender.com'
const app = express();
app.use(cors());
app.use(express.json());
const API_URL = `http://omdbapi.com?apikey=${API_KEY}`;

app.get('/', async (req,res) =>{
    res.send('hello');
});

app.get('/get/:searchTerm', async(req,res) =>{
    const searchTerm = req.params.searchTerm;
    try{
        const response = await fetch(`${API_URL}&s=${searchTerm}`);
        const data = await response.json();
        res.send(data);
        }
    catch(error){
        console.log(error);
        res.send(error);
    }

} )

app.listen(5000, () => console.log(`Server is running on ${URL}`));
