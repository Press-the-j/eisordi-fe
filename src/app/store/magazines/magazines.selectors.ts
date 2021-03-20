import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MagazinesState } from "./magazines.states";

export const getArticlesState = createFeatureSelector<MagazinesState>('magazinesState');

export const isLoadMagazines = createSelector(
  getArticlesState,
  (feature: MagazinesState) => !!feature.isLoad && feature.isLoad || null
)

export const getMagazinesAll = createSelector(
  getArticlesState,
  (feature: MagazinesState) => !!feature.magazines && feature.magazines || null
)

export const getMagazinesTop = createSelector(
  getArticlesState,
  (feature: MagazinesState) => !!feature.magazines_top && feature.magazines_top || null
)

export const perPage = createSelector(
  getArticlesState,
  (feature: MagazinesState) => !!feature.per_page && feature.per_page || null
)

export const pagerMagazines = createSelector(
  getArticlesState,
  (feature: MagazinesState) => {
    const pager = {
      per_page: feature.per_page,
      current_page: feature.current_page,
      total_items: feature.total_items,
      total_page: feature.total_page,
      total_in_page: feature.total_in_page
    }
    return pager
  }

)

