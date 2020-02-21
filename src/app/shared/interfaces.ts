export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Post {
  title: string;
  text: string;
  image?: string;
  date: string;
  id?: string;
}
