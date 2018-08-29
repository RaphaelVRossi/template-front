export class User {

  constructor(
    public login: string,
    public name: string,
    public email: string,
    public password: string,
    public address: string,
    public phone: string,
    public zipCode: string,
    public role: any
  ) {
  }
}
