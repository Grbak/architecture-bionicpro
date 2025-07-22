import { FORBIDDEN_STATUS_CODE } from '../consts';

class ForbiddenError extends Error {
  readonly statusCode = FORBIDDEN_STATUS_CODE;
}

export default ForbiddenError;
