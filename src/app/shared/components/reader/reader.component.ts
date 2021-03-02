import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReaderService } from 'src/app/services/reader.service.js';

import { TemplateConstants } from '../../../../assets/constants/template-constants.js'

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  
  /* readonly templateConstant = new TemplateConstant
  
  template$: Observable<any>; //$ tipizza template
 */
  constructor(
    private readerService: ReaderService
  ) { }

  ngOnInit(): void {
    
  }

  

}
