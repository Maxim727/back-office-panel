import { AuthStateInterface } from "src/app/auth/store/actions/authState.interface";
import { FeedStateInterface } from "../modules/feed/types/feedState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface
}
