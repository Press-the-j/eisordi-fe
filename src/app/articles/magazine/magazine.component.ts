import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMagazines } from 'src/app/store/magazines/magazines.selectors';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  magazines_top$: Observable<object[]>;
  magazines$: Observable<object[]>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
/*     this.magazines_top$ = this.store.select(getMagazinesTop)
 */    this.magazines$ = this.store.select(getMagazines)
  }

}
