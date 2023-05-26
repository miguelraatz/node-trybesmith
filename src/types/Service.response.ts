type ServiceReponseError = {
  status: 'UNAUTHORIZED',
  data: {
    message: string
  },
};

type ServiceResponseSuccess<T> = {
  status: 'SUCCESS',
  data: T,
};

export type ServiceResponse<T> = ServiceReponseError | ServiceResponseSuccess<T>;