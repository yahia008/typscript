import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { actionMaker } from '../Action-Creators'
import {bindActionCreators} from 'redux'
import { State } from '../services'

const Main = () => {

const  dispatch = useDispatch()
const amount= useSelector((state:State)=> state.bank)
const {depositMoney, withdrawMoney, BankruptMoney} = bindActionCreators(actionMaker, dispatch)
  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
      <button onClick = {() => BankruptMoney()}>Bankrupt  </button>
      
    </div>
  )
}

export default Main
