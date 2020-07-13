import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from '../services/api-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'exercises',
  templateUrl: './exercises.component.html',
   styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent{
  exercisis: Array<any> = [];
  constructor(
    private api: ApiServiceService, 
    private dades: DataService, 
    private router: Router) {}


  ValidarRespostes(){
   var n = parseFloat
  ((document.getElementById("num1") as HTMLInputElement).value);
    console.log(n)
    if (n == 6){
      console.log("It's correct")

    }

  }

}