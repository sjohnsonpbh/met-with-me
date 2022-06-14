import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObs: Observable<AuthResponseData>;
  isSignInMode = true;
  errMsg: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onToggleAuthMode() {
    this.isSignInMode = !this.isSignInMode;
  }
  onAuthFormSubmit(formObj: NgForm) {
    // Deconstruction of Values
    const { email, password } = formObj.value;

    // Validation Check
    if (!email || !password) return;

    // Conditional to see what "mode" we are in
    if (this.isSignInMode) {
      // Attempt: Sign In User
      this.authObs = this.authService.signIn(email, password);
    } else {
      //Sign up user
      this.authObs = this.authService.signUp(email, password)
    }

    // Observable Logic
    // Suscribe to observable
    this.authObs.subscribe({
      next: (res) => {
        console.log('Auth Response SUCCESS:', res);
        this.router.navigate(['my-gallery']);
      },
      error: (err) => {
        console.log('Auth Response ERROR:', err);
        this.errMsg = err.message;
      },
    });
    // Reset Form
    formObj.reset();
  }
}
