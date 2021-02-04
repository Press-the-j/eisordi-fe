import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  public logo=`../../../../assets/img/logo/logo-green-faded.svg`

  constructor() { }

  ngOnInit(): void {
  }

}
