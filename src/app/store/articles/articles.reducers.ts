import { ArticlesState, initialState  } from './articles.states';
import { All, ArticlesActionsTypes } from './articles.actions'

export function ArticlesReducer(state = initialState, action: All): ArticlesState {
  switch (action.type) {
    case ArticlesActionsTypes.REDUCE_ARTICLES_TOP: {
      const articlesTop = [...action.payload];
      return {
        ...state,
        articles_top: [...articlesTop],
        isLoadTop:true
      };
    }
    case ArticlesActionsTypes.REDUCE_ARTICLES_ALL: {
      const articlesAll=[...action.payload]
      return {
        ...state,
        articles: [...articlesAll],
        isLoadAll:true
      };
    }
    default: {
      return state
    }
  }
}