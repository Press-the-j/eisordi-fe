/* export function ArticlesReducer(state = initialState, action: All): ArticlesState {
  switch (action.type) {
    case ArticlesActionsTypes.REDUCE_ARTICLES_TOP: {
      const articlesTop = [...action.payload];
      return {
        ...state,
        articles_top: [...articlesTop],
        isLoadTop:true
      };
    }
default: {
      return state
    }
  }
} */