export class Pager {
  per_page: number | null;
  current_page: number | null;
  total_items: number | null;
  total_page: number | null;
  total_in_page: number | null;
  page_in_storage: number[];
}