import { combineReducers } from 'redux';

import itemsReducer from './items';

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
