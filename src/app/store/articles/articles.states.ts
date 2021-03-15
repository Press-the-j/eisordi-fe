
export interface ArticlesState {
  isLoadMagazines: boolean;
  isLoadPoetries: boolean;
  isLoadPodcasts: boolean;
  isLoadStories: boolean;
}

export const initialState: ArticlesState = {
  isLoadMagazines: false,
  isLoadPoetries: true,
  isLoadPodcasts: true,
  isLoadStories: true, 
};
