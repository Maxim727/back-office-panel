import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map, tap } from "rxjs/operators";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginFailureAction, loginSuccessAction } from "src/app/auth/store/actions/login.action";

@Injectable()

export class LoginEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceSerice: PersistanceService,
              private  router: Router) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(( { request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            //window.localStorage.setItem('accessToken', currentUser.token)
            this.persistanceSerice.set('accessToken', currentUser.token)
            return loginSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ error: errorResponse.error }))
          })
        )
      })
    ))

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        console.log('success')
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch: false}
    )
}
