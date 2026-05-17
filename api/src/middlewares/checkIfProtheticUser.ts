import { NextFunction, Request, Response } from 'express';
import ForbiddenError from '../errors/forbiddenError';

export const checkIfProtheticUser = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const tokenData = req.tokenData;
    const roles = tokenData.realm_access.roles;

    const isProthetic = roles.includes("prothetic_user");

    if (isProthetic) {
      next();
    } else {
      throw new ForbiddenError("Недостаточно прав");
    }
  } catch (error) {
    next(error);
  }
}