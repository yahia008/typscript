import { combineReducers } from "redux" 
import reducer from "../state/BankReducer"
import { type } from "os"

const reducers = combineReducers({
    bank:reducer
})

export default reducers

export type State = ReturnType<typeof reducers>