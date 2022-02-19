import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogDetailsReducer, blogsReducer } from "./redux/reducers/blogReducer";

const reducer = combineReducers({
  blogs: blogsReducer,
  blogDetail: blogDetailsReducer

});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
