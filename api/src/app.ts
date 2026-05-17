import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import { auth } from './middlewares/auth';
import { checkIfProtheticUser } from './middlewares/checkIfProtheticUser';
import errorHandler from './middlewares/errorHandler';

const memoryStore = new session.MemoryStore();
const keycloakConfig = {
  realm: String(process.env.REALM),
  'bearer-only': Boolean(process.env.BEARER_ONLY),
  'auth-server-url': String(process.env.AUTH_SERVER_URL),
  'ssl-required': String(process.env.SSL_REQUIRED),
  'resource': String(process.env.RESOURCE),
  'confidential-port': Number(process.env.CONFIDENTIAL_PORT)
};

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const FRONTEND_HOST = process.env.FRONTEND_HOST;

app.use(cors({origin: FRONTEND_HOST}))

app.use(keycloak.middleware())

// Все роуты, указанные ниже этой мидлвари, защищаются проверкой наличия токена авторизации
app.use(auth);

app.get('/reports', keycloak.protect(), checkIfProtheticUser, (_, res) => {
  // TODO: возвращать моковые данные
  res.send(200);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Приложение запущено на порту ${PORT}`);
});