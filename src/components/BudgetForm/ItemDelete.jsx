import React, { useContext } from 'react'
import { BalanceContext } from '../../context/BalanceContext';

export default function ItemDelete({id, state}) {
    const {haendlerItemDelete} =
    useContext(BalanceContext);
  
  return (
    <div className='item-delete' onClick={()=>{haendlerItemDelete( id, state)}}>
      x
    </div>
  )
}
