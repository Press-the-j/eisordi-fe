import { All, MagazinesActionsTypes } from "./magazines.actions";
import { initialState, MagazinesState } from "./magazines.states";

export function ArticlesReducer(state = initialState, action: All): MagazinesState {
  switch (action.type) {
    case MagazinesActionsTypes.MAGAZINES_LOADED: {
      const magazines = [...action.payload.items];
      return {
        ...state,
        archive: [...state.archive, ...magazines],
        magazines: [...magazines],
        isLoad:true
      };
    }
default: {
      return state
    }
  }
}