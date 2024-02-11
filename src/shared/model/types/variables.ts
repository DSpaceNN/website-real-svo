export enum RequestMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  POST = 'POST',
  PUT = 'PUT',
}
export type APIEndpoint = { url: string; method: RequestMethods };
export interface APICollection  { [key:string]: APIEndpoint }
