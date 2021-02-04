import { ResponsiveService } from "src/app/service/responsive.service";

export interface ResponsiveState {
  screen: string |  null;
}

export const initialConstantsState: ResponsiveState = {
  screen: '',
};
