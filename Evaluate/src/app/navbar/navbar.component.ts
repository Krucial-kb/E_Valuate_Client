import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
navbarOpen = false;
loggedin = false;
currentUser: any;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

login() {
  this.router.navigate(['/login']);
  if(this.currentUser){this.loggedin = true;}
}
// logout() {
//   this.loggedin = false;
//   this.authenticationService.logout();
// }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
