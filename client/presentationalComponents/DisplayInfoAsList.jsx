import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";

const DisplayInfoAsList = props => (
  <ul>
    {props.actualInfo.map(item => (
      <div className="single-item-inList-view" key={item.id}>
        <img className="single-item-inList-img" src={item.img} />
        <div className="single-item-inList-info">
          <li>{item.name}</li>
          <Button variant="fab">
            <Icon>edit_icon</Icon>
          </Button>
          <Button variant="fab">
            <DeleteIcon />
          </Button>
        </div>
      </div>
    ))}
  </ul>
);

export default DisplayInfoAsList;
