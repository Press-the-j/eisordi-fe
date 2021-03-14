export interface MagazinesState {
  magazines_top: object[] | null; //$ tipizza article
  magazines: object[] | null; //$ tipizza article
  archive: any[]; //$ tipizza article
  isLoad: boolean;
}

export const initialState: MagazinesState = {
  magazines_top: null,
  magazines: null,
  archive: [],
  isLoad: false,
};