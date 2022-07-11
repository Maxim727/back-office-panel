import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "./actions/authState.interface";
import { registerAction } from "./actions/register.action";

const initialSate: AuthStateInterface = {
  isSubmitting: false
}

const authReducer = createReducer(
  initialSate,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
  }))
)

export function reducer(state: AuthStateInterface, action: Action){
  return authReducer(state, action)
}
