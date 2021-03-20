import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
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

    const test = this.store.select(pagerMagazines).subscribe(r => console.log('TEST',r));
    
    this.magazines_load$ = combineLatest([
      this.store.select(isLoadMagazines),
      this.store.select(getMagazinesTop),
      this.store.select(getMagazinesAll),
      this.store.select(pagerMagazines)
    ]).pipe(
      filter(([isLoad, top, all, pager]) => {
        return isLoad === true
      }),
      tap( arr => console.log(arr)), 
      tap(([isLoad, top, all, pager]) => {
        console.log('pager',pager);
        
        this.magazines_top = top;
        this.magazines_all = all;
        this.magazines_pager = pager;
      }),
      map(() => {
        return true
      })
    )
    
  }

}
