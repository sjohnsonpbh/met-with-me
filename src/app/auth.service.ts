import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API_KEY = "AIzaSyA0pHLvu-5-i9H0JoYq0uWeldjXzTPQHdo"
const SIGN_UP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

@Injectable({
  providedIn: "root",
})

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

//return this.http.post<AuthResponseData>()//

export interface AuthResponseData {
  // For Sign In Only
  registered?: boolean
}

export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}




