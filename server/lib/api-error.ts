import createError from 'http-errors';
import _ from 'lodash'

const baseTypePath = '/error';
const tp = (key: string) => `${baseTypePath}/${key}`;

const ErrorDefs = {
  INVALID_PARAM: {
    type: tp('invalid-param'),
    title: 'Invalid parameter.',
    status: 400
  },
  UNAUTHORIZED: {
    type: tp('unauthorized'),
    title: ' Unauthorized user.',
    status: 401
  },
  ACCESS_FORBIDDEN: {
    type: tp('access-forbidden'),
    title: 'Access forbidden.',
    status: 403
  },
  RESOURCE_NOT_FOUND: {
    type: tp('resource-not-found'),
    title: 'Resource is not found.',
    status: 404
  },
  DUPLICATE_RESOURCE: {
    type: tp('duplicate-resource'),
    title: 'Duplicate resource.',
    status: 409
  },
  INTERNAL_SERVER_ERROR: {
    type: tp('internal-server-error'),
    title: 'Internal server error.',
    status: 500
  }
} as const;

const respKeys = ['type', 'title', 'status'];

/**
 * APIエラーオブジェクトの生成
 */
const createApiError = (errorKey: keyof typeof ErrorDefs, detail = '') => {
  const err = ErrorDefs[errorKey];
  return createError(
    err.status,
    '',
    Object.assign(_.pick(err, respKeys), {
      detail
    })
  );
};

export { createApiError };
