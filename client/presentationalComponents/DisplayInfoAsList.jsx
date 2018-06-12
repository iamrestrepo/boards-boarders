import React from "react";

export const DisplayInfoAsList = props => (
  console.log(`hi from DisplayInfo. my props now are =  ${props}`),
  (
    <ul>
      {props.actualInfo.map(item => (
        <div className="single-item-inList-view">
          <img className="single-item-inList-img" src={item.img} />
          <div className="single-item-inList-info">
            <li>{item.name}</li>
          </div>
        </div>
      ))}
    </ul>
  )
);
