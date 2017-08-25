import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from './postReducer';
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  form: formReducer,
  posts: postReducer,
  user: userReducer,
  loading: loadingReducer
});

export default rootReducer;
