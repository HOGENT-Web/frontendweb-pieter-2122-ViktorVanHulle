import React from 'react';
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';


function BtnBack(props) {

  // const [filled, setFilled] = useState(false);

  // const circleTransition = () => {
  //   setFilled(!filled);
  // }

  const goBack = () => {
    if(props.login){
      props.onLoginChange(!props.login);
    }else {
      window.location.href = props.location;
    }
  }

  return (
    <button className='btnBack'  onClick={goBack}>
      <AiOutlineArrowLeft/>
    </button>
  )
}

export default BtnBack