export interface MagazinesState {
  magazines_top: object[] | null; //$ tipizza article
  magazines: object[] | null; //$ tipizza article
  archive: any[]; //$ tipizza article
  total_page: number,
  total_in_page: number,
  total_items: number | null,
  current_page: number | null,
  per_page:number,
  archive_full: boolean;
  isLoad: boolean;
}

export const initialState: MagazinesState = {
  magazines_top: null,
  magazines: null,
  archive: [],
  total_page: null,
  total_in_page: null,
  total_items: null,
  current_page: 1,
  per_page: 5,
  archive_full: false,
  isLoad: false,
};