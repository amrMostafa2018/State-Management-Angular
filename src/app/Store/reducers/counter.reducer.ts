import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "../store";

export const Increament = 'increament';
export const Decreament = 'decreament';

let initailState = {
    n: 0
};
//Reducer
//according to action (type) ==> specifies which action
export function counterReducer(state = initailState, action: any) {
    console.log("Action : ", action);
    switch (action.type) {
        case Increament:
            return {
                n: state.n + action.payload
            }
        case Decreament:
            return {
                n: state.n - action.payload
            }
        default:
            return state;
    }
}

//Add Selector
let CounterFeatureSelector = createFeatureSelector<Counter>('counter');
export let nSelector = createSelector(CounterFeatureSelector , state => state.n);