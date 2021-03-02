import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TemplateConstants } from '../../assets/constants/template-constants.js'

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  readonly templateConstant = new TemplateConstants

  template$ = new BehaviorSubject<string>('') //$ tipizza template

  constructor() { }

  onTemplate(template: string) {
    this

  }


}
