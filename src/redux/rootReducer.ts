import { combineReducers } from 'redux';
import jokesReducer from './jokes/jokes.reducer';
import lordOfRingReducer from './lordOftR/ring.reducer';


export default combineReducers({
  joke: jokesReducer,
  lordOfRing: lordOfRingReducer,
});
