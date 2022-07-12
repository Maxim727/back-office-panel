import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map, tap } from "rxjs/operators";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";

  @Injectable()

export class RegisterEffect {
  constructor(private actions$: Actions,
    private authService: AuthService,
    private persistanceSerice: PersistanceService,
    private router: Router) { }

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            //window.localStorage.setItem('accessToken', currentUser.token)
            this.persistanceSerice.set('accessToken', currentUser.token)
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error }))
          })
        )
      })
    ))

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => {
        console.log('success')
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch: false}
    )
}
