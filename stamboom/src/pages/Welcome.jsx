import logo from "../assets/images/tree-with-many-leaves.png"
import arrow from "../assets/images/down-arrow.png"
import arrowRed from "../assets/images/down-arrow-red.png"
import { useHistory } from 'react-router-dom';


function Welcome() {

  //can be used by passing the translation function a key from translation.json
  // const { t } = useTranslation();
  const history = useHistory();

  return (
    <div id='welcome'>
      <div className='welcome-inner'> 
      <div className='logo'>
      <img src={logo}></img>
      <p>Van Hulle Stamboom</p>
      </div>
      <div className='content'>
        <div className='content-inner'>
          <p>Van Hulle is een belgische familie gealloceerd in Oost-Vlaanderen.</p>
          <span>"Familiespreuk hier" - Viktor Van Hulle</span>
        </div>
      </div>
      <a className='enter' href="/Stamboom" onMouseOver={() => { document.getElementById('arrow').src =  arrowRed}} onMouseLeave={() => { document.getElementById('arrow').src =  arrow}}>
        <span>
          Enter
        </span>
        <img src={arrow} width='32' id='arrow'></img>
      </a>
      </div>
    </div>
  )
}

export default Welcome