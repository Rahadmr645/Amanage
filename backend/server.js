import express, { json } from 'express'
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express());

app.use('/', (req, res) => {
    res.send('you are wellcome');

})

app.listen(port, () => {
    console.log(`your app is running on http://localhost:${port}`)
})