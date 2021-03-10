
export interface ArticlesState {
  isLoadAll: boolean;
  isLoadMagazines: boolean;
  isLoadPoetries: boolean;
  isLoadPodcasts: boolean;
  isLoadStories: boolean;
}

export const initialState: ArticlesState = {
  isLoadAll: false,
  isLoadMagazines: false,
  isLoadPoetries: false,
  isLoadPodcasts: false,
  isLoadStories: false, 
};
