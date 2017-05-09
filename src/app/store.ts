import { IAppState } from './store';
import { ACTIONS } from './actions';
import { tassign } from 'tassign';
export interface IAppState{
    counter: number;
    messaging?: {
        newMessages: 0
    }
}

export const INITIAL_STATE: IAppState = { counter: 0, messaging: { newMessages: 0 } };

export function rootReducer(state: IAppState, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
        return tassign(state,{ counter: state.counter + 1 });
    }
    return state;
}