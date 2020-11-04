import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface IValidationErrors {
  [key: string]: Array<string>;
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    const errors: IValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return res.status(400).json({ error: 'Validation fails.', errors });
  }

  console.error(error);

  return res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;
