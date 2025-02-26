import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeInterface } from '../Store/store';
import { nSelector } from '../Store/reducers/counter.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  count!: number;
  constructor(private store: Store<storeInterface>) {

    //To watch when state change
    this.store.subscribe(data => {
      console.log("Data : ", data);
      console.log("Header Componet todos Data  : ", data.todos);
    })
    /*
   this.store.subscribe(data => {
     this.count = data.counter.n;
   })*/
    //Using Selector to select direct (n)
    this.store.select(nSelector).subscribe(data => {
      this.count = data;
    })
  }
}
