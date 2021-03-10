export interface ArticlesState {
  magazines: object[] | null; //$ tipizza article
  articles_top: object[] | null; //$ tipizza article
  isLoadAll: boolean;
  isLoadTop: boolean;
}

export const initialState: ArticlesState = {
  articles: null,
  articles_top: null,
  isLoadAll: false,
  isLoadTop: false,
};