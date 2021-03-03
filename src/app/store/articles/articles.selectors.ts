import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.states';


export const getArticlesState = createFeatureSelector<ArticlesState>('articlesState');

export const isLoadArticlesAll = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.isLoadAll && feature.isLoadAll || null
)

export const isLoadArticlesTop = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.isLoadTop && feature.isLoadTop || null
)

export const getArticles = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.articles && feature.articles || null
);

export const getArticlesTop = createSelector(
  getArticlesState,
  (feature: ArticlesState) => !!feature.articles_top && feature.articles_top || null
);


