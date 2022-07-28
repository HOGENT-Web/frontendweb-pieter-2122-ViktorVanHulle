import React from "react";
import { children } from "../mock_data/children_mockdata"
import temp_image from "../assets/images/1.png"

function buildTree(kinderen) {
  // mss geef 1 persoon mee check op vrouwen en kinderen en geef dan de kinderen mee
  return (
    <div className="tree">
      <ul>
          {kinderen.map((p, i) => {
            return(
              <li key={i} className="marriage" >
              <a href={p.id+p.voornaam+p.achternaam}><img src={p.foto} alt=""></img><span>{p.voornaam + " " + p.achternaam}</span></a>
              {
              p.huwelijk.map((h, hi) => {
                return(
                  <li>
                  <a href={h.id+h.voornaam+h.achternaam}><img src={h.foto} alt=""></img><span>{h.voornaam + " " + h.achternaam}</span></a>
                  <ul>
                  {h.kinderen.map((p2, i2) => {
                    return(
                      <li key={i2}>
                      <a href={p2.id+p2.voornaam+p2.achternaam}><img src={p2.foto} alt=""></img><span>{p2.voornaam + " " + p2.achternaam}</span></a> 
                      </li>  
                    )                   
                  })}
                </ul>
                </li>
                )
              })
              }
            </li>
            )
          })}
      </ul>
    </div>
  );


}

function Tree(){
  return(
    <>
      {buildTree(children)}
    </>
  )
}

export default Tree;