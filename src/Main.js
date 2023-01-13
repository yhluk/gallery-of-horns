import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"


class Main extends React.Component{
  render(){
    return(
      <>
      <main>
        {data.map((hornedBeast) => <HornedBeast 
          title = {hornedBeast.title}
          image_url = {hornedBeast.image_url}
          description = {hornedBeast.description}
          key = {hornedBeast._id}
          />
        )}
      </main>
      </>
    )
  }
}

export default Main;