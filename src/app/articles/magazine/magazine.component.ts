import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { ChangeMagazinesPagerFilter, LoadMagazinesPerPage } from 'src/app/store/magazines/magazines.actions';
import { getMagazinesAll, getMagazinesTop, isLoadMagazines, pagerMagazines } from 'src/app/store/magazines/magazines.selectors';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  magazines_load$: Observable<boolean>;
  magazines_top;
  magazines_all;
  magazines_pager;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.magazines_load$ = combineLatest([
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
    )
  }

  onPageFilter(value) {
    console.log(value);
    
     this.store.dispatch(new ChangeMagazinesPagerFilter(value))
  }

}
