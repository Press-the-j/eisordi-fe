import { All, MagazinesActionsTypes } from "./magazines.actions";
import { initialState, MagazinesState } from "./magazines.states";

export function MagazinesReducer(state = initialState, action: All): MagazinesState {
  switch (action.type) {
    case MagazinesActionsTypes.MAGAZINES_LOADED: {
      const magazines = [...action.payload.items];
      const pageInStorage = [...state.page_in_storage];
      const newPageStorage: number[] = pageInStorage.includes(action.payload.current_page) ? [...pageInStorage] : [...pageInStorage, action.payload.current_page];
      return {
        ...state,
        archive: [ ...state.archive,...magazines],
        magazines: [...magazines],
        isLoad:true,
        total_page: action.payload.total_page,
        total_in_page: action.payload.total_in_page,
        total_items: action.payload.total_items,
        current_page: action.payload.current_page,
        per_page: action.payload.per_page,
        page_in_storage: [...newPageStorage]
      };
    }
    case MagazinesActionsTypes.MAGAZINES_TOP_LOADED: {
      const magazines = [...action.payload.items];
      return {
        ...state,
        magazines_top: magazines
      };
    }
    case MagazinesActionsTypes.SWITCH_MAGAZINES_PER_PAGE: {
      const archive = [...state.archive];
      const n = state.per_page
      //divido l'archivio in tanti array della lungezza del per_page
      const archivePaged = new Array(Math.ceil(archive.length / n)).fill(0).map(_ => archive.splice(0, n));
      //nell'azione passo la prossima pagina. per syncare l'index dell'array sottraggo 1 all'index
      const page = action.payload - 1;
      const magazines = archivePaged[page]; 
      return {
        ...state,
        magazines: [...magazines],
        current_page: action.payload,

      };
    }
    case MagazinesActionsTypes.MAGAZINES_PAGER_FILTER_CHANGED: {
      const perPage = action.payload.per_page;
      const magazines = [...action.payload.items]
      return {
        ...state,
        archive: [...magazines],
        magazines: [...magazines],
        total_page: action.payload.total_page,
        total_in_page: action.payload.total_in_page,
        total_items: action.payload.total_items,
        current_page: action.payload.current_page,
        per_page: perPage
      };
    }
    default: {
      return state
    }
  }
}