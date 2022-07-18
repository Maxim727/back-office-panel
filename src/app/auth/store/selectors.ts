import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "./actions/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector, (authState: AuthStateInterface) =>  authState.isSubmitting
)

export const validationErrorSelector = createSelector(
  authFeatureSelector, (authState: AuthStateInterface) =>  authState.validationErrors
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector, (authState: AuthStateInterface) =>  authState.isLoggedIn
)

// helping selector for code readability
export const isAnonymousSelector = createSelector(
  authFeatureSelector, (authState: AuthStateInterface) =>  authState.isLoggedIn === false
  // I didn't make check as !authState.isLoggedIn
  // becuase we have 3 states 1) true 2) false 3) null
)

export const currentUserSelector = createSelector(
  authFeatureSelector, (authState: AuthStateInterface) =>  authState.currentUser
)

