import { createAction, props } from "@ngrx/store";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { loginRequestInterface } from "../../types/loginRequest.interface";
import { ActionTypes } from "../actionTypes";

export const loginAction = createAction(
  ActionTypes.LOGIN, props<{ request: loginRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS, props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE, props<{ error: BackendErrorInterface }>()
)
