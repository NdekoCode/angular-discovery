import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  message = '';
  auth!: AuthService;
  constructor(private _authService: AuthService, private _router: Router) {}
  ngOnInit(): void {
    this.auth = this._authService;
    if (this.auth.isLoggedIn) {
      this._router.navigate(['/pokemons']);
    }
  }
  login(form: NgForm) {
    this._authService.login(this.email, this.password).subscribe((response) => {
      if (response) {
        this.message = 'Vous etes connecter';
        this._router.navigate(['/pokemons']);
      } else {
        this.message = 'Email ou mot de passe incorrect';
      }
    });
  }
}
