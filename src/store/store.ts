import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import {childrenReducer} from "./childrenReducer";

let rootReducer = combineReducers({
    user: userReducer,
    children: childrenReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)

//@ts-ignore
window.store = store
