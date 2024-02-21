export interface ISignIn {
  userName:string,
  password: string,
}
export interface ISignInDto {
 result: {
   accessToken:string
 },
  errors:any
}
