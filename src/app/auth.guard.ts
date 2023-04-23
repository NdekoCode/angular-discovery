import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate() {
    console.log('Le guard a bien été appeler !');
    if (this._authService.isLoggedIn) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
