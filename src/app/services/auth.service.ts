import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { User } from './../libs/models/user.model';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl!: string;
  isLoading: boolean = false;
  constructor(
    private _httpClient: HttpClient,
    private _apiConfig: ApiService
  ) {}
  login(email: string, password: string): Observable<boolean> {
    this.isLoggedIn = true;
    this.isLoading = true;
    this._httpClient
      .get<User>(`${this._apiConfig.baseUrl}/users/?email=${email}`)
      .subscribe({
        next: (user) => {
          if (user.email === email && user.password === password) {
            this.isLoggedIn = true;
            this.isLoading = false;
            console.log(user);
            return user;
          }
          return of({});
        },
        error: (err) => {
          this.isLoggedIn = false;
          this.isLoading = false;
          console.error('Failed to authentcated ', err);
        },
      });
    console.log(email, password);
    return of(this.isLoggedIn).pipe(
      delay(500),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
