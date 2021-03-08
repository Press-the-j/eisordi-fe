import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private store: Store
  ) { }

  loadArticles() {
    //this.store.dispatch()
    //this.store.dispatch()
    //this.store.dispatch()
    //this.store.dispatch()
  }
}
