import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeInterface } from './Store/store';
import { Decreament, Increament } from './Store/reducers/counter.reducer';
import { LoadTodosAction } from './Store/actions/todos.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'state Management Effects';
  Item1count: number = 0;
  Item2count: number = 0;
  constructor(private store: Store<storeInterface>) {
    
    //To watch when state change
    this.store.subscribe(data => {
      console.log("Data : ", data);
      console.log("App Componet todos Data  : ", data.todos);
    })

  }

  increaseItem1() {
    this.Item1count++;
    this.store.dispatch({ type: Increament, payload: 1 });
  }
  decreaseItem1() {
    this.Item1count--;
    this.store.dispatch({ type: Decreament, payload: 1 });
  }
  
  increaseItem2() {
    this.Item2count++;
    this.store.dispatch({ type: Increament, payload: 1 });
  }
  decreaseItem2() {
    this.Item2count--;
    this.store.dispatch({ type: Decreament, payload: 1 });
  }

  /********Effects */

  load(){
    this.store.dispatch(new LoadTodosAction())
  }
}
