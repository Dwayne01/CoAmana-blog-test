import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'localforage';
import createHistory from 'history/createHashHistory';
import { connectRouter } from 'connected-react-router';
import projectModule from './app/project/_duck/reducers';


export const history = createHistory();

const appReducer = combineReducers({
  projectModule,
  router: connectRouter(history),
});


const reducers = (state, action) => {
  if (action.type === 'CLEAR_AUTH_TOKEN') {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(routerMiddleware(history), thunkMiddleware))
);

export const persistor = persistStore(store);
export default store;
