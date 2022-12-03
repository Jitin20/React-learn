import React from 'react'
import Buttons from '../Header/Buttons'

function Createlist() {

    function createList(){
        alert("We are creating")
    }
  return (
    <div>
    <Buttons
    id = {"createList"}
    clickHandler = {createList}
    isDisabled = {false}
    value = "Create"
    />
    </div>
  )
}

export default Createlist