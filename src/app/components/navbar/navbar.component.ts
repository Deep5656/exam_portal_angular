import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin = false;
  user = null;

  constructor(public login: LoginService, private router: Router) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.isLoggedin = this.login.isLoggedin();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedin = this.login.isLoggedin();
      this.user = this.login.getUser();
    })
  }


  public logout() {
    this.login.logout();
    // window.location.reload();
    this.isLoggedin = false;
    this.user = null;
    this.router.navigate(['login']);
  }
}
