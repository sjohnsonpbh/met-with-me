import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {}

  // remember me - !!user include the two bangs and the variable resolves to true or false depending on the type of variable.
  ngOnInit(): void {
    this.authService.currUser.subscribe((user) => {
      this.isLoggedIn = !!user;
      console.log(!!user);
    });
  }

  signOut() {
    this.authService.signOut();
  }
}
