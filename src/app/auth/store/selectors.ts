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
