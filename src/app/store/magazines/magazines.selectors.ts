import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MagazinesState } from "./magazines.states";

export const getArticlesState = createFeatureSelector<MagazinesState>('magazinesState');

export const isLoadMagazines = createSelector(
  getArticlesState,
  (feature: MagazinesState) => !!feature.isLoad && feature.isLoad || null
)

export const getMagazines = createSelector(
  getArticlesState,
  (feature: MagazinesState) => !!feature.magazines && feature.magazines || null
)