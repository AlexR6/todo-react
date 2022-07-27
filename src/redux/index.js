import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "./reducers/auth.reducer";
import TodoEndReducer from "./reducers/todoEnd.reducer";
import TodoProgressReducer from "./reducers/todoProgress.reducer";
import UserReducer from "./reducers/user.reducer";
import CategoryReducer from "./reducers/category.reducer";

const store = legacy_createStore(
  combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    todoProgress: TodoProgressReducer,
    todoEnd: TodoEndReducer,
    category: CategoryReducer,
  })
);

export default store;
