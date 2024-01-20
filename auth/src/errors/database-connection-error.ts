import { customError } from './custom-error';

export class DatabaseConnectionError extends customError {
  statusCode = 500;
  reason = 'Error connecting to database';
  constructor() {
    super('Unable to connect to the DB');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
