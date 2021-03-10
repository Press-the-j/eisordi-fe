export interface MagazinesState {
  magazines: object[] | null; //$ tipizza article
  archive: object[] | null; //$ tipizza article
  isLoad: boolean;
}

export const initialState: MagazinesState = {
  magazines: null,
  archive: nul
  isLoad: null,
};