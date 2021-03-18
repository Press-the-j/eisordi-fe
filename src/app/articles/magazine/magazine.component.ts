import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { getMagazinesAll, getMagazinesTop, isLoadMagazines } from 'src/app/store/magazines/magazines.selectors';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  magazines_load$: Observable<boolean>;
  magazines_top;
  magazines_all;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.magazines_load$ = combineLatest([
      this.store.select(isLoadMagazines),
      this.store.select(getMagazinesTop),
      this.store.select(getMagazinesAll)
    ]).pipe(
      filter(([isLoad, top, all]) => {
        return isLoad
      }),
      tap( arr => console.log(arr)), 
      tap(([isLoad, top, all]) => {
        this.magazines_top = top;
        this.magazines_all = all;
      }),
      map(([isLoad, top, all]) => {
        return true
      })
    )
    
  }

}
