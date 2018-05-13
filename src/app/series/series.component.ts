import { Component, OnInit, Input } from '@angular/core';

import {Series} from './series.model'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit { 

	@Input() series: Series

  	constructor() { }

  	ngOnInit() {
  	}

}
