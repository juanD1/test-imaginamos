import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';

const middleware: Middleware[] = [];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.log('Logging redux store...');
  middleware.push(logger);
}

const persistConfig = {
  key: 'test-Imaginamos',
  storage,
  blacklist: [], // will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<any> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
const persistor = persistStore(store);

export { store, persistor };
