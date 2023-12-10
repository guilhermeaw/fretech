import { NextFunction, Request, Response } from 'express';
import ErrorController from '@shared/errors/controllers/errorsController';
import AppError from '@shared/errors/AppError';

const errorController = new ErrorController();

export default async function errors(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Promise<Response<unknown, Record<string, unknown>>> {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
  const stackTrace = err instanceof Error ? err.stack : '';

  return errorController.create(`${errorMessage}\n${stackTrace}`, response);
}
