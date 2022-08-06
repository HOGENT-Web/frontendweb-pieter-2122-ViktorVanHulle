import React from 'react'
import { languages } from '../../mock_data/languages';
import i18next from 'i18next';
import 'flag-icons';


function setLanguage(lng){
  i18next.changeLanguage(lng);
}


function Footer() {

  return (
    <footer>
      <ul>
        {languages.map(({code, name, flag}) => {
          return (
            <li key={name} onClick={() => setLanguage(code)}>
              <span className={`fi fi-${flag}`}></span>
              {code}
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer