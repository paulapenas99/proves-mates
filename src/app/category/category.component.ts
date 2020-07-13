import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from '../services/api-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
   styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  constructor(
    private api: ApiServiceService, 
    private dades: DataService, 
    private router: Router) {}


}