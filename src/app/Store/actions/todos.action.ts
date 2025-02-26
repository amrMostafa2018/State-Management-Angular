export const SUCCESS = 'success';
export const FAILED = 'failed';
export const LOAD = 'load';

export class LoadTodosAction {
    type: string = LOAD
}

export class SucessAction {
    type: string = SUCCESS;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class FailedAction {
    type: string = FAILED;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}