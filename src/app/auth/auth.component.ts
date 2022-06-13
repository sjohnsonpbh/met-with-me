import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {}
  // . . .
  onAuthFormSubmit(formObj: NgForm) {
    // Validation check
      if (!formObj.valid) return;

  // Destructure the form input values
      const { email, password } = formObj.value

  // Conditional to see what mode we are in
      if (this.isLoginMode) {
        // Sign In Logic
      } else {
        // Sign Up Logic
        this.authService.signUp(email, password).subscribe(
          (res) => {
            console.log('Auth Response Success:', res);
          },
          (err) => {
            console.error('Auth Res Error:', err);
          }
        );
      }

      // Observable logic with error handling

  // Reset the form
      formObj.reset();
  }

onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
}

onAuthFormSubmit(formObj: NgForm) {
  console.log('Form Values:', formObj.value);
  formObj.reset();
}
}

