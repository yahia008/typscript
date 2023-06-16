import { type } from "os"

import { Actions } from "./box";
import { ActionType } from "./ActionType";

const initialState = 0


const reducer = (state:number = initialState, action:Actions) => {

    switch (action.type) {
        case ActionType.DEPOSIT:

        return state + action.payload;
        case ActionType.WITHDRAW:

        return state - action.payload;

        case ActionType.BANKRUPT:

        return 0
          
          
        default:
            return state

    }
}

export default reducer