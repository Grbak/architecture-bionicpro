import { ErrorRequestHandler } from 'express';
import InternalError from '../errors/internalError';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err.statusCode === undefined ? new InternalError('На сервере произошла ошибка') : err;

  res.status(statusCode).send({ message });
};

export default errorHandler;
