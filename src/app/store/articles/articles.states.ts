
export interface ArticlesState {
  articles: object[] | null; //$ tipizza article
  articles_top: object | null;
  isLoad: boolean;
}

export const initialState: ArticlesState = {
  articles: null,
  articles_top: null,
  isLoad: false,
};
