import { customError } from './custom-error';

export class NotAuthorizedError extends customError {
  statusCode = 401;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: 'Not Authorized' }];
  }
}
