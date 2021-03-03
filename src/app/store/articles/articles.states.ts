
export interface ArticlesState {
  articles: object[] | null; //$ tipizza article
  articles_top: object | null;
  isLoadAll: boolean;
  isLoadTop: boolean;
}

export const initialState: ArticlesState = {
  articles: null,
  articles_top: null,
  isLoadAll: false,
  isLoadTop: false,
};
