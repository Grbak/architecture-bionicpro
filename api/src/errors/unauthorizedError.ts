import { UNAUTHORIZED_ERROR_STATUS_CODE } from '../consts';

class UnauthorizedError extends Error {
  readonly statusCode = UNAUTHORIZED_ERROR_STATUS_CODE;
}

export default UnauthorizedError;
