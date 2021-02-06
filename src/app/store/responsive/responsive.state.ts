import { ResponsiveService } from "src/app/services/responsive.service";

export interface ResponsiveState {
  screen: string |  null;
}

export const initialConstantsState: ResponsiveState = {
  screen: '',
};
