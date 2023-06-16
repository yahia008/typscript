import { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "../state/ActionType"
import { Actions } from "../state/box"


export const depositMoney = (amount : number) => {

    return (dispatch : Dispatch<Actions>)=> {

        dispatch({
            type:ActionType.DEPOSIT,
            payload:amount
        })
    }
}



export const withdrawMoney = (amount : number) => {
    
    return (dispatch : Dispatch<Actions>)=> {
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}

export const BankruptMoney = () => {
    return (dispatch : Dispatch<Actions>)=> {
        dispatch({
            type:ActionType.BANKRUPT,
            
        })
    }
}