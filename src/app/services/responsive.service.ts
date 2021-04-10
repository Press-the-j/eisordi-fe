import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ScreenConstants } from '../constants/screen-constants'


@Injectable()
export class ResponsiveService {
  
  readonly screenConst = ScreenConstants
  
  screen = new Subject<string>();

  constructor()  
  {
    this.checkResolution()
  }

  onSizeChange(size: string) {
    return this.screen.next(size)
  }

  getSizeStatus(): Observable<any> {
    return this.screen.asObservable()
  }

  checkResolution(): void {
    let size;
    if (window.innerWidth < 460 ) {
      size = this.screenConst.MOBILE;
    } else if (window.innerWidth >= 460 && window.innerWidth <= 768) {
      size = this.screenConst.TABLET;
    } else {
      size = this.screenConst.DESKTOP
    } 
    this.onSizeChange(size)
  }
}