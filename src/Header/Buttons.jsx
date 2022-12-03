import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttons(props) {


    const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";
 
  return (
    <Button  variant="primary"
    className={`btn ${btnEnableDisable}`}
      id={props.id} 
      onClick={props.clickHandler}
      disabled = {props.isDisabled}
      >{props.value}</Button>
  )
}

export default Buttons