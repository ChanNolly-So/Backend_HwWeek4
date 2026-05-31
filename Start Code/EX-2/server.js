import express from 'express';
import { articles } from './models/data.js';
import articleRoute from './routes/articleRoute.js';

const app = express();
app.use(express.json());
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });
app.use('/', articleRoute);


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});