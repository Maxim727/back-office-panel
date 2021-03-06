import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { FeedStateInterface } from "../types/feedState.interface";
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from "./actions/getFeed.action";

const inititalState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const feedReducer = createReducer(
  inititalState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
    ),
    on(
      getFeedSuccessAction,
      (state, action): FeedStateInterface => ({
        ...state,
        isLoading: false,
        //@ts-ignore
        data: action.feed
      })
      ),
      on(
        getFeedFailureAction,
        (state): FeedStateInterface => ({
          ...state,
          isLoading: false
        })
        ),
        on(
          routerNavigationAction, (): FeedStateInterface => inititalState
        )
)

export function reducers(state: FeedStateInterface, action: Action){
  return feedReducer(state, action)
}

