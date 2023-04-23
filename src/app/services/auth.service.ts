import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
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
    this.isLoading = true;
    return this.findUser(email).pipe(
      tap((response) => {
        const user = response[0];
        this.isLoading = false;
        if (user) {
          if (user.email === email && user.password === password) {
            this.isLoggedIn = true;
          }
        }
        return of(this.isLoggedIn);
      }),
      map(() => this.isLoggedIn),
      catchError((err) => {
        console.error('Failed to authenticate', err);
        this.isLoggedIn = false;
        this.isLoading = false;
        return of(this.isLoggedIn);
      })
    );
  }

  findUser(email: string): Observable<User[]> {
    return this._httpClient.get<User[]>(
      `${this._apiConfig.baseUrl}/users/?email=${email}`
    );
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
