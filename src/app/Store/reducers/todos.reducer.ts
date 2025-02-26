import { FAILED, SUCCESS } from "../actions/todos.action";

export interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

//Reducer
//according to action (type) ==> specifies which action
export function TodosReducer(state: ToDo[], action: any) {
    debugger;
    console.log("Action Todos: ", action);
    switch (action.type) {
        case SUCCESS:
            return action.payload;
        case FAILED:
            console.log("error : ", action.payload)
            return state ;
    }
}


