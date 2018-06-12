import React from "react";

const DisplayInfoAsList = props => (
  console.log(`hi from DisplayInfo. my props now are =  ${props}`),
  (
    <ul>
      {props.actualInfo.map(item => (
        <div className="single-item-inList-view" key={item.id}>
          <img className="single-item-inList-img" src={item.img} />
          <div className="single-item-inList-info">
            <li>{item.name}</li>
          </div>
        </div>
      ))}
    </ul>
  )
);

export default DisplayInfoAsList;
