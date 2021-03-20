import { Component, OnInit } from '@angular/core';
/* SERVICES */
import { ResponsiveService } from './services/responsive.service';
/* CONSTANTS */
/* RXJS */
import { combineLatest, Observable, Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
/* STORE */
import { isLoadArticlesAll } from './store/articles/articles.selectors';
import { SpinnerService } from './services/spinner.service';
import { ArticlesService } from './services/articles.service';

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
    private articlesService: ArticlesService,
    private store: Store,
    public spinnerService: SpinnerService,
  ) {

  }

  ngOnInit() {
    console.log('[START]', new Date())
    this.articlesService.resolveArticles();
    this.spinnerService.load(true)
    /* Check Resolution of Screen */
    this.onResize()
    this.responsiveService.getSizeStatus().subscribe( (size) => {//$ forse mettere hook del finish onresize
      this.screen$ = size
    })
    /* ------------- */
    /* const pager$ = this.store.select(pager).pipe(
      tap(r=>console.log(r)
      )
    ).subscribe(); */

    const loadedConfigs$ = combineLatest([
      this.store.select<boolean>(isLoadArticlesAll),
      //$ other config load
    ]).pipe(
      first((isLoadedAll: boolean[]) => {
        /* console.log(isLoadedAll.some(x => !x)); */
        if (isLoadedAll.some(x => !x)) return false;
        return true
      }),
      tap(() => {
        this.spinnerService.load(false)
        console.log('[END]', new Date());        
        
      }),
    ).subscribe()

    this.subscriptions.add(loadedConfigs$)
  }

  onResize() {
    this.responsiveService.checkResolution();
  }

  
}
