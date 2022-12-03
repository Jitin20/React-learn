
import React from 'react'
import Buttons from '../Header/Buttons'

function Getlist() {

    function listSubmit(){
        alert("List is here")
    }
  return (
    <div>


   <Buttons
   id={"btnList"}
   type={"Submit"}
   value={"List"}
   isDisabled = {false}
   clickHandler = {listSubmit}
   /> </div>
   
  )
}

export default Getlist