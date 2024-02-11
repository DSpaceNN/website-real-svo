export enum RequestMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  POST = 'POST',
  PUT = 'PUT',
}
export type APIEndpoint = { url: string; method: RequestMethods };
