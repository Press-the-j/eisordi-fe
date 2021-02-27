import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.states';


export const getArticlesState = createFeatureSelector<ArticlesState>('articlesState');


export const articles = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.articles && feature.articles || null
);

export const isLoadArticles = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.isLoad && feature.isLoad || null
)