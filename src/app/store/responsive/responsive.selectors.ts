import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponsiveState } from './responsive.states';


export const getResponsiveState = createFeatureSelector<ResponsiveState>('bonus110State');

