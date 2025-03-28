import { Component, OnInit } from '@angular/core';
import { allcard } from '../Services/allCard';
import { Set} from '../models/Set';
import { CardBrief } from '../models/CardBrief';

@Component({
  selector: 'app-list-card',
  imports: [],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})


export class ListCardComponent implements OnInit{
 set !: Set;
 visibleList : CardBrief[] = [];
  
  constructor(private readonly allcard: allcard){}
  
  
  ngOnInit(): void {
    
this.allcard.getCard().subscribe(
  (value) => {
    this.set = value;
    console.log(this.set);
    this.visibleList = this.set.cards.slice(0,20)
  },
  (error) =>{
    console.log('Error Fetching Data'+ error);
  }
);
  }

}
