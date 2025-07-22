import 'dotenv/config'
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const FRONTEND_HOST = process.env.FRONTEND_HOST;

app.use(cors({origin: FRONTEND_HOST}))

app.use('/reports', (_, res) => {
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`Приложение запущено на порту ${PORT}`);
});