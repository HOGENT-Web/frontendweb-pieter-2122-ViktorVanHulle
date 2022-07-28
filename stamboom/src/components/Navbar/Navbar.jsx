import React from 'react'

// function login(){
//   console.log(document.getElementById('login'));
//   document.getElementById('login').className = "reveal";
// }

function Navbar(props) {
  return (
    <nav>
      <button onClick={() => props.onLoginChange(!props.login)}>Inloggen</button>
    </nav>
  )
}

export default Navbar