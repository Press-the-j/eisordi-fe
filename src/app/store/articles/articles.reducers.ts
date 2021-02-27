import { ArticlesState, initialState  } from './articles.states';
import { All, ArticlesActionsTypes } from './articles.actions'

export function ArticlesReducer(state = initialState, action: All): ArticlesState {
  switch (action.type) {
    case ArticlesActionsTypes.LOAD_ARTICLES_SUCCESS: {
      let articles = action.payload.map(article => article)
      return {
        ...state,
        articles: [...articles],
        isLoad: true,
      };
    }
    default: {
      return state
    }
  }
}