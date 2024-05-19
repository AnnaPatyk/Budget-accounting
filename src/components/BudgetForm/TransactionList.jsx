import React from "react";
import ItemDelete from "./ItemDelete";
const transformData = (par) => {
  const data = new Date(parseInt(par)).toLocaleDateString();
  return data;
};

const TransactionList = ({ budget, state}) => {
  return (<>
    {budget.map((item) => {
        return (
          <li key={item.id}>
           <span className="data">{transformData(item.id)}</span>
            <span className="title">{item.title} </span> 
            <span className="sum">{item.sum} </span>{" "}
            <ItemDelete id = {item.id} state={state}/>
          </li>
        );
      })}
  </>
     
  );
};

export default React.memo(TransactionList);
