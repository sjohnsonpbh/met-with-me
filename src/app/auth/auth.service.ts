import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



const AUTH_API_KEY = "AIzaSyA0pHLvu-5-i9H0JoYq0uWeldjXzTPQHdo"
const SIGN_UP_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

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

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}

@Injectable({providedIn: "root",
})
export class AuthService {
 currUser = new BehaviorSubject<Users>(null);
  currentUsers: any;

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true,
    })
    .pipe(
      tap((res:AuthResponseData) => {
        const { email, localId, idToken, expiresIn } = res;
        this.handleAuth(email, localId, idToken, +expiresIn);
      })
    );
}

signIn(email: string, password: string) {
  return this.http
    .post<AuthResponseData>(SIGN_IN_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true,
    })
    .pipe(
      tap((res) => {
        const { email, localId, idToken, expiresIn } = res;
        this.handleAuth(email, localId, idToken, +expiresIn);
      })
    );
}

handleAuth(email: string, userId: string, token: string, expiresIn: number) {
  // Create Expiration Date for Token
  const expDate = new Date(new Date().getTime() + expiresIn * 1000);

  // Create a new user based on the info passed in the form and emit that user
  const formUser = new Users(email, userId, token, expDate);
  this.currUser.next(formUser);

  // Save the new user in localStorage
  localStorage.setItem("userData", JSON.stringify(formUser));
}

}
