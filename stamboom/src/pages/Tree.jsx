import React from "react";
import { children } from "../mock_data/children_mockdata"

function buildTree(kinderen) {

  return (
    <div className="tree-wrapper">
      <div className="tree">
        <ul>
            {kinderen.map((p, i) => {
              return(
                <li key={i} className="marriage" >
                <a href={"/info/"+p.id}><img src={p.foto} alt=""></img><span>{p.voornaam + " " + p.achternaam}</span></a>
                {
                p.huwelijk.map((h, hi) => {
                  return(
                    <li>
                    <a href={"/info/"+h.id}><img src={h.foto} alt=""></img><span>{h.voornaam + " " + h.achternaam}</span></a>
                    <ul>
                    {h.kinderen.map((p2, i2) => {
                      return(
                        <li key={i2}>
                        <a href={"/info/"+p2.id}><img src={p2.foto} alt=""></img><span>{p2.voornaam + " " + p2.achternaam}</span></a> 
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