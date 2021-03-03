import { Component, OnInit } from '@angular/core';
/* SERVICES */
import { ResponsiveService } from './services/responsive.service';
/* CONSTANTS */
/* RXJS */
import { combineLatest, concat, Observable, Subscription } from 'rxjs';
import { combineAll, debounce, debounceTime, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
/* STORE */
import { LoadArticles, LoadArticlesTop } from './store/articles/articles.actions';
import { isLoadArticlesAll, isLoadArticlesTop } from './store/articles/articles.selectors';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eisordi';
  screen$: string;

  subscriptions = new Subscription;

  constructor(
    private responsiveService: ResponsiveService,
    private store: Store,
    public spinnerService: SpinnerService,
  ) {

  }

  ngOnInit() {
    /* Check Resolution of Screen */
    this.store.dispatch(new LoadArticles()),
    this.store.dispatch(new LoadArticlesTop()),

    this.responsiveService.getSizeStatus().subscribe( (size) => {
      this.screen$ = size
    })
    this.onResize()

    const loadConfigs$ = combineLatest([
      this.store.select<boolean>(isLoadArticlesAll),
      this.store.select<boolean>(isLoadArticlesTop)
    ]).pipe(
      tap(([articlesAll$, articlesTop$]) => {
        console.log("ALL: " , articlesAll$);
        console.log("TOP: " , articlesTop$);
        
      }),
    ).subscribe()

    this.subscriptions.add(loadConfigs$)
  }

  onResize() {
    this.responsiveService.checkResolution();
  }

  
}
