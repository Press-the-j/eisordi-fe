import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { ChangeMagazinesPagerFilter, LoadMagazinesPerPage } from 'src/app/store/magazines/magazines.actions';
import { getMagazinesAll, getMagazinesTop, isLoadMagazines, pagerMagazines } from 'src/app/store/magazines/magazines.selectors';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit, OnDestroy {

  magazines_top$= new BehaviorSubject<any>({});
  magazines_all$= new BehaviorSubject<any>({});
  magazines_pager$= new BehaviorSubject<any>({});

  subscriptions = new Subscription;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    const magazines_top = this.store.select(getMagazinesTop).pipe(
      map(magazines => this.magazines_top$.next(magazines))
    )

    const magazines_all = this.store.select(getMagazinesAll).pipe(
      map(magazines => this.magazines_all$.next(magazines))
    )

    const magazines_pager = this.store.select(pagerMagazines).pipe(
      map(magazinesPager => this.magazines_pager$.next(magazinesPager))
    )
      
    this.subscriptions
      .add(magazines_top.subscribe())
      .add(magazines_all.subscribe())
      .add(magazines_pager.subscribe())
    /* this.magazines_load$ = combineLatest([
      this.store.select(isLoadMagazines),
      this.store.select(getMagazinesTop),
      this.store.select(getMagazinesAll),
      this.store.select(pagerMagazines)
    ]).pipe(
      first(([isLoad, top, all, pager]) => {
        return isLoad === true && !!top && !!all && !!pager
      }),
      tap(([isLoad, top, all, pager]) => {
        console.log('MAGAZINES INIT', pager, top, all);
        
        this.magazines_top = top;
        this.magazines_all = all;
        this.magazines_pager = pager;
      }),
      map(() => {
        return true
      })
    ) */
  }

  onPageFilter(value) {
    console.log(value);
    this.store.dispatch(new ChangeMagazinesPagerFilter(value))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


}
