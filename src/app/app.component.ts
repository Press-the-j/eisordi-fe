import { Component, OnInit } from '@angular/core';
/* SERVICES */
import { ResponsiveService } from './services/responsive.service';
/* CONSTANTS */
/* RXJS */
import { combineLatest, concat, Observable } from 'rxjs';
import { combineAll, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
/* STORE */
import { LoadArticles } from './store/articles/articles.actions';
import { isLoadArticles } from './store/articles/articles.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eisordi';
  screen$: string;

  constructor(
    private responsiveService: ResponsiveService,
    private store: Store,
  ) {

  }

  ngOnInit() {
    /* Check Resolution of Screen */
    this.store.dispatch(new LoadArticles()),

    this.responsiveService.getSizeStatus().subscribe( (size) => {
      this.screen$ = size
    })
    this.onResize()

    const loadConfigs$ = combineLatest([
      this.store.select<boolean>(isLoadArticles)
    ]).pipe(
      tap(([b$]) => {
       console.log('caricati' , b$);
        
      })
    )
  }

  onResize() {
    this.responsiveService.checkResolution();
  }

}
