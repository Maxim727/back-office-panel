import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";

@Injectable()

export class GetCurrentUserEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceSerice: PersistanceService) { }

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        // Perfomance optimization
        // firstly checking if it donesn't exist a;ready
        // we won't send a checkup request to backend
        const token = this.persistanceSerice.get('accessTOken')
        if(!token){
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    ))

}
