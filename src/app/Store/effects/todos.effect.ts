import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FAILED, FailedAction, LOAD, SUCCESS, SucessAction } from "../actions/todos.action";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { ToDo } from "../reducers/todos.reducer";

@Injectable()
export class TodosEffect {
    constructor(private http: HttpClient, private actions: Actions) { }
    //create Effect (To Watch All actions)
    todoEffect = createEffect(() => this.actions.pipe(
        ofType(LOAD),  // Type of Action Load
        //using mergeMapTo Convert Observable<Object> to OperatorFunction
        mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todoss')
            .pipe(
                map((data) => new SucessAction(data),// Sucess
                    catchError((err : any) => {
                        console.log("Error : " , err);
                        return of(new FailedAction(err));
                    }
                       
                    )  //Error
                ))
        )))
}


