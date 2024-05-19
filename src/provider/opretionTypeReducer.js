const operationTypeReducer = (state, {type,payload}) => {
   switch (type) {
      case 'toggle':
         return payload
   
      default:
       return state;
   }
   return state;
};
export default operationTypeReducer;
