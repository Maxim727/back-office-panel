import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { registerRequestInterface } from "../types/registerRequest.interface";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { map } from 'rxjs/operators'
import { loginRequestInterface } from "../types/loginRequest.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: registerRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      //map((response: AuthResponseInterface) => response.user ))
      map(this.getUser))
  }

  login(data: loginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      //map((response: AuthResponseInterface) => response.user)
      map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    //@ts-ignore
    return this.http.get(url).pipe(map(this.getUser))
  }


}
