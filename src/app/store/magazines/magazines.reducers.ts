import { All, MagazinesActionsTypes } from "./magazines.actions";
import { initialState, MagazinesState } from "./magazines.states";

export function MagazinesReducer(state = initialState, action: All): MagazinesState {
  switch (action.type) {
    case MagazinesActionsTypes.MAGAZINES_LOADED: {
      const magazines = [...action.payload.items];
      return {
        ...state,
        archive: [ ...state.archive,...magazines],
        magazines: [...magazines],
        isLoad:true,
        total_page: action.payload.total_page,
        total_items: action.payload.total_items,
        current_page: action.payload.current_page,
        per_page: action.payload.per_page
      };
    }
    default: {
      return state
    }
  }
}