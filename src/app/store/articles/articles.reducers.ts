import { ArticlesState, initialState  } from './articles.states';
import { All, ArticlesActionsTypes } from './articles.actions'

export function ArticlesReducer(state = initialState, action: All): ArticlesState {
  switch (action.type) {
    default: {
      return state
    }
  }
}