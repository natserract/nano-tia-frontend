import { AxiosResponse } from "axios";

export type ErrorDetails = {
  what: string;
  who: string;
};

export type ErrorHandler = {
  badRequest: (errorDetails: ErrorDetails) => void;
  pageNotFound: (errorDetails: ErrorDetails) => void;
}

export const handleAPIError = (
  errorHandler: ErrorHandler,
  response: AxiosResponse
) => {
  console.log('error response', response)

  switch (response.status) {
    case 400:
      errorHandler.badRequest(response.data.error as ErrorDetails)
      break;
    case 404:
      errorHandler.pageNotFound(response.data.error as ErrorDetails);
      break;
    default:
      break;
  }
}