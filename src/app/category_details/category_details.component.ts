import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'category_details',
  templateUrl: './category_details.component.html',
   styleUrls: ['./category_details.component.css']
})
export class CategoryDetailsComponent{
private infoDeLaRuta;
drinks: Array<any> = [];
loading = false;

  constructor(
    private api: ApiServiceService, 
    private route: ActivatedRoute,
    private dades: DataService, 
    private router: Router) {}

doSearchNameDrink(term: string): void {
    if (term) {
      this.loading = true;

      
    } else {// si fan enter sense haver introduit res
      this.drinks = [];
      this.loading = true;
  }
}
  ngOnInit() {

    // obtenim el paràmetre a través de l'observable params
    this.route.params.subscribe(
      //res => this.infoDeLaRuta = res.parametre? res.parametre : "no hi ha paràmetres",
      res => {
        this.infoDeLaRuta = res.parametre
        //this.doSearchNameDrink(this.infoDeLaRuta);
        }
    );

  }


    


    

}