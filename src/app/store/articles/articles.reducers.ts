import { ArticlesState, initialState  } from './articles.states';
import { All, ArticlesActionsTypes } from './articles.actions'
import { isLoadArticlesAll } from './articles.selectors';

export function ArticlesReducer(state = initialState, action: All): ArticlesState {
  switch (action.type) {
    case ArticlesActionsTypes.IS_LOAD_MAGAZINES: {
      return {
        ...state,
        isLoadMagazines: true,
      };
    }
    case ArticlesActionsTypes.IS_LOAD_STORIES: {
      return {
        ...state,
        isLoadStories: true,
      };
    }
    case ArticlesActionsTypes.IS_LOAD_PODCASTS: {
      return {
        ...state,
        isLoadPodcasts: true,
      };
    }
    case ArticlesActionsTypes.IS_LOAD_POETRIES: {
      return {
        ...state,
        isLoadPoetries: true,
      };
    }
    default: {
      return state
    }
  }
}