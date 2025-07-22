import { INTERNAL_ERROR_STATUS_CODE } from '../consts';

class InternalError extends Error {
  readonly statusCode = INTERNAL_ERROR_STATUS_CODE;
}

export default InternalError;
