import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk"
import { Store } from "./redux-store";

export type ActionT<R extends AnyAction> = ThunkAction<Promise<void>, Store, unknown, R>