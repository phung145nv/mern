import React from 'react'
import new_collections from "./../../assets/new_collections"
import Item from '../Item/Item'
import "./NewCollection.css"

const NewCollection = () => {
    return (
      <div>
          <div className="new-collection ">
              <div className="container">
                  <h1>NEW COLLECTIONS</h1>
                  <hr />
                  <div className="row">
                      {new_collections.map((item) =>
                      {
                          return  <Item item={item}/>
                      })
                      }
                  </div>
              </div>
          </div>  
      </div>
    )
  }
export default NewCollection;
