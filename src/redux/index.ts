import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const logger = createLogger();

export type AppState = ReturnType<typeof rootReducer>


export const configureStore = () => {
  const middleware: Middleware[] = [];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger, thunk);
  }
  if (process.env.NODE_ENV === 'test') {
    middleware.push(logger, thunk);
  }
  if (process.env.NODE_ENV === 'production') {
    middleware.push(thunk);
  }
  const middlewareEnhancer = applyMiddleware(...middleware);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );
  return store;
};
