import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import UnauthorizedError from '../errors/unauthorizedError';

export const auth = async (req: Request, _: Response, next: NextFunction) => {
  try {
    // Извлекаем токен из заголовка
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        throw new UnauthorizedError('Отсутствует токен авторизации');
    }

    // Декодируем токен
    const token = bearerToken.split(" ");
    const tokenData = jwt.decode(token[1]);

    // Добавляем данные из токена в запрос
    req.tokenData = tokenData;

    next();
  } catch (error) {
    next(error);
  }
}