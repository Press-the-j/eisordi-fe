
export interface ArticlesState {
  articles: object[] | null;
  isLoad: boolean;
}

export const initialState: ArticlesState = {
  articles: null,
  isLoad: false,
};
