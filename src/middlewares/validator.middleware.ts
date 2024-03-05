import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ZodRawShape, z } from 'zod'

import { AppError } from '../errors/app.error'

export enum ParamsType {
  QUERY = 'query',
  BODY = 'body'
}

type ValidateParams = {
  schema: ZodRawShape
  type: ParamsType
}

export function validator(params: ValidateParams) {
  return (request: Request, response: Response, next: NextFunction) => {
    const result = z.object(params.schema).safeParse(request[params.type])

    if (!result.success) {
      const errorFormatted = result.error.issues.map(
        (item) => `${item.path.join('.')}: ${item.message}`
      )

      throw new AppError(errorFormatted, StatusCodes.UNPROCESSABLE_ENTITY)
    }

    request[params.type] = result.data

    next()
  }
}
