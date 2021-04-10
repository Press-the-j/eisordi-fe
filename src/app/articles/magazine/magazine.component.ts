import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { Direction } from 'src/app/constants/direction-constants';
import { Pager } from 'src/app/models/pager';
import { ArticlesService } from 'src/app/services/articles.service';
import { ChangeMagazinesPagerFilter, LoadMagazinesPerPage, SwitchMagazinesPerPage } from 'src/app/store/magazines/magazines.actions';
import { getMagazinesAll, getMagazinesTop, isLoadMagazines, pagerMagazines } from 'src/app/store/magazines/magazines.selectors';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit, OnDestroy {

  magazines_top$$= new BehaviorSubject<any>({});
  magazines_all$$= new BehaviorSubject<any>({});
  magazines_pager$$= new BehaviorSubject<Pager | void>(null);

  subscriptions = new Subscription;
  pager: Pager

  constructor(
    private store: Store,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    const magazines_top$ = this.store.select(getMagazinesTop).pipe(
      map(magazines => this.magazines_top$$.next(magazines))
    )

    const magazines_all$ = this.store.select(getMagazinesAll).pipe(
      map(magazines => this.magazines_all$$.next(magazines))
    )

    const magazines_pager$ = this.store.select(pagerMagazines).pipe(
      tap((magazinesPager: Pager) => this.pager = magazinesPager),
      map((magazinesPager: Pager) => this.magazines_pager$$.next(magazinesPager)),
    )
      
    this.subscriptions
      .add(magazines_top$.subscribe())
      .add(magazines_all$.subscribe())
      .add(magazines_pager$.subscribe())
  }

  onPageFilter(value) {
    console.log(value);
    this.store.dispatch(new ChangeMagazinesPagerFilter(value))
  }

  onChangePage(value: Direction) {
    console.log('magazine changepage', value);
    const nextPage = value === Direction.NEXT ? this.pager.current_page + 1 : this.pager.current_page - 1
    const pageInStorage = this.pager.page_in_storage;
    
    if (!pageInStorage.includes(nextPage))
      this.store.dispatch(new LoadMagazinesPerPage({per_page:this.pager.per_page, page:this.pager.current_page + 1}));
    if (pageInStorage.includes(nextPage))
      this.store.dispatch(new SwitchMagazinesPerPage(nextPage))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


}
