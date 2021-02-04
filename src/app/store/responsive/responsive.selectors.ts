import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponsiveState } from './responsive.state';


export const getResponsiveState = createFeatureSelector<ResponsiveState>('bonus110State');

