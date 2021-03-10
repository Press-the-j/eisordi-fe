
export interface ArticlesState {
  isLoadAll: boolean;
  isLoadMagazines: boolean;
  isLoadPoetries: boolean;
  isLoadPodcasts: boolean;
}

export const initialState: ArticlesState = {
  isLoadAll: false,
  isLoadMagazines: false, 
};
