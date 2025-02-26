import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "./reducers/counter.reducer";
import { ToDo, TodosReducer } from "./reducers/todos.reducer";

//All stores
export interface storeInterface {
    counter: Counter;
    todos: any

}
//State
export interface Counter {
    n: number;
}
//Add All reducers
export const reducers: ActionReducerMap<storeInterface> =
{
    counter: counterReducer,
    todos: TodosReducer
};

