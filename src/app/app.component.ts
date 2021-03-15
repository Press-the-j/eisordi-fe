import { Component, OnInit } from '@angular/core';
/* SERVICES */
import { ResponsiveService } from './services/responsive.service';
/* CONSTANTS */
/* RXJS */
import { combineLatest, Observable, Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
/* STORE */
import { LoadArticles} from './store/articles/articles.actions';
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
    this.articlesService.loadArticles();
    /* Check Resolution of Screen */
    this.onResize()
    this.responsiveService.getSizeStatus().subscribe( (size) => {//$ forse mettere hook del finish onresize
      this.screen$ = size
    })
    /* ------------- */
    
    const loadedConfigs$ = combineLatest([
      this.store.select<boolean>(isLoadArticlesAll),
    ]).pipe(
      first((isLoadedAll: boolean[]) => {
        const isLoadAll = isLoadedAll.filter((isLoadItem) => isLoadItem === false)
        if (isLoadAll.length > 0) return true;
        return false
      }),
      tap(() => {
        console.log('[END]', new Date());        
        /* console.log("ALL: " , articlesAll$);
        console.log("TOP: " , articlesTop$); */
        
      }),
    ).subscribe()

    this.subscriptions.add(loadedConfigs$)
  }

  onResize() {
    this.responsiveService.checkResolution();
  }

  
}
