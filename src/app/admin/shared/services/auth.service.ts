import { Injectable } from '@angular/core';
import { User, FbAuthResponse } from 'src/app/shared/interfaces';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, catchError, repeat } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {

  public loginError: boolean;

  constructor(
    private http: HttpClient
  ) {}

  login(user: User): Observable<any> {
    this.loginError = false;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError() {
    this.loginError = true;
  }

  isLogedIn(): boolean {
    if (new Date() > new Date(localStorage.getItem('tokenExpDate'))) {
      return false;
    }
    return true;
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      localStorage.setItem('idToken', response.idToken);
      localStorage.setItem('tokenExpDate', String(new Date(new Date().getTime() + +response.expiresIn * 1000)));
    } else {
      localStorage.clear();
    }
  }

  logout() {
    localStorage.clear();
  }

}
