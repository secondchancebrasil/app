interface User {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  birthDate: string;
  cellphone: string;
}

export interface DTO {
  user: User;
}

export interface Response {
  id: number;
  name: string;
  email: string;
  phone: string;
  // TODO
  token: string;
  refresh_token: string;
}
