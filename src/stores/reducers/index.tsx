import {combineReducers} from 'redux';
import AddCard, {AddCardType} from './AddCardReducer';
import LoaderReducer, {LoaderState} from './LoaderReducers';
// Define the RootState type, which combines all the individual reducer states
export interface RootState {
  AddCard: AddCardType;
  loading: LoaderState;
  // Add more state types for other reducers if needed
}

const rootReducer = combineReducers({
  AddCard: AddCard,
});

export default rootReducer;
