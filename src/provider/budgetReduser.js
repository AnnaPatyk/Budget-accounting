const budgetReduser = (state, {type, payload})=>{
   switch (type) {
      case 'addBudgetItem':  {
         console.log(payload);
          const newBudget = new Map(state);
    if (newBudget.has(payload.operationType)) {
      const items = newBudget.get(payload.operationType);
      newBudget.set(payload.operationType, [...items, payload.item]);
      newBudget.set("budgetTotal", newBudget.get("budgetTotal")+payload.item.sum);
    } else {
      newBudget.set(payload.operationType, [payload.item]);
    }
   
    return newBudget;

      }   
     
    case'itemDelete': {
       const newBudget = new Map(state);
       let sum = 0; 
       const arr = state.get(payload.state).filter(item=>{
         if (item.id !== payload.id) {
               return true;
          } else {
             sum = item.sum;
             return false;
           }
       });
       newBudget.set(payload.state, arr);
       const budgetTotal= newBudget.get("budgetTotal");
       const updateTotal =  budgetTotal - sum ;
       newBudget.set("budgetTotal",  updateTotal  )
       return newBudget;
    }

    case'delitAll':{
      const  newBudget = new Map(payload.initial);
      return newBudget;
    }
   
      default:
          return state;
   }
   return state;
}
export default budgetReduser;