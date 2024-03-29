export interface AddCardType {
  AddCard: null | number | string | []; // Add the isLoggingIn flag
}

const initialState: AddCardType = {
  AddCard: [],
};
export const Set_AddCard = 'Set_AddCard';
interface SetIdAction {
  type: typeof Set_AddCard;
  payload: number | null | {} | [];
}
export type AddListingActionTypes = any;
const AddListing = (
  state = initialState,
  action: AddListingActionTypes,
): AddCardType => {
  switch (action.type) {
    case Set_AddCard:
      return {
        ...state,
        AddCard: action.payload, // Set isLoggingIn to true during login request
      };

    default:
      return state;
  }
};
export default AddListing;
