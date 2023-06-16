import { ActionType } from "./ActionType"


interface DWaction {
    type: ActionType.DEPOSIT | ActionType.WITHDRAW
    payload: number
}
 
interface Bankrupt {
    type : ActionType.BANKRUPT

}

export type Actions = DWaction | Bankrupt
