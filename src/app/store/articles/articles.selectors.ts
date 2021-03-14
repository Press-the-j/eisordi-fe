import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.states';


export const getArticlesState = createFeatureSelector<ArticlesState>('articlesState');

export const isLoadArticlesAll = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.isLoadAll && feature.isLoadAll || null
)



