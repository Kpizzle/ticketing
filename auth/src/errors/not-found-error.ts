import { customError } from './custom-error';

export class NotFoundError extends customError {
  statusCode = 404;

  constructor() {
    super('route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: 'Not Found' }];
  }
}
