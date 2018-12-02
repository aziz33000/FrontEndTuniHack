import { Component, OnInit, Input } from '@angular/core';
class fact {
  categroies : string;
  body : string;
  constructor(parameters) {
  }
}

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  @Input('titre') titre: string;
  
  fact1 : fact = {
    categroies :'صحة',
    body:'90 akther'
  }
  
  showme = false;
  mycalss = '';
  numberoflike = 0;
  constructor() { }
  showed(){
    if(this.showme == false){
      this.showme = true;
    }
    else{
      this.showme = false;
    }
    
  }
  addlike(){
    if(this.mycalss == ''){
      this.mycalss = 'orange';
      this.numberoflike ++ ;
    }
    else{
      this.mycalss ='';
      this.numberoflike -- ;
    }
    return this.mycalss
  }
  ngOnInit() {
  }

}
